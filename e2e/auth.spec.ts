import { expect, test } from "@playwright/test"

test("require authentication", async ({ page }) => {
  await page.goto("./")
  await expect(page).toHaveTitle(/Log in/)
})
