import { browser, element, by } from 'protractor';

export class EccgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ecc-root h1')).getText();
  }
}
