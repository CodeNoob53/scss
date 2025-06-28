// Додає/знімає клас .header--scrolled при прокрутці
function updateHeaderPadding() {
  const header = document.querySelector('.header');
  const checkbox = document.querySelector('.header__checkbox');
  if (!header) return;
  if (window.matchMedia('(max-width: 480px)').matches) {
    // Якщо меню відкрите і був скрол — залишаємо зменшений padding-top (20px)
    if (checkbox && checkbox.checked && window.scrollY > 10) {
      header.style.transition = 'padding-top 0.3s';
      header.style.paddingTop = '20px';
    } else if (checkbox && checkbox.checked) {
      header.style.transition = 'padding-top 0.3s';
      header.style.paddingTop = '47px';
    } else if (window.scrollY > 10) {
      header.style.transition = 'padding-top 0.3s';
      header.style.paddingTop = '20px';
    } else {
      header.style.transition = 'padding-top 0.3s';
      header.style.paddingTop = '47px';
    }
  } else {
    header.style.removeProperty('padding-top');
    header.style.removeProperty('transition');
  }
}

window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const checkbox = document.querySelector('.header__checkbox');
  if (!header) return;
  // Якщо меню відкрите — не додаємо blur
  if (checkbox && checkbox.checked) {
    header.classList.remove('header--scrolled');
    updateHeaderPadding();
    return;
  }
  if (window.scrollY > 10) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
  updateHeaderPadding();
});

// Відстежуємо зміну стану бургер-меню
const burgerCheckbox = document.querySelector('.header__checkbox');
if (burgerCheckbox) {
  burgerCheckbox.addEventListener('change', function() {
    const header = document.querySelector('.header');
    if (!header) return;
    if (this.checked && window.scrollY > 10) {
      // Якщо меню відкрили при скролі — залишаємо зменшений padding-top
      header.classList.remove('header--scrolled');
    } else if (this.checked) {
      header.classList.remove('header--scrolled');
    } else if (window.scrollY > 10) {
      header.classList.add('header--scrolled');
    }
    updateHeaderPadding();
  });
}

// Оновлюємо padding при ресайзі
window.addEventListener('resize', updateHeaderPadding);
// І при завантаженні
window.addEventListener('DOMContentLoaded', updateHeaderPadding);
