/* global data */
/* exported data */
var photoUrl = document.querySelector('.photo-Url');
var img = document.querySelector('.img');
photoUrl.addEventListener('input', updateUrl);
function updateUrl(event) {
  img.setAttribute('src', photoUrl.value);
}

var form = document.querySelector('.form');
var dataEntries = data.entries;
form.addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();
  var title = form.elements.title.value;
  var url = form.elements.url.value;
  var notes = form.elements.notes.value;
  var formObject = {
    title: title,
    url: url,
    notes: notes
  };
  dataEntries.unshift(formObject);
  data.nextEntryId++;
  img.setAttribute('src', 'images/placeholder-image-square.jpg');
  form.reset();
}

function renderEntries(object) {
  var li = document.createElement('li');

  var rowOne = document.createElement('div');
  rowOne.className = 'row height';
  li.appendChild(rowOne);

  var entryImg = document.createElement('img');
  entryImg.setAttribute('src', object.url);
  entryImg.className = 'column-half img-marg';
  rowOne.appendChild(entryImg);

  var halfColumnOne = document.createElement('div');
  halfColumnOne.className = 'column-half';
  rowOne.appendChild(halfColumnOne);

  var headingTwo = document.createElement('h2');
  var title = document.createTextNode(object.title);
  headingTwo.appendChild(title);
  halfColumnOne.appendChild(headingTwo);

  var paraOne = document.createElement('p');
  var notes = document.createTextNode(object.notes);
  paraOne.appendChild(notes);
  paraOne.className = 'entry-font';
  halfColumnOne.appendChild(paraOne);

  return li;
}

var uL = document.querySelector('ul');
function viewEntries(event) {
  for (var i = 0; i < dataEntries.length; i++) {
    uL.appendChild(renderEntries(dataEntries[i]));
  }
}

document.addEventListener('DOMContentLoaded', viewEntries);

// var newButton = document.querySelector('.new-button');
// var entriesButton = document.querySelector('.entry-button');

// newButton.addEventListener('click',)

// var entryFormView = document.querySelector("div[data-view='entry-form']");
// var entriesView = document.querySelector("div[data-view='entries']");
// function entries(event) {
// if (data.view === 'entry-form') {
// entriesView.className = 'view-hidden';

// } else (data.view = 'entries');
// data.view = 'entries';
// entryFormView.className = 'view hidden';
// }
