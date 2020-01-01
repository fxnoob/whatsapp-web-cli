const { WhatsappWebAutomation } = require("./whatsapp");
const data = require("./data");
const message = "Like birds, let us, leave behind what we don’t need to carry, grudges sadness pain fear and regrets. life is beautiful, enjoy it. HAPPY NEW YEAR 2020";
const whatsapp = new WhatsappWebAutomation();

const Store = data;
const init = async () => {
    await whatsapp.init();
    for (let i = 0; i < Store.length; i++) {
        if (Store[i]["Mobile Phone"] != '') {
            console.log({mob: Store[i]["Mobile Phone"]});
            await whatsapp.send(Store[i]["Mobile Phone"], message);
            await whatsapp.sleep(10);
        }
    }
};

//test
init().catch(e => {
    console.log({ e });
});
