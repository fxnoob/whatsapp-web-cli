const cron = require("node-cron");
const { WhatsappWebAutomation } = require("./whatsapp");
const message = "Radhey Radhey!!!";
const whatsapp = new WhatsappWebAutomation();

const Store = [
  { group: "Renu Sis", message: message },
  { group: "Hom3", message: message },
  { group: "Daddy", message: message },
  { group: "Dinesh Bhagwan Singh", message: message },
  { group: "Ultimate Family", message: message }
];
const setCron = async () => {
  await whatsapp.init();
  // every day at 3 am
  cron.schedule("0 3 * * *", async () => {
    console.log("sending messages");
    for (let i = 0; i < Store.length; i++) {
      await whatsapp.send(Store[i].group, Store[i].message);
    }
  });
};
const init = async () => {
  await setCron();
};

//test
init().catch(e => {
  console.log({ e });
});
