// Question  N0 01
var studentNames = [];

// Question NO 02
var studentNames = [];

// Question NO 03
var StringArry = ["Ijaz khan", "Imran khan", "Pakistan", "Karachi"];

// Question NO 04
var NumberArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Question NO 05

var BolenArry = [true, false, false, true, false];

// Question NO 06
var MixedArry = ["ijaz khan", true, 1];

// Question NO 07

var educationQualifications = [
  "BCOM",
  "BSCS",
  "SSC",
  "HSC",
  "BCSE",
  "PhD",
  "MS",
  "MBBS",
  "M.Phil.",
];

// Question NO 08
var StudentsName = ["Ijaz khan", "Imran khan", "Abdullah"];
var StudentMarks = [498, 470, 385];

for (var i = 0; i < StudentsName.length; i++) {
  document.write(`Student name : ${StudentsName[i]} <br>`);
  document.write(`Score : ${StudentMarks[i]} <br>`);
  var percentage = (StudentMarks[i] / 550) * 100;
  document.write(`Percentage : ${percentage.toFixed(2)}% <br><br>`);
}

// Question NO 09

var colors = ["Red", "Green", "Blue", "Yellow"];

console.log("Initial array:");
console.log(colors);

var colorToAdd = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAdd);
console.log("Updated array after adding color to the beginning:");
console.log(colors);

// colorToAdd = prompt("Enter a color to add to the end:");
colors.push(colorToAdd);
console.log("Updated array after adding color to the end:");
console.log(colors);

// c. Add two more colors to the beginning of the array
colors.unshift("Orange", "Purple");
console.log("Updated array after adding two colors to the beginning:");
console.log(colors);

// d. Delete the first color in the array
colors.shift();
console.log("Updated array after deleting the first color:");
console.log(colors);

// e. Delete the last color in the array
colors.pop();
console.log("Updated array after deleting the last color:");
console.log(colors);

// f. Ask the user at which index he/she wants to add a color
var indexToAdd = parseInt(prompt("Enter the index at which to add a color:"));
var colorToAddAtIndex = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAddAtIndex);

console.log("Updated array after adding color at specified index:");
console.log(colors);

// g. Ask the user at which index he/she wants to delete color(s)
var indexToDelete = parseInt(
  prompt("Enter the index at which to delete color(s):")
);
var numColorsToDelete = parseInt(
  prompt("Enter the number of colors to delete:")
);
colors.splice(indexToDelete, numColorsToDelete);
console.log("Updated array after deleting color(s) at specified index:");
console.log(colors);


// Question NO 10
var SortedArry = [550, 440, 460, 320, 220, 333];
var FinalSort = SortedArry.sort();
console.log(FinalSort);

// // Question NO 11

var CityArry = [
    "Peshawar",
    "Quetta",
    "Islamabad",
    "Lahore",
    "Islamkot",
    "Multan",
    "Hyderabad",
    "Rawalpindi",
    "Ahmed Nager",
    "Sialkot", 
];
var newCity = CityArry.slice(5, 7);
console.log(newCity);


// // Question NO 12
var arr = ["This", "is", "my", "car"];
var result = arr.join(" ");
console.log(result);


// // Question NO 13
var fifoArray = [];

fifoArray.push("Mango");
fifoArray.push("Apple");
fifoArray.push("Orange");
fifoArray.push("Banana");

console.log(fifoArray.shift());
console.log(fifoArray.shift());
console.log(fifoArray.shift());
console.log(fifoArray.shift());



// // Question NO 14
var fifoArray = [];

fifoArray.push("Apple");
fifoArray.push("Banana");
fifoArray.push("Cherry");
fifoArray.push("Date");

console.log(fifoArray.pop());
console.log(fifoArray.pop());
console.log(fifoArray.pop());
console.log(fifoArray.pop());
console.log(fifoArray);


// Question No 15

var phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write(
    "<option value='" +
      phoneManufacturers[i] +"'>" +phoneManufacturers[i] +
      "</option>"
  );
}

document.write("</select>");
