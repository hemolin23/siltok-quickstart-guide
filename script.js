const tabs = document.querySelectorAll('[data-platform]');
const panels = document.querySelectorAll('[data-panel]');
tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(item => item.classList.toggle('active', item === tab));
  panels.forEach(panel => panel.classList.toggle('hidden', panel.dataset.panel !== tab.dataset.platform));
}));
