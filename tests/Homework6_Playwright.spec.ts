import { test, expect } from "@playwright/test";

//Test1
test("Validate sections on log in page", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  expect(page.getByText("Swag Labs")).toBeVisible;
  expect(page.locator('[data-test="username"]')).toBeVisible;
  expect(page.locator('[data-test="password"]')).toBeVisible;
  expect(page.locator('[data-test="login-button"]')).toBeVisible;
});

//Test2
test("Verify the user can log into the site", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page
    .locator('[data-test="username"]')
    .pressSequentially("standard_user");
  await page
    .locator('[data-test="password"]')
    .pressSequentially("secret_sauce");
  await page.click('[data-test="login-button"]');
});

//Test3
test("Verify the inventory URL", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page
    .locator('[data-test="username"]')
    .pressSequentially("standard_user");
  await page
    .locator('[data-test="password"]')
    .pressSequentially("secret_sauce");
  await page.click('[data-test="login-button"]');
  expect(page.getByText("Swag Labs")).toBeVisible;
  expect(page.getByText("Products")).toBeVisible;
  expect(page.locator("#shopping_cart_container a")).toBeVisible;
  await expect(page).toHaveURL(/.*inventory*/);
});

//Test4
test("Verify the image of the item", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').pressSequentially("standard_user");
  await page
    .locator('[data-test="password"]')
    .pressSequentially("secret_sauce");
  await page.click('[data-test="login-button"]');
  await page.click("#item_4_title_link");
  expect(page.getByRole("img", { name: "Sauce Labs Backpack" })).toBeVisible;
});

//Test5
test("Verify remove button", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page
    .locator('[data-test="username"]')
    .pressSequentially("standard_user");
  await page
    .locator('[data-test="password"]')
    .pressSequentially("secret_sauce");
  await page.click('[data-test="login-button"]');
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  const button = await page.$('[data-test="remove-sauce-labs-backpack"]');
  if (button) {
    const buttonText = await button.innerText();
    const expectedTitle = "Remove";

    if (buttonText === expectedTitle) {
      console.log("Button title is correct:", buttonText);
    } else {
      console.log("Button title is incorrect");
    }
  } else {
    console.log("Button not found");
  }
});

