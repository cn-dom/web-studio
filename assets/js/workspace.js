(() => {
  const STORAGE_KEY = 'webstudio.projects.v1';
  const grid = document.querySelector('#project-grid');
  const empty = document.querySelector('#empty-state');
  const modal = document.querySelector('#workspace-modal');
  const form = document.querySelector('#workspace-form');
  const search = document.querySelector('#project-search');
  const filter = document.querySelector('#project-filter');
  const total = document.querySelector('#project-total');
  const sideCount = document.querySelector('#side-count');
  const statusLabels = { plan: 'U PLANIRANJU', progress: 'U IZRADI', done: 'ZAVRŠENO' };
  const icons = {'Web trgovina':'◇','Restoran / ugostiteljstvo':'✳','Poslovna web stranica':'▦','Portfolio / osobna stranica':'✎','Blog / portal':'▤','Drugo':'⌘'};
  let projects = loadProjects();

  function loadProjects() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(value) ? value.filter(p => p && typeof p.id === 'string' && typeof p.name === 'string') : [];
    } catch { return []; }
  }
  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(projects)); return true; }
    catch { alert('Projekt nije spremljen. Provjeri slobodan prostor u pregledniku.'); return false; }
  }
  function safe(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  }
  function dateLabel(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? 'Datum nije dostupan' : new Intl.DateTimeFormat('hr-HR',{day:'2-digit',month:'short',year:'numeric'}).format(date);
  }
  function render() {
    const term = (search?.value || '').trim().toLocaleLowerCase('hr');
    const status = filter?.value || 'all';
    const visible = projects.filter(p => (status === 'all' || p.status === status) && [p.name,p.client,p.type,p.notes].join(' ').toLocaleLowerCase('hr').includes(term));
    grid.innerHTML = visible.map(p => `<article class="project-card" data-id="${safe(p.id)}">
      <div class="project-card-top"><div class="project-type-icon">${safe(icons[p.type] || '▦')}</div><span class="project-status ${safe(p.status)}">${safe(statusLabels[p.status] || statusLabels.plan)}</span></div>
      <h3>${safe(p.name)}</h3><div class="project-client">${safe(p.client || p.type)}</div><div class="project-client">WordPress tema: ${safe(p.theme || "nije odabrana")}</div>
      ${p.notes ? `<p class="project-notes">${safe(p.notes)}</p>` : ''}
      <div class="project-card-meta"><span>＋ ${safe(p.type)}</span><span>◷ ${safe(dateLabel(p.updatedAt || p.createdAt))}</span></div>
      <div class="project-card-actions"><a class="open-editor-link" href="wordpress.html">WordPress biblioteka ↗</a><button type="button" data-action="edit" data-id="${safe(p.id)}">Uredi</button><button type="button" data-action="status" data-id="${safe(p.id)}">Promijeni status</button><button type="button" class="delete-project" data-action="delete" data-id="${safe(p.id)}">Obriši</button></div>
    </article>`).join('');
    empty.hidden = visible.length > 0;
    if (!projects.length) {
      empty.querySelector('h2').textContent = 'Ovdje počinje tvoj sljedeći projekt.';
      empty.querySelector('p').textContent = 'Dodaj prvi projekt i zabilježi osnovne informacije prije početka izrade.';
    } else if (!visible.length) {
      empty.querySelector('h2').textContent = 'Nema pronađenih projekata.';
      empty.querySelector('p').textContent = 'Pokušaj promijeniti pojam pretraživanja ili odabrani filtar.';
    }
    total.textContent = `${visible.length} ${visible.length === 1 ? 'projekt' : visible.length < 5 ? 'projekta' : 'projekata'}`;
    sideCount.textContent = String(projects.length);
  }
  function openModal(project) {
    form.reset();
    form.dataset.editId = project?.id || '';
    document.querySelector('#workspace-modal-title').innerHTML = project ? 'Uredi <span>projekt.</span>' : 'Novi <span>projekt.</span>';
    if (project) {
      form.elements.name.value = project.name || '';
      form.elements.client.value = project.client || '';
      form.elements.type.value = project.type || '';
      form.elements.theme.value = project.theme || 'Blocksy';
      form.elements.status.value = project.status || 'plan';
      form.elements.notes.value = project.notes || '';
    }
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => form.elements.name.focus(), 50);
  }
  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }
  document.querySelector('#new-project')?.addEventListener('click', () => openModal());
  document.querySelector('#empty-new')?.addEventListener('click', () => openModal());
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  search?.addEventListener('input', render);
  filter?.addEventListener('change', render);
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const now = new Date().toISOString();
    const editId = form.dataset.editId;
    const existing = projects.find(p => p.id === editId);
    const project = {id: existing?.id || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())),name:String(data.get('name')).trim(),client:String(data.get('client')).trim(),type:String(data.get('type')),theme:String(data.get('theme') || 'Blocksy'),status:String(data.get('status') || 'plan'),notes:String(data.get('notes')).trim(),createdAt:existing?.createdAt || now,updatedAt:now};
    if (existing) projects = projects.map(p => p.id === editId ? project : p);
    else projects.unshift(project);
    if (persist()) { closeModal(); render(); }
  });
  grid?.addEventListener('click', event => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    const project = projects.find(p => p.id === button.dataset.id);
    if (!project) return;
    if (button.dataset.action === 'edit') openModal(project);
    if (button.dataset.action === 'delete' && confirm(`Želiš li obrisati projekt „${project.name}” iz ovog preglednika?`)) {
      projects = projects.filter(p => p.id !== project.id);
      if (persist()) render();
    }
    if (button.dataset.action === 'status') {
      const next = {plan:'progress',progress:'done',done:'plan'};
      projects = projects.map(p => p.id === project.id ? {...p,status:next[p.status] || 'plan',updatedAt:new Date().toISOString()} : p);
      if (persist()) render();
    }
  });
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  render();
})();