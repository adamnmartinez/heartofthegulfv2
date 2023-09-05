import datesImg from "../assets/images/dates.jpg";
import falafelImg from "../assets/images/falafel.jpg";
import hummusImg from "../assets/images/hummus.jpg";
import sambusaImg from "../assets/images/sambusa.jpg";
import hareesImg from "../assets/images/harees.jpg";
import waraenebImg from "../assets/images/waraeneb.jpg";
import americanoImg from "../assets/images/americano.jpg";
import arabiccoffeeImg from "../assets/images/arabiccoffee.jpg";
import turkishcoffeeImg from "../assets/images/turkishcoffee.jpg";
import shakeImg from "../assets/images/shake.jpg";
import lemonadeImg from "../assets/images/lemonade.jpg";
import hibiscusImg from "../assets/images/hibiscus.jpg";
import chaiImg from "../assets/images/chai.jpg";
import sodaImg from "../assets/images/soda.jpg";
import eggsImg from "../assets/images/eggs.jpg";
import fulImg from "../assets/images/ful.jpg";
import omeletteImg from "../assets/images/omelette.jpg";
import musabahaImg from "../assets/images/musabaha.jpg";
import manaeshImg from "../assets/images/manakeesh.jpg";
import chickenbiryaniImg from "../assets/images/chickenbiryani.jpg";
import cutletsImg from "../assets/images/cutlets.jpg";
import kabsaImg from "../assets/images/kabsa.jpg";
import kingfishImg from "../assets/images/kingfish.jpg";
import lambImg from "../assets/images/lamb.jpg";
import lambchopsImg from "../assets/images/lambchops.jpg";
import musakaImg from "../assets/images/musaka.jpg";
import baklawaImg from "../assets/images/baklawa.jpg";
import donutsImg from "../assets/images/donuts.jpg";
import kaimatiImg from "../assets/images/kaimati.jpg";
import mandaziImg from "../assets/images/mandazi.jpg";

const appMenu = {};
const bevMenu = {};
const breakfastMenu = {};
const dinnerMenu = {};
const desertMenu = {};

const menuItem = (name, imgURL, desc, price, newTag = false) => {
  return { name, imgURL, desc, price, newTag };
};

appMenu.dates = menuItem(
  "Dates",
  datesImg,
  "Fresh medjdool dates, grown right here in California (6 pcs).",
  1.99,
);
appMenu.falafel = menuItem(
  "Falafel",
  falafelImg,
  "Crunchy falafel made in the traditional Yemeni way. Served with house tahini sauce (6 pcs).",
  2.99,
);
appMenu.hummus = menuItem(
  "Hummus",
  hummusImg,
  "Homemade hummus with garlic, tahini, chickpeas, cumin, and lemon juice. Served with bread.",
  2.99,
);
appMenu.sambusa = menuItem(
  "Sambusa Emirati",
  sambusaImg,
  "A flavorful assortment of Emirati sambusa, can be prepared with vegetables or minced beef (8 pcs).",
  3.99,
);
appMenu.harees = menuItem(
  "Harees",
  hareesImg,
  "A signature Emirati delicacy, made with wheat and your selection of chicken or beef.",
  3.99,
);
appMenu.waraeneb = menuItem(
  "Wara Eneb",
  waraenebImg,
  "A mouthwatering Lebanese classic. Spiced minced meat and rice hand-wrapped in grape leaves (10pcs).",
  3.99,
);

bevMenu.americano = menuItem(
  "Americano",
  americanoImg,
  "Dark roast coffee, just how you like it.",
  1.99,
);
bevMenu.arabiccoffee = menuItem(
  "Arabic Coffee",
  arabiccoffeeImg,
  "A rich blend of premium Arabic coffee beans, with cardimon and saffron.",
  2.99,
);
bevMenu.turkishcoffee = menuItem(
  "Turkish Coffee",
  turkishcoffeeImg,
  "Our favorite blend of aromatic, thick Turkish coffee.",
  4.99,
);
bevMenu.datemilkshake = menuItem(
  "Date Milkshake",
  shakeImg,
  "Our house specialty, a delicious milkshake made with fresh dates and natural flavors. Vegan option availible upon request.",
  4.99,
  true,
);
bevMenu.lemonade = menuItem(
  "Lime and Mint Lemonade",
  lemonadeImg,
  "A refreshing Arabic staple. Freshly-squeezed lemonade made with lime and mint grown in our backyard.",
  3.99,
);
bevMenu.hibiscus = menuItem(
  "Hibiscus Tea",
  hibiscusImg,
  "A tart, herbal tea infusion of tropical hibiscus flowers. Can be served hot or cold.",
  2.99,
);
bevMenu.chai = menuItem(
  "Arabic Chai",
  chaiImg,
  "Delicious, sweet Arabic tea with milk, cardimon, and saffron.",
  2.99,
);
bevMenu.softdrinks = menuItem(
  "Soft Drinks",
  sodaImg,
  "Select from a variety of fountain drinks. Options availible upon request.",
  1.99,
);

