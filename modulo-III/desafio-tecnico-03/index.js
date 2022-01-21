import { Airline } from "./Airline";


const airline1 = new Airline("gol", true);
const airline2 = new Airline("azul", false, ["SAO-BHZ"]);

// Recuperando nome da airline:
console.log(airline1.getName());

//Adicionando item para a white lista da airline 2
airline2.addItemToWhiteList("BHZ-FOR");
console.log(airline2.getWhiteList());