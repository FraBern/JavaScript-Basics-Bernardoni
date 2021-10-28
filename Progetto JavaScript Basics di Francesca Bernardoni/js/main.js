/*First Item Counter*/
let add = document.getElementById('increment');
let remove = document.getElementById('decrement');
let reset = document.getElementById('reset');
let int = document.getElementById('number');
let integer = 0;

add.addEventListener('click', function(){
  integer +=1;
  int.innerHTML = integer;
  if (integer > 0 && integer <= 5) {
    document.getElementById('number').style.color = "#ff9900";
  }
  if (integer > 5) {
    document.getElementById('number').style.color = "black";
  }
});

remove.addEventListener('click', function(){
  integer -=1;
  int.innerHTML = integer;
  if (integer <= 0) {
    document.getElementById('number').style.color = "red";
  }
  if (integer <= 5 && integer > 0) {
    document.getElementById('number').style.color = "#ff9900";
  }
});

reset.addEventListener('click', function(){
  integer = 0;
  int.innerHTML = integer;
});

function myFunction() {
  var result = confirm("Sei sicuro di voler resettare?");
    if (true) {
      return true;
    } else {
      return false;
    }
}

/*Second Item Counter*/
let addB = document.getElementById('incrementB');
let removeB = document.getElementById('decrementB');
let resetB = document.getElementById('resetB');
let intB = document.getElementById('numberB');
let integerB = 0;

addB.addEventListener('click', function(){
  integerB +=1;
  intB.innerHTML = integerB;
  if (integerB > 0 && integerB <= 5) {
    document.getElementById('numberB').style.color = "#ff9900";
  }
  if (integerB > 5) {
    document.getElementById('numberB').style.color = "black";
  }
})

removeB.addEventListener('click', function(){
  integerB -=1;
  intB.innerHTML = integerB;
  if (integerB <= 0) {
    document.getElementById('numberB').style.color = "red";
  }
  if (integerB <= 5 && integerB > 0) {
    document.getElementById('numberB').style.color = "#ff9900";
  }
});

resetB.addEventListener('click', function(){
  integerB = 0;
  intB.innerHTML = integerB;
    document.getElementById('numberB').style.color = "red";
});

function myFunction() {
  var result = confirm('Sei sicuro di voler resettare?');
    if (result == false) {
    event.stopImmediatePropagation();
    }
};

function myFunctionB() {
  var result = confirm('Sei sicuro di voler resettare?');
    if (result == false) {
    event.stopImmediatePropagation();
    }
};
