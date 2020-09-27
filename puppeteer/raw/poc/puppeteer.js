let puppeteer = require("puppeteer");
(async function () {
    try {
        let browser = await puppeteer.launch({
            //browser open >> visible
            headless: false,
            defaultViewport: null,
            args: ["--incognito", "--start-maximized"]
        });
        let pages = await browser.pages();
        let page = pages[0];
        await page.goto("https://www.google.com")
    }
    catch (err) {
        console.log(err);
    }
})()