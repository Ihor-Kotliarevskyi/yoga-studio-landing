(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-80]'),
    closeModalBtn: document.querySelector('[data-modal-close-80]'),
    closeModalBdrp: document.querySelector('[data-modal-backdrope-close-80]'),
    modal: document.querySelector('[data-modal-80]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBdrp.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
