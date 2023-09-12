const popupBox = document.getElementById("popup")
const overlay = document.getElementById("overlay")
const addBtn = document.getElementById("add-btn")
const save = document.getElementById("save")
const close = document.getElementById("close")
const notesContainer = document.getElementById("notes-container")


let notesArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
notesArray.forEach(addNote);



function openPopup() {
    popupBox.style.visibility = "visible"
    overlay.style.visibility = "visible"
}
function closePopup() {
    popupBox.style.visibility = "hidden"
    overlay.style.visibility = "hidden"
}

function clearInputField() {
    document.getElementById("inputField").value = ""
}

addBtn.addEventListener("click", function () {
    openPopup()
})

function addNote(val) {
    notesContainer.innerHTML += `<div class="note">
    <div class="note-banner">
        <img src="images/bg-cute.png">
    </div>
    <div class="text">
        <p class=textVal>${val}</p>
    </div>
    <i class="fa fa-trash" id="delete" style="color: #c09268; font-size: 1.1rem"></i>
</div>`
}

save.addEventListener("click", function () {
    const inputVal = document.getElementById("inputField").value
    clearInputField()
    closePopup()
    if (inputVal != "") {
        notesArray.push(inputVal);
        localStorage.setItem('items', JSON.stringify(notesArray));
        addNote(inputVal)
    }

})

close.addEventListener("click", function () {
    closePopup()
})

notesContainer.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("fa-trash")) {
        const note = e.target.closest(".note");
        if (note) {
            const textElement = note.querySelector(".textVal").textContent;
            const index = notesArray.indexOf(textElement);
            if (index !== -1) {
                notesArray.splice(index, 1);
                localStorage.setItem('items', JSON.stringify(notesArray));
            }
            note.remove();
        }
    }
})