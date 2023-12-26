import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  readonly getUserNameField: Locator;
  readonly getPasswordField: Locator;
  readonly getSubmitLoginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getUserNameField = page.locator("xpath=//input[@id='user-name']");
    this.getPasswordField = page.locator("xpath=//input[@id='password']");
    this.getSubmitLoginBtn = page.locator("xpath=//input[@type='submit']");
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com/");
  }
}
