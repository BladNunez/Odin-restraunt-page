//create div to hold three button tabs
const contentDiv = document.getElementById('content');

const h1 = document.createElement('h1');
const d = document.createElement('div');

h1.innerHTML = "It works!";
d.appendChild(h1);

contentDiv.appendChild(d);
