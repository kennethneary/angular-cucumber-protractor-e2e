import {
  by,
  element,
  promise,
  ElementFinder,
  ElementArrayFinder,
} from 'protractor';
import { Base } from './base.po';

export class ViewPaste extends Base {

  getAllPastes(): ElementArrayFinder {
    return element.all(by.tagName('app-view-paste'));
  }
  getIndividualPaste(): ElementFinder {
    return this.getAllPastes().last();
  }

  /* View Paste button */
  getViewPasteButton(): ElementArrayFinder {
    return this.getIndividualPaste().all(by.buttonText('View Paste'));
  }

  clickViewPasteButton(): promise.Promise<void> {
    return this.getViewPasteButton().click();
  }

  /* View Paste Modal window */
  getViewPasteModal(): ElementFinder {
    return this.getIndividualPaste().element(by.id('source-modal'));
  }

  isViewPasteModalPresent(): promise.Promise<boolean> {
    return this.getViewPasteModal().isPresent();
  }

  /*Close button*/
  getCloseButton(): ElementFinder {
    return this.getIndividualPaste().element(by.buttonText('Close'));
  }

  clickCloseButton(): promise.Promise<void> {
    return this.getCloseButton().click();
  }

  /* Edit button */
  getEditButton(): ElementFinder {
    return this.getIndividualPaste().element(by.buttonText('Edit Paste'));
  }

  clickEditButton(): promise.Promise<void> {
    return this.getEditButton().click();
  }

  /* Save button */
  getSaveButton(): ElementFinder {
    return this.getIndividualPaste().element(by.buttonText('Save Paste'));
  }

  clickSaveButton(): promise.Promise<void> {
    return this.getSaveButton().click();
  }

  /* Delete button */
  getDeleteButton(): ElementFinder {
    return this.getIndividualPaste().element(by.buttonText('Delete Paste'));
  }

  clickDeleteButton(): promise.Promise<void> {
    return this.getDeleteButton().click();
  }

  /*Retrieving Paste data from Modal window */
  getTitle(): ElementFinder {
    return this.getIndividualPaste().element(by.className('modal-title'));
  }

  getLanguage(): ElementFinder {
    return this.getIndividualPaste().element(by.className('modal-language'));
  }

  getPaste(): ElementFinder {
    return this.getIndividualPaste().element(by.className('modal-paste'));
  }

  async getPasteDataFromModal(): Promise<string[]> {
    //The Paste data values is returned when all the promises are resolved
    const allData = await Promise.all([
      this.getTitle().getText(),
      this.getLanguage().getText(),
      this.getPaste().getText(),
    ]);
    return allData.map(value => (value = value.replace(/\s/g, '')));
  }

  /*Edit Modal window data */
  async editPaste(): Promise<string[]> {
    //Get Edited MockPaste data
    let editedPaste = this.getEditedMockPaste();

    // Send input to the Input fields
    await this.getInputTitle().clear();
    await this.getInputTitle().sendKeys(editedPaste.title);
    await this.getInputLanguage()
      .element(by.cssContainingText('option', editedPaste.language))
      .click();
    await this.getInputPaste().clear();
    await this.getInputPaste().sendKeys(editedPaste.paste);

    //Convert the paste object into an array
    return Object.keys(editedPaste).map(key => editedPaste[key]);
  }
}
