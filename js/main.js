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
