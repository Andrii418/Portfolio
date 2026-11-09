(() => {
  const dialog = document.querySelector('#lightbox');
  const image = document.querySelector('#lbImg');
  const caption = document.querySelector('#lbCaption');
  const gallery = Array.from(document.querySelectorAll('[data-gallery-index]'))
    .sort((first, second) => Number(first.dataset.galleryIndex) - Number(second.dataset.galleryIndex));

  let active = 0;
  let trigger;
  let pressedOutside = false;

  function showFrame(index) {
    active = (index + gallery.length) % gallery.length;
    const frame = gallery[active];
    const preview = frame.querySelector('img');
    const visibleCaption = frame.querySelector('.gallery-overlay span');
    const lang = window.I18N?.getLang() || 'pl';
    const translation = window.I18N?.t(frame.dataset.captionKey, lang);
    const label = translation || frame.dataset.caption || visibleCaption.textContent;

    image.src = preview.currentSrc || preview.src;
    image.alt = label || preview.alt;
    caption.textContent = label;
  }

  function applyLabels() {
    const lang = window.I18N?.getLang() || 'pl';
    [dialog, ...dialog.querySelectorAll('[data-gallery-label]')].forEach(element => {
      const label = window.I18N?.t(element.dataset.galleryLabel, lang);
      if (label) element.setAttribute('aria-label', label);
    });
    if (dialog.open) showFrame(active);
  }

  gallery.forEach((frame, index) => {
    frame.addEventListener('click', () => {
      trigger = frame;
      showFrame(index);
      dialog.showModal();
      document.documentElement.classList.add('case-modal-open');
    });
  });

  dialog.querySelector('.lb-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.lb-prev').addEventListener('click', () => showFrame(active - 1));
  dialog.querySelector('.lb-next').addEventListener('click', () => showFrame(active + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showFrame(active + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });

  function outsideDialog(event) {
    const rect = dialog.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right ||
      event.clientY < rect.top || event.clientY > rect.bottom;
  }

  dialog.addEventListener('pointerdown', event => { pressedOutside = outsideDialog(event); });
  dialog.addEventListener('click', event => {
    if (pressedOutside && outsideDialog(event)) dialog.close();
    pressedOutside = false;
  });
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('case-modal-open');
    pressedOutside = false;
    trigger?.focus({ preventScroll: true });
  });

  applyLabels();
  document.addEventListener('i18n:changed', applyLabels);
})();
