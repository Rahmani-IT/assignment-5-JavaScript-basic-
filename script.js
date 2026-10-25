"use strict";




const userProfile = {
    name: "Moheab",
    birthYear: 2004,
    isDeveloper: false,
    hobbies: ["Gaming", "Music", "Football"]
};


function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

function displayProfile() {
    document.getElementById("name").textContent = userProfile.name;

    document.getElementById("birthYear").textContent = userProfile.birthYear;

    document.getElementById("age").textContent = calculateAge(userProfile.birthYear);

    document.getElementById("developer").textContent = userProfile.isDeveloper;

    document.getElementById("hobbies").textContent = userProfile.hobbies.join(", ");

    document.getElementById("hobbyCount").textContent = userProfile.hobbies.length;
}


displayProfile();


console.log("User Profile:", userProfile);
console.log("Current Age:", calculateAge(userProfile.birthYear));
console.log("Total Hobbies:", userProfile.hobbies.length);


const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", function (event) {
    
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const birthYearInput = document.getElementById("birthYearInput");
    const message = document.getElementById("message");

    const username = usernameInput.value.trim();
    const birthYear = Number(birthYearInput.value);
    const currentYear = new Date().getFullYear();

   
    if (username === "") {
        message.textContent = "Please enter your username.";
        message.style.color = "#dc2626";
        return;
    }

    
    if (
        birthYearInput.value.trim() === "" ||
        !Number.isInteger(birthYear) ||
        birthYear < 1901 ||
        birthYear > currentYear
    ) {
        message.textContent = "Please enter a valid birth year.";
        message.style.color = "#dc2626";
        return;
    }

    
    userProfile.name = username;
    userProfile.birthYear = birthYear;

    
    displayProfile();


    message.textContent = "Profile updated successfully!";
    message.style.color = "#15803d";

   
    console.log("Updated Profile:", userProfile);
});




const itemList = document.getElementById("itemList");
const newItemInput = document.getElementById("newItemInput");
const addItemButton = document.getElementById("addItemButton");
const removeItemButton = document.getElementById("removeItemButton");


function createListItem(text) {
    const newItem = document.createElement("li");
    newItem.textContent = text;
    return newItem;
}


function renderItemList() {
    itemList.textContent = ""; 

    userProfile.hobbies.forEach(function (hobby) {
        itemList.appendChild(createListItem(hobby));
    });
}


function addItem() {
    const itemText = newItemInput.value.trim();

    if (itemText === "") {
        alert("Please enter a task or hobby first.");
        newItemInput.focus();
        return;
    }

    userProfile.hobbies.push(itemText);
    itemList.appendChild(createListItem(itemText));

    displayProfile();

    newItemInput.value = "";
    newItemInput.focus();

    console.log("Item added:", itemText);
    console.log("Total Hobbies:", userProfile.hobbies.length);
}

function removeItem() {
    if (userProfile.hobbies.length === 0) {
        alert("There are no items to remove.");
        return;
    }

    const removedItem = userProfile.hobbies.pop();
    itemList.removeChild(itemList.lastElementChild);

    displayProfile();

    console.log("Item removed:", removedItem);
    console.log("Total Hobbies:", userProfile.hobbies.length);
}

addItemButton.addEventListener("click", addItem);
removeItemButton.addEventListener("click", removeItem);

newItemInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});

renderItemList();