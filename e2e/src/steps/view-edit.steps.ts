import { Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { Pastebin } from '../pages/Pastebin.po';
import { AddPaste } from '../pages/add-paste.po';
import { ViewPaste } from '../pages/view-paste.po';

let addPaste: AddPaste = new AddPaste();
let mainPage: Pastebin = new Pastebin();
let viewPaste: ViewPaste = new ViewPaste();

Given('edit item is not displayed', async function () {
  expect(await viewPaste.isViewPasteModalPresent()).to.be.false;
});

When('I select edit item', async function () {
  await viewPaste.clickViewPasteButton();
});

Then('edit item is displayed', async function () {
  expect(await viewPaste.isViewPasteModalPresent()).to.be.true;
});

When('I select the close button', async function () {
  await viewPaste.clickCloseButton();
});


When('I add new data', async function () {
  await viewPaste.navigateToHome();
  await addPaste.clickCreateButton();
  await addPaste.addNewPaste();
  await addPaste.clickSaveButton();
});

When('the newly added data is in the last row', async function () {
  await viewPaste.clickViewPasteButton();
  expect(await viewPaste.isViewPasteModalPresent()).to.be.true;
  let expectedValues = ['Something here', 'Ruby', 'Test'];
  expect(await viewPaste.getPasteViewDataFromModal()).to.be.eql(expectedValues);
});

When('I can edit the data', async function () {
  await viewPaste.clickEditButton();
  await viewPaste.editPaste();
  await viewPaste.clickSaveButton();
});

Then('edit data is updated', async function () {
  expect(await viewPaste.getPasteViewDataFromModal()).to.be.eql(['Paste 2', 'JavaScript', 'Test2']);
});

When('I select edit on the last item', async function () {
  await viewPaste.clickViewPasteButton();
  await viewPaste.clickEditButton();
});

When('I select the delete button', async function () {
  await viewPaste.clickDeleteButton();
});

Then('the row is deleted', async function () {
  expect(await viewPaste.isViewPasteModalPresent()).to.be.false;
  expect(await mainPage.getLastRowData()).not.to.contain('Hello world Javascript');
});
