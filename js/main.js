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
  dataEntries.push(formObject);
  data.nextEntryId++;
  img.setAttribute('src', 'images/placeholder-image-square.jpg');
  form.reset();
}

function renderEntries(formObject) {
  var uL = document.createElement('ul');

  var rowOne = document.createElement('div');
  rowOne.className = 'row height';
  uL.appendChild(rowOne);

  var entryImg = document.createElement('img');
  entryImg.setAttribute('src', formObject.url);
  entryImg.className = 'column-half img-marg';
  rowOne.appendChild(entryImg);

  var halfColumnOne = document.createElement('div');
  halfColumnOne.className = 'column-half';
  rowOne.appendChild(halfColumnOne);

  var headingTwo = document.createElement('h2');
  var title = document.createTextNode(formObject.title);
  headingTwo.appendChild(title);
  halfColumnOne.appendChild(headingTwo);

  var paraOne = document.createElement('p');
  var notes = document.createTextNode(formObject.notes);
  paraOne.appendChild(notes);
  paraOne.className = 'entry-font';
  halfColumnOne.appendChild(paraOne);

  return uL;
}

var rowSelector = document.querySelector('.entries-here');

for (let i = 0; i < dataEntries.length; i++) {
  var loopEntries = renderEntries(data[i]);
  rowSelector.appendChild(loopEntries);
}
