import { Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { Pastebin } from '../pages/Pastebin.po';

let mainPage: Pastebin = new Pastebin();

Given(/^I am on the home page$/, async () => {
  await mainPage.navigateToHome();
});

Then('all tabs are present', async function () {
  expect(await mainPage.isHomeTabPresent()).to.be.true;
  expect(await mainPage.isAboutTabPresent()).to.be.true;
  expect(await mainPage.isContactTabPresent()).to.be.true;
});

Then('table first row contains {string}', async function (string) {
  expect(await mainPage.getFirstRowData()).to.contain(string);
});

Then('the table header should contain {string}', async function (string) {
  expect(await mainPage.getTableHeader()).to.contain(string);
});

Then('there is an add new button', async function () {
  expect(await mainPage.isAddPasteTagPresent()).to.be.true;
});
