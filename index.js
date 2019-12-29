const puppeteer = require("puppeteer");
const cron = require("node-cron");

const init = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: "/Users/hitesh/Library/Application Support/Google/Chrome"
  });
  const page = await browser.newPage();
  await page.goto("https://web.whatsapp.com/");
  await page.setViewport({ width: 1440, height: 703 });
  setCron(page, "Radhey Radhey!!!");
  // await browser.close()
};

//test
init().catch(e => {
  console.log({ e });
});
const serachThreadAndEnter = async (page, threadName) => {
  //click sidebar search for group
  await page.waitForSelector("#side > div._2HS9r > div > label > input");
  // type group name
  await page.type("#side > div._2HS9r > div > label > input", threadName, {
    delay: 1
  });
  // press Enter key
  await page.keyboard.press(String.fromCharCode(13));
};

const sendMessage = async (page, message) => {
  const el = await page.evaluateHandle(() => document.activeElement);
  // type message
  await el.type(message);
  // press Enter key
  await page.keyboard.press(String.fromCharCode(13));
};

const setCron = (page, message) => {
  // every dat at 3 am
  cron.schedule("0 3 * * *", async () => {
    console.log("sending message");
    await serachThreadAndEnter(page, "Ultimate Family");
    await sendMessage(page, message);
  });
};
