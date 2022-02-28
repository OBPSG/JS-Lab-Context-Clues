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
    //While you could just set the id of each h3 to the loop index and use that to determine array positions, that's considered cheating for this lab
    newh3.id = i;
    newh3.addEventListener("click", function()
    {
        var friend = friends[(this.id - 1) % 5];
        var location = locations[(this.id - 1) % 10];
        var weapon = weapons[(this.id - 1) % 20];
        alert("I accuse " + friend + ", with the " + weapon + " in the " + location + "!");
    })
    document.body.appendChild(newh3);
}