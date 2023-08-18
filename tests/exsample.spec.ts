import { test, expect } from "@playwright/test";

test.describe("Login 成功", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.getByTestId("email").fill("sample4@gmail.com");
    await page.getByTestId("password").fill("testsample");

    await page.getByTestId("signIn").click();

    await page.screenshot({
      fullPage: true,
      path: "./tests/exsample_test/email_input.png",
    });
  });

  test("Login 成功 /about ページ表示", async ({ page }) => {
    const result = page.getByTestId("testAbout");
    await expect(result).toHaveText("page");

    await page.screenshot({
        fullPage: true,
        path: "./tests/exsample_test/login_success.png",
      });
  });
});


test.describe("Login 失敗", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.getByTestId("email").fill("sample2@gmail.com");
    await page.getByTestId("password").fill("testsample");

    await page.getByTestId("signIn").click();

    await page.screenshot({
      fullPage: true,
      path: "./tests/exsample_test/email_input2.png",
    });
  });

  test("Login 成功 /about ページ表示されない", async ({ page }) => {
    const result = page.getByTestId("mainPage");
    await expect(result).toHaveText("Sign in");

    await page.screenshot({
        fullPage: true,
        path: "./tests/exsample_test/login_success2.png",
      });
  });
});
