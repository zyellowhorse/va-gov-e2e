import { test, expect } from '@playwright/test'
import { VAGovSigInPage } from './objects/va-gov-sign-in-page.ts';

test('test login', async ({ page }) => {
  const signInPage = new VAGovSigInPage(page);
  await signInPage.goto();
  await signInPage.loginGov() //values
  //await expect(signInPage.title).toHaveText('');
})
