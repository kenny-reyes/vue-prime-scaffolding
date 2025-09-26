import { test, expect } from '@playwright/test'

test.describe('Vue Prime App', () => {
  test('visits the app root url', async ({ page }) => {
    await page.goto('/')

    // Check that the main layout is rendered (more specific selector)
    await expect(page.locator('span.text-xl.font-semibold:has-text("Vue Prime Demo")')).toBeVisible()

    // Check that the drawer button is present (using icon class)
    await expect(page.locator('button:has(.mdi-menu)')).toBeVisible()
  })

  test('navigates to content page', async ({ page }) => {
    await page.goto('/')

    // Open the drawer by clicking the menu button
    await page.click('button:has(.mdi-menu)')

    // Wait for drawer to be visible and click on Content menu item
    await page.waitForSelector('text=Content', { state: 'visible' })
    await page.click('text=Content')

    // Check that we're on the content page (more specific selector)
    await expect(page.locator('.p-card-title:has-text("Content View")')).toBeVisible()
  })

  test('navigates to about page', async ({ page }) => {
    await page.goto('/')

    // Open the drawer by clicking the menu button
    await page.click('button:has(.mdi-menu)')

    // Wait for drawer to be visible and click on About menu item
    await page.waitForSelector('text=About', { state: 'visible' })
    await page.click('text=About')

    // Check that we're on the about page (check for Technologies Used card)
    await expect(page.locator('.p-card-title:has-text("Technologies Used")')).toBeVisible()
  })

  test('toggles dark mode', async ({ page }) => {
    await page.goto('/')

    // Click the theme toggle button (sun/moon icon)
    await page.click('button:has(.mdi-white-balance-sunny), button:has(.mdi-moon-waning-crescent)')

    // Check that dark mode class is applied
    await expect(page.locator('html')).toHaveClass(/app-dark/)
  })
})
