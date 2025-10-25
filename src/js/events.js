export function initClickEvents() {
  const coverButton = document.querySelector('.cover > button');
  const coverDiv = document.querySelector('.cover');

  coverButton.addEventListener('click', () => {
    coverDiv.classList.toggle('cover-exit');
  });
}
