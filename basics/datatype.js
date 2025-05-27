let age = 88;
console.log(typeof age); // "number"

let st_age = String(age); // Convert number to string
console.log(typeof st_age); // "string"

let state = null;
let num_state = Number(state); // null converts to 0

console.log(typeof state); // "object"
console.log(num_state); // 0

let get = undefined;
let num_get = Number(get); // undefined converts to NaN

console.log(typeof get); // "undefined"
console.log(num_get); // NaN

let number = 0;
let bool_number = Boolean(number); // 0 is false

console.log(typeof bool_number); // "boolean"
console.log(bool_number); // false

let num = "";
let bool_num = Boolean(num); // "" is false

console.log(typeof bool_num); // "boolean"
console.log(bool_num); // false

let naam = "dimpal";
let bool_naam = Boolean(naam); // "dimpal" is a non-empty string, so it's true

console.log(typeof bool_naam); // "boolean"
console.log(bool_naam); // true
