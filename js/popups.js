  const modalController = ({modal, btnOpen, btnClose}) => { 
    const buttonElem = document.querySelector(btnOpen);
    const modalElem = document.querySelector(modal);

    modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 500ms ease-in-out;
    `;

    const closeModal = event => {
      const target = event.target;

      if (target === modalElem || target.closest(btnClose)) {
        
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = 'hidden';
      }, 500)
      }
    }



  const openModal = () => {
    const popups = Array.from(document.querySelectorAll('.popup'));
    if (popups.length) {
      popups.forEach(pop => {
        pop.style.opacity = 0;     
        pop.style.visibility = 'hidden';
      })
    }
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
  };

  buttonElem.addEventListener('click', openModal);
  modalElem.addEventListener('click', closeModal);
}

modalController({
  modal: '.popup1',
  btnOpen: '.header__contacts-btn',
  btnClose: '.popup__close'
});
modalController({
  modal: '.popup2',
  btnOpen: '.popup__contact__btn2',
  btnClose: '.close-popup'
});