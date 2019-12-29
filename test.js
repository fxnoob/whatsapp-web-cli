const { WhatsappWebAutomation } = require("./whatsapp");
const message = "Radhey Radhey!!!";
const whatsapp = new WhatsappWebAutomation();

const Store = [
  { group: "Renu Sis", message: message },
  { group: "Hom3", message: message },
  { group: "Daddy", message: message },
  { group: "Dinesh Bhagwan Singh", message: message },
  { group: "Pawan‪ Saini‪ Deeg", message: message }
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
