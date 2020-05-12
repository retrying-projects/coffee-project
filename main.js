"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    // html += coffee.id;
    html += '<strong>' + coffee.name + '</strong>';
    html += coffee.roast;
    html += '</div>';

    return html;
}
// TODO When the page loads, the coffees should be sorted by their ids in ascending order
function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) { // let i = coffees.length - 1; i >= 0; i--
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// Or coffees.reverse(); will do the ascending order also

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let selectedCoffee = coffeesName.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || coffee.name.toLowerCase() === selectedCoffee.toLowerCase()) {
            filteredCoffees.push(coffee);
        } // else if (coffee.roast === "all"){
            // filteredCoffees.push(coffees);
        // }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
// let coffeeName = document.querySelector("#coffees-name");
let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit-button');
let roastSelection = document.querySelector('#roast-selection');
let submitButtonToAdd = document.querySelector('#submit-button-add');
let coffeesName = document.querySelector('#coffees-name');

tbody.innerHTML = renderCoffees(coffees);
// tbody.innerHTML = renderCoffee(coffeeName);
submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
// 'change' input loses focus after it has been modified

submitButtonToAdd.addEventListener('click', updateCoffees);

