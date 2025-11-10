import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Festival {
  id: string;
  name: string;
  active: boolean;
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
  showOnPages: string[];
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
  selector: 'app-festival-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './festival-banner.component.html',
  styleUrls: ['./festival-banner.component.scss']
})
export class FestivalBannerComponent implements OnInit {
  activeFestival: Festival | null = null;
  showBanner = false;
  dismissed = false;

  constructor(private http: HttpClient) {}

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

    // FULLY AUTOMATED: Check dates automatically, "active" only for permanent disable
    const active = config.festivals.find(festival => {
      // If active is explicitly set to false, skip this festival (permanent disable)
      if (festival.active === false) return false;

      const startDate = new Date(festival.startDate);
      const endDate = new Date(festival.endDate);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999);

      // AUTOMATIC: Show if today is between start and end dates
      return today >= startDate && today <= endDate;
    });

    if (active) {
      this.activeFestival = active;
      
      // Check if user already dismissed this festival
      const dismissedKey = `festival-dismissed-${active.id}`;
      const wasDismissed = localStorage.getItem(dismissedKey);
      
      if (!wasDismissed) {
        setTimeout(() => {
          this.showBanner = true;
        }, 500);

        // Auto dismiss after specified time
        if (config.settings.autoDismissAfter) {
          setTimeout(() => {
            this.closeBanner();
          }, config.settings.autoDismissAfter);
        }
      }
    }
  }

  closeBanner() {
    this.showBanner = false;
    if (this.activeFestival) {
      localStorage.setItem(`festival-dismissed-${this.activeFestival.id}`, 'true');
    }
  }
}

