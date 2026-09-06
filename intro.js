//explore api

const person={
    name:"selim",
    fruit:"apple",
    dish: "halim",
    friend:["siam","ratul","shafayet"],
    isRich: false,
    money:34000,

};
console.log(person);
//json-js object with notation
//to convert this object into json
//jSON.stingify
const personJson=JSON.stringify(person);
console.log(personJson,typeof personJson

);

//so again if i want to change the json into object
//jSON.parse();

const personparse=JSON.parse(personJson);
console.log(personparse,typeof personparse);
