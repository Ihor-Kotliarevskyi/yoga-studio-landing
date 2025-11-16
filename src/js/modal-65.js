(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-65]'),
    closeModalBtn: document.querySelector('[data-modal-close-65]'),
    closeModalBdrp: document.querySelector('[data-modal-backdrope-close-65]'),
    modal: document.querySelector('[data-modal-65]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBdrp.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
