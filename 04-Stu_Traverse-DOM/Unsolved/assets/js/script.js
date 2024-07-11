// Access element using id
const articlesDiv = document.getElementById('articles');
const headerDiv = document.getElementById('header');


// Change style by accessing style object's properties
articlesDiv.children[0].style.fontSize = '50px';
headerDiv.children[0].style.color = 'white';

//Used querySelector to change styling
const h2Div = document.querySelector("h2");
h2Div.style.color = "black";