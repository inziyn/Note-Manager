var hide = document.getElementById("hide");
var label = document.getElementById('hidde')
var inputBox = document.getElementById('add-input')
var list = document.getElementById('list')
var btn = document.getElementById('add-btn');
var search = document.getElementById('search-note');

// Hide Unhide Notes

hide.onclick = function () {

    if (list.style.display != 'none') {
        label.textContent = "Unhide Note"
        list.style.display = 'none';
    }
    else {
        list.style.display = 'block';
        label.textContent = "Hide Note"

    }
}

// Add Notes

btn.addEventListener("click", function (e) {
    e.preventDefault();

    var li = document.createElement("li");
    var P1 = document.createElement('p');
    var P2 = document.createElement('p');

    var editNote = document.createElement('i');
    editNote.className = 'fa fa-solid fa-pen-to-square';

    var del = document.createElement('i');
    del.className = 'fa fa-times';

    var input = document.createElement('input');
    input.className = 'edit-note';
    input.setAttribute('type', 'text');

    P2.appendChild(editNote);
    P2.appendChild(del);

    li.appendChild(P1);
    li.appendChild(P2);
    li.appendChild(input);

    P1.textContent = inputBox.value;
    list.appendChild(li);
    inputBox.value = '';

});

// Remove Notes

list.addEventListener("click", function (e) {
    if (e.target.className === "fa fa-times") {
        e.target.parentNode.parentNode.remove();
    }
})


// Edit Notes

list.addEventListener("click", function (n) {
    // e.preventDefault(); 

    if (n.target.className === 'fa fa-solid fa-pen-to-square') {

        var edit = n.target.parentNode;
        edit.style.display = 'none';
        console.log(edit)

        var note = edit.previousElementSibling;
        console.log(note);
        var input = edit.nextElementSibling;
        console.log(input);

        input.style.display = 'block';
        input.value = note.textContent;

        input.addEventListener('keypress', function (i) {
            if (i.keyCode === 13) {
                if (input.value !== '') {
                    note.textContent = input.value;
                    edit.style.display = 'block';
                    input.style.display = 'none';
                }
            }

        });
    }
});

// Search Notes 

search.addEventListener("input", function (e) {
    var search = e.target.value.toUpperCase();
    var notes = list.children;
    console.log(notes);

    Array.from(notes).forEach(function (note) {
        for (var i = 0; i < notes.length; i++) {
            
            var note = notes[i].children[0].textContent.toUpperCase();
            console.log(note)
            
            if (note.includes(search)) {
                notes[i].style.display = "block";
            }
            else {
                notes[i].style.display = "none";
            }
        }
    });
});


