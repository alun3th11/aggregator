function filter(type) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (type === 'all') {
      card.style.display = 'block';
    } else if (card.classList.contains(type)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function sortCards() {
  const container = document.querySelector('.cards');
  const cards = Array.from(container.querySelectorAll('.card'));
  const sortValue = document.getElementById('sortSelect').value;

  if (sortValue === 'default') {
    return;
  } else if (sortValue === 'name') {
    cards.sort((a, b) => {
      const nameA = a.querySelector('h2').innerText.toLowerCase();
      const nameB = b.querySelector('h2').innerText.toLowerCase();
      return nameA.localeCompare(nameB);
    });
  } else if (sortValue === 'level') {
    cards.sort((a, b) => {
      const levelA = a.querySelector('p strong').nextSibling.textContent.trim();
      const levelB = b.querySelector('p strong').nextSibling.textContent.trim();
      return levelA.localeCompare(levelB);
    });
  }

  cards.forEach(card => container.appendChild(card));
}

function toggleDetails(button) {
  const allDetails = document.querySelectorAll('.details');
  const details = button.nextElementSibling;

  // Проверяем, открыт ли этот блок
  const isVisible = details.classList.contains('visible');

  // Скрываем все
  allDetails.forEach(d => {
    d.classList.remove('visible');
  });

  // Если был закрыт — открыть
  if (!isVisible) {
    details.classList.add('visible');
  }
}
