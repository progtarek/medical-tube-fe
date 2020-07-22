import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'tube-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentLang: 'ar' | 'en' = 'ar';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ar');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang as 'ar' | 'en';
    });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
