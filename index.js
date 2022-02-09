let title = "Nqkakuv tekst";
console.log(title);
title = "Nqkakuv nov tekst";


var name = "Asancho";

// console.log(title);
console.log(title);

const ip_address_server = "192.168.0.1/255.255.255.0";
console.log(ip_address_server);

let array = [
    title,
    ip_address_server,
    false
];
let masiv = {
    title: "novo",
    ip_address_server: "11"
};
console.log(array);
console.log(array.length);
console.log(masiv);
console.log(masiv.title);

for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}

for (let element of array){
    console.log(element)
}

let i = 0;
while (i < array.length){
    console.log(array[i])
    i++;
};

function func(){
    console.log("Tekst na funkciq");
}
func();

const secFunc = () => {
    console.log("Vtora funckiq");
}
secFunc();
