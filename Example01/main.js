console.log("hello world");

// 類別，定義一個function 叫做 Pokemon
function Pokemon(nationalNo, type, species, hp, height, weight, abilities, loaclNo, japanese, attack) {
    //這個傢伙(this)的資訊有哪些
    this.nationalNo = nationalNo;
    this.type = type;
    this.species = species;
    this.hp = hp;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.localNo = loaclNo;
    this.japanese = japanese;
    this.attack = function (other) {
        other.hp -= 20;
    };
}

//pokemon變數
var Fushigidane = new Pokemon(
    1,
    ["GRASS", "POISON"],
    "Seed Pokémon",
    1200,
    0.71,
    6.9,
    "Overgrow",
    [1, 226, 231, 80],
    "Fushigidane"
);

var Hitokage = new Pokemon(
    4,
    ["FIRE"],
    "Lizard Pokémon",
    2000,
    0.61,
    8.5,
    "Blaze",
    [1, 229, 234, 83],
    "Hitokage"
);

$(function () {
    function Render() {
        $("#fushigi-name").text(Fushigidane.japanese);
        $("#fushigi-hp").text(Fushigidane.hp);

        $("#hito-name").text(Hitokage.japanese);
        $("#hito-hp").text(Hitokage.hp);
    }

    Render();
    $("#fushigi-att").click(function () {
        Fushigidane.attack(Hitokage);
        Render();
    });
    $("#hito-att").click(function () {
        Hitokage.attack(Fushigidane);
        Render();
    });

});