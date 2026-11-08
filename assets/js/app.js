(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const modal = document.querySelector('#project-modal');
  const openButton = document.querySelector('#open-project');
  const closeButtons = document.querySelectorAll('[data-close]');
  const form = document.querySelector('#project-form');
  const success = document.querySelector('#form-success');
  const nameInput = document.querySelector('#project-name');

  function openModal() {
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => nameInput?.focus(), 80);
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  openButton?.addEventListener('click', openModal);
  closeButtons.forEach(button => button.addEventListener('click', closeModal));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });

  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const projectName = String(data.get('name') || '').trim();
    const projectType = String(data.get('type') || '');
    success.hidden = false;
    success.textContent = `Projekt „${projectName}” je pripremljen kao demonstracija (${projectType}). Podaci nisu poslani niti trajno spremljeni.`;
    form.querySelector('button[type="submit"]').textContent = 'Priprema završena ✓';
  });

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();