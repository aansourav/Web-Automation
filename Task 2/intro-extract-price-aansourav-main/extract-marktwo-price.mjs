import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: { width: 1920, height: 1080 },
        slowMo: 100,
        userDataDir: "temporary",
    });

    const page = await browser.newPage();
    await page.goto("https://www.studioneat.com/products/marktwo");

    const priceText = await page.evaluate(() => {
        const div = document.querySelector(".product-price");
        return div ? div.innerText : "Price Div not found";
    });
    console.log(priceText);
    await browser.close();
})();
