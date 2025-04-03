export default function loadPage() {
  const content = document.querySelector('#content');
  const titleOne = document.createElement('h1');
  const titleTwo = document.createElement('h2');
  const description = document.createElement('p');
  titleOne.textContent = 'Nocturne';
  titleTwo.textContent = 'The Midnight Feast';
  description.textContent = 'Fine dining under a starry sky, with beautifully crafted dishes and a relaxed, elegant atmosphere.';

  titleOne.classList.add('.restaurantName');
  titleTwo.classList.add('.restaurantTitle');
  description.classList.add('restaurantText');

  content.appendChild(titleOne);
  content.appendChild(titleTwo);
  content.appendChild(description);
}