import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { AnnouncementBarComponent } from './components/announcement-bar/announcement-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappButtonComponent, AnnouncementBarComponent],
  template: `
    <app-announcement-bar></app-announcement-bar>
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <app-whatsapp-button></app-whatsapp-button>
  `,
  styles: [`
    main {
      min-height: calc(100vh - 200px);
      margin-top: 0;
      transition: margin-top 0.3s ease;
    }
    
    /* Only add margin when announcement bar is visible */
    :host-context(body.announcement-bar-visible) main {
      margin-top: 50px;
    }
    
    @media (max-width: 768px) {
      :host-context(body.announcement-bar-visible) main {
        margin-top: 60px;
      }
    }
  `]
})
export class AppComponent {
  title = 'Mahalakshmi Granites and Marbles';
}

