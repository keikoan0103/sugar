// ...new file...
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const from = params.get('from');

  const wrapper = document.createElement('div');
  wrapper.className = 'back-link';

  const link = document.createElement('a');
  link.className = 'back-btn';
  link.textContent = '← レシピ一覧に戻る';
  link.href = 'recipes.html'; // デフォルトの遷移先

  // 参照元が recipes.html の場合はブラウザ履歴に戻す（ページ状態を保持したいときに有効）
  if (document.referrer && document.referrer.includes('recipes.html')) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      history.back();
    });
  } else if (from === 'recipes') {
    // 明示的に ?from=recipes が付いている場合は recipes.html へ遷移
    link.addEventListener('click', (e) => {
      e.preventDefault();
      location.href = 'recipes.html';
    });
  }
  wrapper.appendChild(link);

  const main = document.querySelector('main') || document.body;
  main.insertAdjacentElement('afterbegin', wrapper);
});