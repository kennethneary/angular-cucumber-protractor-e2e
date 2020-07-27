import {
  browser,
  by,
  element,
  promise,
  ElementFinder,
} from 'protractor';

export class Base {

  /* Navigational methods */
  navigateToHome(): promise.Promise<any> {
    return browser.get('/');
  }

  navigateToAbout(): promise.Promise<any> {
    return browser.get('/about');
  }

  navigateToContact(): promise.Promise<any> {
    return browser.get('/contact');
  }

  /* Methods shared by addPaste and viewPaste */
  getInputTitle(): ElementFinder {
    return element(by.name('title'));
  }

  getInputLanguage(): ElementFinder {
    return element(by.name('language'));
  }

  getInputPaste(): ElementFinder {
    return element(by.name('paste'));
  }

  getHomeTab(): ElementFinder {
    return element(by.cssContainingText('.nav-link', 'Pastebin Home'));
  }

  getAboutTab(): ElementFinder {
    return element(by.cssContainingText('.nav-link', 'About Pastebin'));
  }

  getContactTab(): ElementFinder {
    return element(by.css('a[routerLink="/contact"]'));
  }

  isHomeTabPresent(): promise.Promise<boolean> {
    return this.getHomeTab().isPresent();
  }

  isAboutTabPresent(): promise.Promise<boolean> {
    return this.getAboutTab().isPresent();
  }

  isContactTabPresent(): promise.Promise<boolean> {
    return this.getContactTab().isPresent();
  }

  /* Mock data for creating a new Paste and editing existing paste */
  getMockPaste(): any {
    let paste: any = {
      title: 'Something  here',
      language: 'Ruby',
      paste: 'Test',
    };
    return paste;
  }

  getEditedMockPaste(): any {
    let paste: any = {
      title: 'Paste 2',
      language: 'JavaScript',
      paste: 'Test2',
    };
    return paste;
  }
}
