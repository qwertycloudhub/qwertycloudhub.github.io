document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.drawer-toggle').forEach(button => {
    // Build arrow span if not already present
    if (!button.querySelector('.toggle-arrow')) {
      const arrow = document.createElement('span');
      arrow.className = 'toggle-arrow';
      arrow.textContent = '▸';
      button.appendChild(arrow);
    }

    button.addEventListener('click', () => {
      const parent = button.closest('li');
      const drawer = parent.querySelector('.drawer-content');
      const isOpen = drawer.style.maxHeight && drawer.style.maxHeight !== '0px';

      drawer.style.maxHeight = isOpen ? '0px' : drawer.scrollHeight + 'px';
      drawer.classList.toggle('expanded', !isOpen);
      button.classList.toggle('open', !isOpen);
    });
  });
});
