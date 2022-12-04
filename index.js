const openNav = document.getElementById('open-nav')
const closeNav = document.getElementById('close-nav')
const navModal = document.getElementById('nav-modal')
const contactBtn = document.getElementById('contacts-img')
const closeModalBtn = document.getElementById('close-modal')
const modalEl = document.getElementById('modal')
const darkModeBtn = document.getElementById('light-mode-btn')



openNav.addEventListener('click', () => {
    navModal.classList.remove('hidden')
})

closeNav.addEventListener('click', () => {
    navModal.classList.add('hidden')
    
})

contactBtn.addEventListener('click', () => {
    modalEl.classList.remove('hidden')
})

closeModalBtn.addEventListener('click', () => {
    modalEl.classList.add("hidden")
})


window.addEventListener('click', (e) => {
    if(e.target == modalEl) {
        modalEl.classList.add('hidden')
    }
})
