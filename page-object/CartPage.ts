import { expect, type Locator, type Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  readonly getContinueShoppingBtn: Locator;
  readonly getCheckoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getContinueShoppingBtn = page.locator("xpath=//button[@id='continue-shopping']");
    this.getCheckoutBtn = page.locator("xpath=//button[@id='checkout']");
  }
}
