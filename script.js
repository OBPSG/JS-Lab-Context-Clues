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
    "Ceiling Fan",
    "Candle Warmer",
    "Toilet",
    "Lamp Cord",
    "Shredder",
    "Exercise Bicylce",
    "Piano",
    "Range",
    "Post Hole Digger",
    "Blender",
    "Carving Knife",
    "Hair Curler",
    "Stapler",
    "Treadmill",
    "Kettlebell Weights",
    "Hair Dryer",
    "Insinkerator",
    "Staple Remover",
    "Digger Tamping Bar"
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