(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-10]'),
    closeModalBtn: document.querySelector('[data-modal-close-10]'),
    closeModalBdrp: document.querySelector('[data-modal-backdrope-close-10]'),
    modal: document.querySelector('[data-modal-10]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBdrp.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
