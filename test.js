const { WhatsappWebAutomation } = require("./whatsapp");
const message = "Radhey Radhey!!!";
const whatsapp = new WhatsappWebAutomation();

const Store = [
  { group: "john doe", message: message },
  { group: "john doe", message: message },
  { group: "john doe", message: message },
  { group: "Gjohn doe", message: message },
  { group: "john doe", message: message },
];
const init = async () => {
  await whatsapp.init();
  for (let i = 0; i < Store.length; i++) {
    await whatsapp.send(Store[i].group, Store[i].message);
  }
};

//test
init().catch(e => {
  console.log({ e });
});
