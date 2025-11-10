import { Component, OnInit, OnDestroy, Renderer2, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

interface Festival {
  id: string;
  name: string;
  active?: boolean;
  startDate: string;
  endDate: string;
  greeting: string;
  message: string;
  subMessage: string;
  theme: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  emoji: string;
}

interface FestivalConfig {
  festivals: Festival[];
  settings: {
    autoDismissAfter: number;
    showAnimation: boolean;
    allowDismiss: boolean;
    position: string;
  };
}

@Component({
  selector: 'app-announcement-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcement-bar.component.html',
  styleUrls: ['./announcement-bar.component.scss']
})
export class AnnouncementBarComponent implements OnInit, OnDestroy {
  activeFestival: Festival | null = null;
  showBar = false;
  dismissed = false;

  constructor(
    private http: HttpClient,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.loadFestivals();
  }

  loadFestivals() {
    this.http.get<FestivalConfig>('/assets/config/festivals.json').subscribe({
      next: (config) => {
        this.checkActiveFestival(config);
      },
      error: (err) => console.error('Error loading festivals:', err)
    });
  }

  checkActiveFestival(config: FestivalConfig) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const active = config.festivals.find(festival => {
      if (festival.active === false) return false;

      const startDate = new Date(festival.startDate);
      const endDate = new Date(festival.endDate);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999);

      return today >= startDate && today <= endDate;
    });

    if (active) {
      this.activeFestival = active;
      
      const dismissedKey = `announcement-dismissed-${active.id}`;
      const wasDismissed = localStorage.getItem(dismissedKey);
      
      if (!wasDismissed) {
        setTimeout(() => {
          this.showBar = true;
          this.addBodyClass();
        }, 300);
      }
    }
  }

  addBodyClass() {
    // Add class to body to adjust spacing
    this.renderer.addClass(this.document.body, 'announcement-bar-visible');
  }

  removeBodyClass() {
    // Remove class from body
    this.renderer.removeClass(this.document.body, 'announcement-bar-visible');
  }

  closeBar() {
    this.showBar = false;
    this.removeBodyClass();
    if (this.activeFestival) {
      localStorage.setItem(`announcement-dismissed-${this.activeFestival.id}`, 'true');
    }
  }

  ngOnDestroy() {
    // Clean up - remove class if component is destroyed
    this.removeBodyClass();
  }
}

