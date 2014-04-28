/*
var editable = document.getElementById('editable');

addEvent(editable, 'blur', function () {
  // lame that we're hooking the blur event
  localStorage.setItem('contenteditable', this.innerHTML);
  document.designMode = 'off';
});

addEvent(editable, 'focus', function () {
  document.designMode = 'on';
});

addEvent(document.getElementById('clear'), 'click', function () {
  localStorage.clear();
  window.location = window.location; // refresh
});

if (localStorage.getItem('contenteditable')) {
  editable.innerHTML = localStorage.getItem('contenteditable');
}
*/

$(document).ready(function() {
    var text_max = 499;
    $('#charcount').html(text_max + '');

    $('#writenote').keyup(function() {
        var text_length = $('#writenote').val().length;
        var text_remaining = text_max - text_length;

        $('#charcount').html(text_remaining + '');
    });
});