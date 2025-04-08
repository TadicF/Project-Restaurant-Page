export function homePage() {
  const content = document.querySelector('#content');
  const homePage = document.createElement('div');
  const titleOne = document.createElement('h1');
  const titleTwo = document.createElement('h2');
  const description = document.createElement('p');

  titleOne.textContent = 'Nocturne';
  titleTwo.textContent = 'The Midnight Feast';
  description.textContent = 'Fine dining under a starry sky, with beautifully crafted dishes and a relaxed, elegant atmosphere.';

  homePage.classList.add('homePage');
  titleOne.classList.add('restaurantName');
  titleTwo.classList.add('restaurantTitle');
  description.classList.add('restaurantText');

  content.appendChild(homePage);
  homePage.appendChild(titleOne);
  homePage.appendChild(titleTwo);
  homePage.appendChild(description);
}