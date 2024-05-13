import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    slowMo: 100,
    userDataDir: "temporary",
  });

  const page = await browser.newPage();

  try {
    await page.goto('https://duckduckgo.com', {
      waitUntil: "networkidle2",
      timeout: 60000,
    });
    await page.waitForSelector('#searchbox_input');
    await page.type('#searchbox_input', 'aansourav github');
    await page.click('.searchbox_searchButton__F5Bwq');
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    await page.screenshot({ path: "github-aansourav.png" });
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    await browser.close();
  }
})();
