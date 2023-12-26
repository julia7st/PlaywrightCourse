import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-object/LoginPage";
import { InventoryPage } from "../page-object/InventoryPage";
import { CartPage } from "../page-object/CartPage";

//Test1
test("Log in/Log out from the site", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.getUserNameField.pressSequentially("standard_user");
  await loginPage.getPasswordField.pressSequentially("secret_sauce");
  await loginPage.getSubmitLoginBtn.click();
  await inventoryPage.getSideBarMenu.click();
  await inventoryPage.getLogoutBtn.click();
  expect(page.url()).toBe("https://www.saucedemo.com/");
});

//Test2
test("Verify the link for Cart page", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.getUserNameField.pressSequentially("standard_user");
  await loginPage.getPasswordField.pressSequentially("secret_sauce");
  await loginPage.getSubmitLoginBtn.click();
  await inventoryPage.getCartButton.click();
  expect(page.url()).toBe("https://www.saucedemo.com/cart.html");
});

//Test3
test("Verify the ContinueShopping button", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.getUserNameField.pressSequentially("standard_user");
  await loginPage.getPasswordField.pressSequentially("secret_sauce");
  await loginPage.getSubmitLoginBtn.click();
  await inventoryPage.getCartButton.click();
  await cartPage.getContinueShoppingBtn.click();
  await expect(page).toHaveURL(/.*inventory*/);
});
