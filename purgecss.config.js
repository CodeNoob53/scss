module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'],
  css: ['./dist/**/*.css'],
  defaultExtractor: (content) => {
    // Захоплюємо всі можливі класи, включаючи BEM модифікатори
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
    return broadMatches.concat(innerMatches);
  },
  safelist: [
    // Додаємо класи, які динамічно додаються через JavaScript
    'header--scrolled',
    /^header__line--/,
    // Зберігаємо всі псевдокласи та псевдоелементи
    /:hover$/,
    /:focus$/,
    /:active$/,
    /::before$/,
    /::after$/,
    // Зберігаємо анімації
    /^animate-/,
    /fadeInUp/,
    /slideInLeft/,
    /slideInRight/,
    /logoFlip/,
  ],
};