import { expect, type Locator, type Page } from '@playwright/test';

export class VAGovSecureLogin {
  readonly page: Page;
  readonly textEmailLocator: Locator;
  readonly textPasswordLocator: Locator;
  readonly buttonSigninLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    this.textEmailLocator = page.getByRole('textbox', { name: 'user[email]' });
    this.textPasswordLocator = page.getByRole('textbox', { name: 'user[password]' });
    this.buttonSigninLocator = page.getByRole('button', { name: 'button' });
  }

  async Login() {
    await this.textEmailLocator.fill('testvalue1');
    await this.textPasswordLocator.fill('testvalue2');
    await this.buttonSigninLocator.click();
  }
}
