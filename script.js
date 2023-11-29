

var myDiv = document.querySelector(".left");
var initialPaddingLeft = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-left'));

myDiv.addEventListener("mouseover", function() {
document.body.style.backgroundPosition = "+" + initialPaddingLeft + "px 0";
});

myDiv.addEventListener("mouseout", function() {
document.body.style.backgroundPosition = "0 0";
});


  var myDiv = document.querySelector(".right");
var initialPaddingLeft = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-left'));

myDiv.addEventListener("mouseover", function() {
document.body.style.backgroundPosition = "-" + initialPaddingLeft + "px 0";
});

myDiv.addEventListener("mouseout", function() {
document.body.style.backgroundPosition = "0 0";
});






document.getElementById('buyTicketsLink').addEventListener('click', function() {
    var formElement = document.getElementById('Form');
    formElement.style.display = 'block';
  });

  document.getElementById('Closed').addEventListener('click', function() {
    var formElement = document.getElementById('Form');
    formElement.style.display = 'none';
  });

  


var start = window.innerWidth * 0.05; // Используйте относительное значение для начальной позиции
document.body.style.backgroundPositionX = start + "px"; 

setTimeout(function() {
  document.body.style.transition = "background-position-x 2s";
  document.body.style.backgroundPositionX = "0"; 
}, 0);




