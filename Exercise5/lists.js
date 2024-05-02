const wakatipuPlaces = ["Queenstown", "Frankton", "Arrowtown", "Jack's Point", "Arthur's Point"];

wakatipuPlaces[1] = "Kingston";
wakatipuPlaces[4] = "Lower Shotover";

wakatipuPlaces.unshift("Lake Hayes");
wakatipuPlaces.pop();

console.log(wakatipuPlaces);