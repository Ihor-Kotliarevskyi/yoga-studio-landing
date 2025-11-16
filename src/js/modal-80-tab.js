(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-80-tab]'),
    closeModalBtn: document.querySelector('[data-modal-close-80-tab]'),
    closeModalBdrp: document.querySelector(
      '[data-modal-backdrope-close-80-tab]'
    ),
    modal: document.querySelector('[data-modal-80]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
