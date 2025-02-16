import { expect, test } from "@playwright/test"

test("renders the home page", async ({ page }) => {
  await page.goto("./")
  await expect(page).toHaveTitle(/Next.js Enterprise Boilerplate/)
})
