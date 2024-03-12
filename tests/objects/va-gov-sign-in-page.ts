import { expect, type Locator, type Page } from '@playwright/test';

export class VAGovSignInPage {
  readonly page: Page;
  readonly loginGovLocator: Locator;
  readonly idMeLocator: Locator;
  readonly dsLoginLocator: Locator;
  readonly myHealtheVetLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    this.loginGovLocator = page.getByRole('button', { name: 'Sign in with Login.gov' });
    this.idMeLocator = page.getByRole('button', { name: 'Sign in with ID.me' });
    this.dsLoginLocator = page.getByRole('button', { name: 'Sign in with DS Logon' });
    this.myHealtheVetLocator = page.getByRole('button', { name: 'Sign in with My HealtheVet' });
  }

  async goto() {
    await this.page.goto('https://www.va.gov/sign-in');
  }

  async loginGov() {
    await this.loginGovLocator.click();
    //send to secure login page
    //expect
  }

  async idMe() {
    await this.idMeLocator.click();
  }

  async dsLogin() {
    await this.dsLoginLocator.click();
  }

  async myHealtheVet() {
    await this.myHealtheVetLocator.click();
  }
}
