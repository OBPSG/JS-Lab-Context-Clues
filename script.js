var friends = ["John", "Jane", "Adam", "Alexa", "Mark"];

var locations = [
  "Kitchen",
  "Living Room",
  "Dining Room",
  "Bathroom",
  "Bedroom",
  "Office",
  "Exercise Room",
  "Basement Storage Room",
  "Pool",
  "Shed",
];

var weapons = [
    "Microwave",
    "Range",
    "Blender",
    "Piano",
    "Shredder",
    "Toilet",
    "Stapler",
    "Candle Warmer",
    "Treadmill",
    "Exercise Bicylce",
    "Kettlebell Weights",
    "Post Hole Digger",
    "Digger Tamping Bar",
    "Hair Curler",
    "Hair Dryer",
    "Insinkerator",
    "Carving Knife",
    "Staple Remover",
    "Lamp Cord",
    "Ceiling Fan"
]

console.log(weapons.length);

for(var i = 1; i <= 100; i++){
    var newh3 = document.createElement("h3");
    newh3.appendChild(document.createTextNode("Accusation " + i));
    //newh3.id = i;
    //Now let's try to solve it the "proper" way using closure!
    var alertFunc = makeAlert();
    newh3.addEventListener("click", alertFunc);
    document.body.appendChild(newh3);
}

function makeAlert()
{
    //console.log("Value of i in MakeAlert:" + i);
    var friend = friends[(i - 1) % 5];
    var place = locations[(i - 1) % 10];
    var weapon = weapons[(i- 1) % 20];
    function alertMessage(){
        alert("I accuse " + friend + ", with the " + weapon + " in the " + place + "!");
    }
    return alertMessage;
}