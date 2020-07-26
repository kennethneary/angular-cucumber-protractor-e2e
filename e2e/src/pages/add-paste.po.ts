import {
  by,
  element,
  promise,
  ElementFinder,
} from 'protractor';
import { Base } from './base.po';

export class AddPaste extends Base {

  getAddPaste(): ElementFinder {
    return element(by.tagName('app-add-paste'));
  }

  /* Create Paste button */
  getCreateButton(): ElementFinder {
    return this.getAddPaste().element(by.buttonText('create Paste'));
  }

  isCreateButtonPresent(): promise.Promise<boolean> {
    return this.getCreateButton().isPresent();
  }

  clickCreateButton(): promise.Promise<void> {
    return this.getCreateButton().click();
  }

  /*Create Paste Modal */
  getCreatePasteModal(): ElementFinder {
    return this.getAddPaste().element(by.id('source-modal'));
  }

  isCreatePasteModalPresent(): promise.Promise<boolean> {
    return this.getCreatePasteModal().isPresent();
  }

  /*Save button */
  getSaveButton(): ElementFinder {
    return this.getAddPaste().element(by.buttonText('Save'));
  }

  clickSaveButton(): promise.Promise<void> {
    return this.getSaveButton().click();
  }

  /*Close button */
  getCloseButton(): ElementFinder {
    return this.getAddPaste().element(by.buttonText('Close'));
  }

  clickCloseButton(): promise.Promise<void> {
    return this.getCloseButton().click();
  }

  /* Get Input Paste values from the Modal window */
  async getInputPasteValues(): Promise<any> {
    return await Promise.all([
      this.getInputTitle().getAttribute('value'),
      this.getInputLanguage().getAttribute('value'),
      this.getInputPaste().getAttribute('value'),
    ]);
  }

  /* Add a new Paste */
  async addNewPaste(): Promise<string[]> {
    let newPaste: any = this.getMockPaste();

    await this.getInputTitle().sendKeys(newPaste.title);
    await this.getInputLanguage()
      .element(by.cssContainingText('option', newPaste.language))
      .click();
    await this.getInputPaste().sendKeys(newPaste.paste);

    return Object.keys(newPaste).map(key => newPaste[key]);
  }
}
