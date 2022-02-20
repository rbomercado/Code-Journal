/* global data */
/* exported data */
var photoUrl = document.querySelector('.photo-Url');
var img = document.querySelector('.img');
var ul = document.querySelector('.ul');
var form = document.getElementById('form');
var entriesPara = document.querySelector('.no-entries');
var entryFormView = document.querySelector('.entries-link');
var entryFormPageLink = document.querySelector('.entry-form');
var entriesPageLink = document.querySelector('.entries-form');
var entriesView = document.querySelector('.new-button');
var dataEntries = data.entries;

photoUrl.addEventListener('input', updateUrl);
form.addEventListener('submit', submitForm);
entriesView.addEventListener('click', newEntryClick);
entryFormView.addEventListener('click', entriesClick);
document.addEventListener('DOMContentLoaded', viewEntries);

function updateUrl(event) {
  img.setAttribute('src', photoUrl.value);
}

function submitForm(event) {
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
  ul.prepend(renderEntries(formObject));
  entriesClick();
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

function viewEntries(event) {
  for (let i = 0; i < data.entries.length; i++) {
    ul.appendChild(renderEntries(data.entries[i]));
  }
  if (data.view === 'entry-form') {
    newEntryClick();
  } else if (data.view === 'entries') {
    entriesClick();
  }
}

function entriesClick(event) {
  entryFormPageLink.className = 'entry-form hidden';
  entriesPageLink.className = 'entries-form active';
  data.view = 'entries';
  if (data.entries.length > 0) {
    entriesPara.className = 'no-entries hidden';
  }
}

function newEntryClick(event) {
  entryFormPageLink.className = 'entry-form active';
  entriesPageLink.className = 'entries-form hidden';
  data.view = 'entry-form';
}
