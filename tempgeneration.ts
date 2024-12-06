// Key in localStorage where the array is stored
const storageKey = "myArray";
let array = JSON.parse(localStorage.getItem(storageKey)) || [];
const newData = { id: 1, name: "Sample Item" }; // Example data
array.push(newData);
localStorage.setItem(storageKey, JSON.stringify(array));
