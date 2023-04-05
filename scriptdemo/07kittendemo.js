function Kitten(name, interests, goodWithDogs, goodWithKids, goodWithCats, imageFileName) {
  this.name = name;
  this.interests = interests;
  this.isGoodWithDogs = goodWithDogs;
  this.isGoodWithKids = goodWithKids;
  this.isGoodWithCats = goodWithCats;
  this.imageUrl = "images/" + imageFileName;
  this.age = this.generateAge();
}

Methods;
// methods to get added to constructors prototype
Kitten.prototype.generateAge = function () {
  return randomInRange(3, 12) + " months";
};

Kitten.prototype.meow = function () {
  console.log("Meow from " + this.name);
};

Kitten.prototype.render = function () {
  // get a container for kitten profiles, e.g. place an #id in a <div>
  const containerElem = document.getElementById("kittenProfiles");
  // each kitten profile is in an article
  const articleElem = document.createElement("article");
  containerElem.appendChild(articleElem);
  // add the article heading
  const headingElem = document.createElement("h2");
  articleElem.appendChild(headingElem);
  // create text into this
  headingElem.textContent = this.name;
  // add the age/bio
  const paraElem = document.createElement("p");
  articleElem.appendChild(paraElem);
  paraElem.textContent = `${this.name} is adorable and is ${this.age} old.`;
  //  add interests in an unordered list
  const ulElem = document.createElement("ul");
  articleElem.appendChild(ulElem);
  for (let i = 0; i < this.interests.length; i++) {
    const liElem = document.createElement("li");
    ulElem.appendChild(liElem);
    liElem.textContent = this.interests[i];
  }
  //   add table of "good withs". Tables will need head row <tr> and columns <col>
  const tableElem = document.createElement("table");
  articleElem.appendChild(tableElem);
  // table header row
  const headerRow = document.createElement("tr");
  tableElem.appendChild(headerRow);

  //   header cells
  const kidsHeaderCell = document.createElement("th");
  headerRow.appendChild(kidsHeaderCell);
  kidsHeaderCell.textContent = "Kids";

  const dogsHeaderCell = document.createElement("th");
  headerRow.appendChild(dogsHeaderCell);
  dogsHeaderCell.textContent = "Dogs";

  const catsHeaderCell = document.createElement("th");
  headerRow.appendChild(catsHeaderCell);
  catsHeaderCell.textContent = "Cats";

  //   add data row
  const dataRow = document.createElement("tr");
  tableElem.appendChild(dataRow);

  const kidsDataCell = document.createElement("td");
  dataRow.appendChild(kidsDataCell);
  kidsDataCell.textContent = this.isGoodWithKids;
};

// constructs need stand alone functions as well
function randomInRAnge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// create (aka instantiate) some kittens

const frankie = new Kitten(/*array of data*/);
const serena = new Kitten();
const jumper = new Kitten();

console.log(frankie);

frankie.meow();
