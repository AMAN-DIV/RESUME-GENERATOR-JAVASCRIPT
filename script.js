function addNewWField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("wefield");

  newNode.setAttribute("placeholder", "Enter Here");

  newNode.setAttribute("row", 3);
  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqfield");

  newNode.setAttribute("placeholder", "Enter Here");

  newNode.setAttribute("row", 3);
  let weOb = document.getElementById("aq");
  let weAddButtonOb = document.getElementById("aqAddButton");

  aq.insertBefore(newNode, aqAddButton);
}

//for generating Resume

function generateCV(){
  // console.log('lets check');
  

  let namefield = document.getElementById('name-field').value;

  let nameT1 = document.getElementById('nameT1');
  nameT1.innerHTML = namefield;
 
//for T2
  let nameT2 = document.getElementById('nameT2');
  nameT2.innerHTML = namefield;

  
// document.getElementById('phone-field') = contactT.innerHTML;
document.getElementById('contactT').innerHTML = document.getElementById('phon').value;

//address
document.getElementById('addressT').innerHTML = document.getElementById('address-field').value;


// git-field

//github


document.getElementById('gtT').innerHTML = document.getElementById('git-field').value;
//linkden
document.getElementById('liT').innerHTML = document.getElementById('linkd-field').value;
//instagram
document.getElementById('inT').innerHTML = document.getElementById('inst-field').value;
//objective field
document.getElementById('ObjT').innerHTML = document.getElementById('ObjectiveField').value;
// form-control wefield

// document.getElementsByClassName('contactT').innerHTML = document.getElementsByClassName('form-control wefield').value;
// //form-control eqfield

// document.getElementById('contactT').innerHTML = document.getElementById('form-control eqfield').value;

let wes = document.getElementsByClassName('wefield');
// wefield
let str3 = '';

for(let e of wes) {
  str3 += `<li> ${e.value} </li>`;

}
document.getElementById('aqT').innerHTML = str3;
// weT
// aq

let eq =document.getElementsByClassName('eqfield');

let str1 = '';

for(let e of eq) {
  str1 += `<li> ${e.value} </li>`;

}
document.getElementById('aqT').innerHTML = str1;


document.getElementById('rcv-fom').style.display='none';

document.getElementById('cv-template').style.display='block';
// document.getElementById('container').style. background-color : 'white';


}

//print Resume

function printCV() {
  window.print();
}
