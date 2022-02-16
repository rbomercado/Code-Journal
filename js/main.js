/* global data */
/* exported data */
var imgUrl = document.querySelector('.imgUrl');
var img = document.querySelector('img');
imgUrl.addEventListener('input', updateUrl);
function updateUrl(event) {
  img.setAttribute('src', 'imgUrl.value');
}

var form = document.querySelector('.entry-form');

form.addEventlistner('submit', submit);

function submit(event) {
  event.prevenetDefault();
  var title = form.elements.title.value;
  var url = form.elements.url.value;
  var notes = form.elements.notes.value;
  var data = {
    title: title,
    url: url,
    notes: notes
  };
  data.id = data.nextEntryId;
  data.nextEntryId++;
}
