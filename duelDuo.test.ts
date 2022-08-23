
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
it(`Draw button displays choices`, async () => {
    const draw = await driver.findElement(By.css('draw'))
    const choices = await draw.findElement(By.css('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

it(`Check that clicking an “Add to Duo” button displays the div with id = “player-duo”`, async () => {
    const bot_btn = await driver.findElement(By.className("bot-btn"))
    const player_duo = await bot_btn.findElement(By.id('player-duo'))
    const displayed = await player_duo.isDisplayed()
    expect(displayed).toBe(true)
})