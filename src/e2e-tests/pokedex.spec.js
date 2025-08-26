// e2e-tests/pokedex.spec.js
const { test, expect } = require('@playwright/test')

test.describe('Pokedex', () => {

  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:5000')  // match your start-prod port
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('can navigate to a Pokemon page', async ({ page }) => {
    await page.goto('http://localhost:5000')
    await page.getByText('ivysaur').click()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })

})
