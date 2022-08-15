const buyBtns = document.querySelectorAll('.js-btn-buy');
const modal = document.querySelector('.js-modal');
const closeBtn = document.querySelector('.js-modal-close');
const modalTable = document.querySelector('.js-modal-table');



function hideModal() {
    modal.classList.remove('open');
}

function openModal() {
    modal.classList.add('open');
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', openModal);
}

closeBtn.addEventListener('click', hideModal);
modal.addEventListener('click', hideModal);

modalTable.addEventListener('click', (event) => {
    event.stopPropagation();
})