import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    // @ts-ignore:next-line:no-any
    return browser.get(browser.baseUrl) as Promise;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
