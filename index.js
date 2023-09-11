const popupBox = document.getElementById("popup")
const overlay = document.getElementById("overlay")
const addBtn = document.getElementById("add-btn")
const save = document.getElementById("save")
const close = document.getElementById("close")
const deleteBtn = document.getElementById("delete")
const notesContainer = document.getElementById("notes-container")
function openPopup() {
    popupBox.style.visibility = "visible"
    overlay.style.visibility = "visible"
}
function closePopup() {
    popupBox.style.visibility = "hidden"
    overlay.style.visibility = "hidden"
}

function clearInputField(){
    document.getElementById("inputField").value=""
}

addBtn.addEventListener("click", function () {
    openPopup()
})

save.addEventListener("click", function () {
    const inputVal = document.getElementById("inputField").value
    clearInputField()
    closePopup()
    if (inputVal != "") {
        notesContainer.innerHTML += `<div class="note">
    <div class="note-banner">
        <img src="images/bg-cute.png">
    </div>
    <div class="text">
        <p>${inputVal}</p>
    </div>
    <i class="fa fa-trash" id="delete" style="color: #c09268; font-size: 1.1rem"></i>
</div>`}

})

close.addEventListener("click", function () {
    closePopup()
})

notesContainer.addEventListener("click",function (){
    notesContainer.remove("active");
})