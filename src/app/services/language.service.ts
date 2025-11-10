import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'te';

export interface Translations {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<Language>('en');
  public language$ = this.languageSubject.asObservable();

  private translations: { [key in Language]: Translations } = {
    en: {},
    te: {}
  };

  constructor() {
    this.initializeLanguage();
    this.loadTranslations();
  }

  private initializeLanguage() {
    const savedLanguage = localStorage.getItem('language') as Language;
    const language = savedLanguage || 'en';
    this.languageSubject.next(language);
  }

  private async loadTranslations() {
    try {
      const enResponse = await fetch('/assets/i18n/en.json');
      const teResponse = await fetch('/assets/i18n/te.json');
      
      this.translations.en = await enResponse.json();
      this.translations.te = await teResponse.json();
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  }

  setLanguage(language: Language) {
    this.languageSubject.next(language);
    localStorage.setItem('language', language);
  }

  toggleLanguage() {
    const currentLanguage = this.languageSubject.value;
    const newLanguage: Language = currentLanguage === 'en' ? 'te' : 'en';
    this.setLanguage(newLanguage);
  }

  getCurrentLanguage(): Language {
    return this.languageSubject.value;
  }

  translate(key: string): string {
    const language = this.languageSubject.value;
    const keys = key.split('.');
    let value: any = this.translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }

    return value || key;
  }

  getTranslations(): Translations {
    const language = this.languageSubject.value;
    return this.translations[language];
  }
}




