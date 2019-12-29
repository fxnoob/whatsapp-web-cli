const puppeteer = require("puppeteer");

class WhatsappWebAutomation {
  constructor() {
    this.browser = null;
    this.page = null;
    this.init = this.init.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.serachThreadAndEnter = this.serachThreadAndEnter.bind(this);
    this.send - this.send.bind(this);
  }
  async sleep(miliSenconds) {
      return new Promise(resolve => {
          setTimeout(() => {
              resolve(miliSenconds);
          }, miliSenconds);
      })
  }
  async init() {
    this.browser = await puppeteer.launch({
      headless: false,
      userDataDir: "/Users/hitesh/Library/Application Support/Google/Chrome"
    });
    this.page = await this.browser.newPage();
    await this.page.goto("https://web.whatsapp.com/");
    await this.page.setViewport({ width: 1440, height: 703 });
  }
  async serachThreadAndEnter(threadName) {
    //click sidebar search for group
    await this.page.waitForSelector("#side > div._2HS9r > div > label > input");
    // type group name
    await this.page.type(
      "#side > div._2HS9r > div > label > input",
      threadName,
      {
        delay: 1
      }
    );
      // press Enter key
      await this.page.keyboard.press(String.fromCharCode(13));
  }
  async sendMessage(message) {
    const el = await this.page.evaluateHandle(() => document.activeElement);
    // type message
    await el.type(message);
    // press Enter key
    await this.page.keyboard.press(String.fromCharCode(13));
  }
  async send(threadName, message) {
    await this.serachThreadAndEnter(threadName);
    await this.sendMessage(message);
  }
}

module.exports = {
  WhatsappWebAutomation
};
