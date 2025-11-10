import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a 
      href="https://wa.me/919700176998?text=Hi%2C%20I'm%20interested%20in%20your%20granite%20and%20marble%20products" 
      class="whatsapp-float" 
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.281 4.65C24.318 1.686 20.424 0.062 16.23 0.06C7.582 0.06 0.542 7.1 0.539 15.748C0.538 18.422 1.247 21.037 2.596 23.343L0.417 31.94L9.205 29.804C11.427 31.042 13.904 31.695 16.424 31.696H16.431C25.078 31.696 32.119 24.656 32.122 16.008C32.124 11.815 30.502 7.921 27.281 4.65ZM16.23 29.01H16.224C13.974 29.009 11.766 28.388 9.837 27.216L9.369 26.933L4.059 28.274L5.426 23.087L5.116 22.602C3.825 20.604 3.142 18.303 3.143 15.949C3.145 8.543 9.024 2.665 16.434 2.665C19.978 2.666 23.318 4.047 25.838 6.569C28.358 9.091 29.737 12.432 29.736 15.976C29.734 23.382 23.855 29.01 16.23 29.01ZM23.819 19.407C23.417 19.206 21.437 18.231 21.068 18.097C20.699 17.963 20.429 17.896 20.16 18.298C19.89 18.7 19.115 19.608 18.878 19.878C18.641 20.148 18.404 20.181 18.002 19.98C17.6 19.779 16.308 19.351 14.775 17.986C13.581 16.922 12.757 15.601 12.52 15.199C12.283 14.797 12.496 14.576 12.697 14.376C12.878 14.195 13.099 13.905 13.3 13.668C13.501 13.431 13.568 13.261 13.702 12.991C13.836 12.721 13.769 12.484 13.668 12.283C13.568 12.082 12.747 10.1 12.411 9.296C12.082 8.515 11.748 8.623 11.499 8.611L10.733 8.597C10.463 8.597 10.028 8.697 9.659 9.099C9.29 9.501 8.248 10.476 8.248 12.458C8.248 14.44 9.692 16.356 9.893 16.626C10.094 16.896 12.754 21.132 16.814 22.883C17.763 23.313 18.505 23.577 19.084 23.774C20.037 24.076 20.906 24.034 21.593 23.931C22.364 23.815 23.987 22.949 24.323 21.999C24.659 21.049 24.659 20.232 24.558 20.065C24.457 19.898 24.187 19.798 23.785 19.597L23.819 19.407Z" fill="white"/>
      </svg>
      <span class="whatsapp-tooltip">Chat with us!</span>
    </a>
  `,
  styles: [`
    .whatsapp-float {
      position: fixed;
      width: 60px;
      height: 60px;
      bottom: 30px;
      right: 30px;
      background-color: #25D366;
      color: #FFF;
      border-radius: 50px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
      z-index: 1000;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .whatsapp-float:hover {
      background-color: #128C7E;
      transform: scale(1.1);
      box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.4);
    }

    .whatsapp-float svg {
      filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
    }

    .whatsapp-tooltip {
      position: absolute;
      right: 70px;
      background: #2c3e50;
      color: white;
      padding: 8px 15px;
      border-radius: 8px;
      font-size: 14px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .whatsapp-tooltip::after {
      content: '';
      position: absolute;
      right: -8px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid #2c3e50;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
    }

    .whatsapp-float:hover .whatsapp-tooltip {
      opacity: 1;
    }

    @media (max-width: 768px) {
      .whatsapp-float {
        width: 50px;
        height: 50px;
        bottom: 20px;
        right: 20px;
      }

      .whatsapp-float svg {
        width: 28px;
        height: 28px;
      }

      .whatsapp-tooltip {
        display: none;
      }
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }

    .whatsapp-float {
      animation: pulse 2s infinite;
    }

    .whatsapp-float:hover {
      animation: none;
    }
  `]
})
export class WhatsappButtonComponent {}




