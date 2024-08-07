import { getData } from './getData';

const createCard = (data) => {
  const card = document.createElement('article');
  card.classList.add('card', 'pizza__card');

  card.innerHTML = `
  <picture>
  <source srcset="${data.images[1]}" type="image/webp">
  <img
    class="card__image"
    src="${data.images[0]}"
    alt="${data.name.ru}" />
  </picture>
  
      <div class="card__content">
        <h3 class="card__title">${data.name['ru'][0].toUpperCase()}${data.name[
    'ru'
  ]
    .slice(1)
    .toLowerCase()}</h3>
          <p class="card__info">
            <span class="card__price">${data.price['25cm']} тенге</span>
              <span>/</span>
                <span class="card__weight">25 см</span>
          </p>

            <button class="card__button" data-id="${data.id}">Выбрать</button>
      </div>
  `;
  return card;
};

export const renderPizzas = async (toppings) => {
  const pizzas = await getData(
    `https://well-zest-library.glitch.me/api/products${
      toppings ? `?toppings=${toppings}` : ''
    }`
  );
  const pizzaList = document.querySelector('.pizza__list');
  pizzaList.textContent = '';

  const items = pizzas.map((data) => {
    const item = document.createElement('li');
    item.classList.add('pizza__item');

    const card = createCard(data);
    item.append(card);

    return item;
  });

  pizzaList.append(...items);
};
