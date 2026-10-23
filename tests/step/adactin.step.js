import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../page/LoginPage.js';

Given('Navigate to adactin application', { timeout: 30000 }, async function () {
    this.login = new LoginPage(this.page);
    await this.login.visitUrl();
});

When('enter the username in username field', async function () {
    await this.login.enterUsername('AlexChelsuya');
});

When('enter the password in password field', async function () {
    await this.login.enterPassword('Ada_1997');
});

Then('click the login button', async function () {
    await this.login.clickButton();
});

When('enter the {string} in username field',async function (string) {
  await this.login.enterUsername(string)
});

When('enter the {string} in password field',async function (string) {
    await this.login.enterPassword(string)
});