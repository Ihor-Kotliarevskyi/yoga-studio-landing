(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    closeModalLink1: document.querySelector('[data-menu-close-link-1]'),
    closeModalLink2: document.querySelector('[data-menu-close-link-2]'),
    closeModalLink3: document.querySelector('[data-menu-close-link-3]'),
    closeModalLink4: document.querySelector('[data-menu-close-link-4]'),
    closeModalLink5: document.querySelector('[data-menu-close-link-5]'),
    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalLink1.addEventListener('click', toggleModal);
  refs.closeModalLink2.addEventListener('click', toggleModal);
  refs.closeModalLink3.addEventListener('click', toggleModal);
  refs.closeModalLink4.addEventListener('click', toggleModal);
  refs.closeModalLink5.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
