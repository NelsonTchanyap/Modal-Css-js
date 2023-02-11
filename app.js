let triggers = document.querySelectorAll(".modal-trigger")
let modalContainer = document.querySelector(".modal-container")

triggers.forEach((element)=>{
    element.addEventListener("click",()=>{
        modalContainer.classList.toggle("active")
    })
})