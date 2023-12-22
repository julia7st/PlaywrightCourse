import { expect, type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;

  readonly getSideBarMenu: Locator;
  readonly getLogoutBtn: Locator;
  readonly getCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getSideBarMenu = page.locator("xpath=//button[@id='react-burger-menu-btn']")
    this.getLogoutBtn = page.locator("xpath=//a[contains(text(),'Logout')]");
    this.getCartButton = page.locator("xpath=//a[@class='shopping_cart_link']")
  }
}
