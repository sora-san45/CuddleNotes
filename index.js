const popupBox = document.getElementById("popup")
const overlay = document.getElementById("overlay")
const addBtn = document.getElementById("add-btn")
const save = document.getElementById("save")
const close = document.getElementById("close")
const notesContainer = document.getElementById("notes-container")
function openPopup() {
    popupBox.style.visibility = "visible"
    overlay.style.visibility = "visible"
}
function closePopup() {
    popupBox.style.visibility = "hidden"
}

addBtn.addEventListener("click", function () {
    openPopup()
})

save.addEventListener("click", function () {
    const inputVal = document.getElementById("inputField").value
    notesContainer.innerHTML += `<div class="note">
    <div class="note-banner">
        <img src="images/bg-cute.png">
    </div>
    <div class="text">
        ${inputVal}
    </div>
    <div class="ops">
        <i class="fa fa-trash" style="color: #c09268; font-size: 1.1rem"></i>
    </div>
</div>`
    closePopup()
})

close.addEventListener("click", function () {
    closePopup()
})