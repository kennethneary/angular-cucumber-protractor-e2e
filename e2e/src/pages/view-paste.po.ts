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
    return this.getIndividualPaste().element(by.id('viewModal'));
  }

  isViewPasteModalPresent(): promise.Promise<boolean> {
    return this.getViewPasteModal().isPresent();
  }

  /*Close button*/
  getCloseButton(): ElementFinder {
    return this.getViewPasteModal().element(by.buttonText('Close'));
  }

  clickCloseButton(): promise.Promise<void> {
    return this.getCloseButton().click();
  }

  /* Edit button */
  getEditButton(): ElementFinder {
    return this.getViewPasteModal().element(by.buttonText('Edit Paste'));
  }

  clickEditButton(): promise.Promise<void> {
    return this.getEditButton().click();
  }

  /* Save button */
  getSaveButton(): ElementFinder {
    return this.getViewPasteModal().element(by.buttonText('Save Paste'));
  }

  clickSaveButton(): promise.Promise<void> {
    return this.getSaveButton().click();
  }

  /* Delete button */
  getDeleteButton(): ElementFinder {
    return this.getViewPasteModal().element(by.buttonText('Delete Paste'));
  }

  clickDeleteButton(): promise.Promise<void> {
    return this.getDeleteButton().click();
  }

  /*Retrieving Paste data from Modal window */
  getViewable(): ElementFinder {
    return this.getViewPasteModal().element(by.css('.viewable'));
  }

  getEditable(): ElementFinder {
    return this.getViewPasteModal().element(by.css('.editable'));
  }

  getViewTitle(): ElementFinder {
    return this.getViewable().element(by.className('modal-title'));
  }

  getViewLanguage(): ElementFinder {
    return this.getViewable().element(by.className('modal-language'));
  }

  getViewPaste(): ElementFinder {
    return this.getViewable().element(by.className('modal-paste'));
  }

  getEditTitle(): ElementFinder {
    return this.getEditable().element(by.className('modal-title'));
  }

  getEditLanguage(): ElementFinder {
    return this.getEditable().element(by.className('modal-language'));
  }

  getEditPaste(): ElementFinder {
    return this.getEditable().element(by.className('modal-paste'));
  }

  async getPasteViewDataFromModal(): Promise<string[]> {
    const result = await Promise.all([
      this.getViewTitle().getText(),
      this.getViewLanguage().getText(),
      this.getViewPaste().getText(),
    ]);

    return result.map(s => s.trim());
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
