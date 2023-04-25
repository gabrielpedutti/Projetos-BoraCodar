const cards = document.querySelectorAll(".card")
const dropzones = document.querySelectorAll(".cards")
const title = document.querySelector("h1")

// Cards

cards.forEach((card) => {
    card.addEventListener("dragstart", dragstart)
    card.addEventListener("drag", drag)
    card.addEventListener("dragend", dragend)
})

function dragstart() {
    dropzones.forEach((dropzone) => dropzone.classList.add("highlight"))
    // this = card
    this.classList.add("is-dragging")
}

function drag() {}

function dragend() {
    dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"))
    this.classList.remove("is-dragging")
}

// Dropzone

dropzones.forEach((dropzone) => {
    dropzone.addEventListener("dragenter", dragenter)
    dropzone.addEventListener("dragover", dragover)
    dropzone.addEventListener("dragleave", dragleave)
    dropzone.addEventListener("drop", drop)
})

function dragenter() {}

function dragover() {
    //this = dropzone
    this.classList.add("hover")

    const cardBeingDragged = document.querySelector(".is-dragging")
    this.appendChild(cardBeingDragged)
}

function dragleave() {
    this.classList.remove("hover")
}

function drop() {
    this.classList.remove("hover")
}

function edit() {
    const titleValue = title.innerText
    title.innerHTML = `
    <div class="input-wrapper">
        <input id="editTitle" value="${titleValue}">
            <button onclick="confirm()">
                <ion-icon name="checkmark-outline"></ion-icon>
            </button>
        </input>
    </div>`
}

function confirm() {
    const inputValue = document.querySelector('#editTitle').value
    title.innerHTML = `<h1>${inputValue} <button onclick="edit()"><img src="assets/pencil.svg" alt=""></button></h1>`
}