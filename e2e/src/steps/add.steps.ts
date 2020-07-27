import { Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { Pastebin } from '../pages/Pastebin.po';
import { AddPaste } from '../pages/add-paste.po';

let addPaste: AddPaste = new AddPaste();
let mainPage: Pastebin = new Pastebin();

Given('The button should exist', async function () {
  expect(await addPaste.isCreateButtonPresent()).to.be.true;
});

Given('The modal window is not present', async function () {
  expect(await addPaste.isCreatePasteModalPresent()).to.be.false;
});

When('I click the add button', async function () {
  await addPaste.clickCreateButton();
});

Then('The modal window should appear', async function () {
  expect(await addPaste.isCreatePasteModalPresent()).to.be.true;
});

When('I add new data and save', async function () {
    await addPaste.clickCreateButton();
    const emptyInputValues = ["","",""];
    const res = await addPaste.getInputPasteValues()
    expect(await addPaste.getInputPasteValues()).to.eql(emptyInputValues);

    const newInputValues = await addPaste.addNewPaste();
    expect(await addPaste.getInputPasteValues()).to.eql(newInputValues);
    await addPaste.clickSaveButton();
});

Then('the added data is in the last row', async function () {
  expect(await addPaste.isCreatePasteModalPresent()).to.be.false;
  expect(await mainPage.getLastRowData()).to.contain("Something here");
});

When('I click the close button', async function () {
  await addPaste.clickCloseButton();
});

