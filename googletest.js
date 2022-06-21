const {Builder, By, Key} = require("selenium-webdriver");
const assert = require("assert");

describe("check the search functionality in google", function() {
    this.timeout(30000);

    let driver;

    beforeEach(async () => {
        driver = await new Builder().forBrowser("chrome").build();
    });

    afterEach(async () => {
        await driver.quit();
    });

    it("Go to google and search for nationwide", async () => {
        driver.get("http://www.google.co.uk");
        driver.findElement(By.id("L2AGLb")).click();
        await driver.findElement(By.name("q")).sendKeys("nationwide", Key.ENTER);
        const val = await driver.wait(driver.getTitle(), 1000);

        assert.equal(val, "nationwide - Google Search");
    });

    it("Go to google and search for surfing", async () => {
        driver.get("http://www.google.co.uk");
        driver.findElement(By.id("L2AGLb")).click();
        await driver.findElement(By.name("q")).sendKeys("surfing", Key.ENTER);
        const val = await driver.wait(driver.getTitle(), 1000);

        assert.equal(val, "surfing - Google Search");
    });
})