breakfastMenu.eggs = menuItem(
  "Scrambled Eggs and Tomatoes",
  eggsImg,
  "Scrambled eggs and tomatoes topped with seasonal vegetables on tanoor bread.",
  6.99,
);
breakfastMenu.ful = menuItem(
  "Ful Mudammas",
  fulImg,
  "Chef's Recommendation. Creamy Egyptian fava beans stewed with olive oil, seasonal vegetables, lemon juice and our special house spice mix. Served with bread.",
  6.99,
);
breakfastMenu.omelette = menuItem(
  "Omelette",
  omeletteImg,
  "A hearty omelette with feta cheese, seasonal vegetables, and our house spices.",
  7.99,
);
breakfastMenu.musabaha = menuItem(
  "Musabaha",
  musabahaImg,
  "A creamy breakfast dish from the Levant. Whole garbanzo beans with tahini, vegetables, dried pita chips, spices, and olive oil",
  7.99,
);
breakfastMenu.manaesh = menuItem(
  "Manaesh",
  manaeshImg,
  "Your choice of cheese, zaatar, minced lamb, or beef melted on top of doughy Arabic flatbread (2 pcs).",
  8.99,
  true,
);

dinnerMenu.mandi = menuItem(
  "Chicken Mandi",
  chickenbiryaniImg,
  "A mixed rice dish with seasonal vegetables and fragrant spices topped with traditionally seasoned, free-range chicken.",
  14.99,
);
dinnerMenu.cutlets = menuItem(
  "Fish Cutlets",
  cutletsImg,
  "Delicous wild-caught fried fish cutlets seasoned with our house spices and served with homemade tartar sauce (6 pcs).",
  13.99,
);
dinnerMenu.kabsa = menuItem(
  "Kabsa",
  kabsaImg,
  "A delicious mixed basmati rice dish from Yemen. Blended with cardimon and other house spices and topped with grilled chicken and raisins.",
  15.99,
);
dinnerMenu.kingfish = menuItem(
  "Kingfish Steak",
  kingfishImg,
  "Grilled kingfish fillets with olive oil and spices, served with seasonal vegetables and jasmine rice (2 pcs).",
  17.95,
  true,
);
dinnerMenu.machboos = menuItem(
  "Machboos",
  lambImg,
  "Spiced basmati rice and your choice of lamb or fish, cooked in a broth of traditional vegetables with cardimon and tumeric.",
  15.99,
);
dinnerMenu.lambchops = menuItem(
  "Lamb Chops",
  lambchopsImg,
  "Grilled, tender lamb chops seared to perfection and prepared with our house spice mix. Served with grilled potatoes (3 pcs).",
  16.99,
);
dinnerMenu.musaka = menuItem(
  "Musaka",
  musakaImg,
  "Our house specialty. A layered, baked eggplant-based dish with potatoes and lamb, made in the Arabic style.",
  14.99,
);

desertMenu.baklawa = menuItem(
  "Baklawa",
  baklawaImg,
  "Layered pastries with chopped pistachio and chashew, prepared with authentic Yemeni honey (10 pcs).",
  2.99,
  true,
);
desertMenu.donuts = menuItem(
  "Donuts",
  donutsImg,
  "Soft, homemade, powdered donuts (6 pcs).",
  3.99,
);
desertMenu.kaimati = menuItem(
  "Kaimati",
  kaimatiImg,
  "Chef's Recommendaition. Hand-rolled dough fried and coated in our special house sheera syrup (8 pcs).",
  3.99,
);
desertMenu.mandazi = menuItem(
  "Mandazi",
  mandaziImg,
  "An authentic family recipie. Puffy, baked dough triangles served with three different seasonal jams (4 pcs).",
  2.99,
);

const allMenu = {
  ...bevMenu,
  ...appMenu,
  ...breakfastMenu,
  ...dinnerMenu,
  ...desertMenu,
};

export { appMenu, bevMenu, breakfastMenu, dinnerMenu, desertMenu, allMenu };
