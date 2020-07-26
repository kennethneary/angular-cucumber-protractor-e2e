import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { Base } from '../pages/base.po';

let page: Base;

Before(() => {
  page = new Base();
});

Given(/^I am on the home page$/, async () => {
  await page.navigateToHome();
});

When(/^I do nothing$/, () => {});

Then(/^I should see the title$/, async () => {
  // expect(await page.getTitleText()).to.equal('Welcome to angular-cli-cucumber-demo!');
});
