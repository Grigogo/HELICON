window.addEventListener('DOMContentLoaded', () => {
  const data = [
    {
      id: 1,
      name: 'Коптильня 10л',
      price: 1200
    },
    {
      id: 2,
      name: 'Коптильня 20л',
      price: 1400
    },
    {
      id: 3,
      name: 'Коптильня 30л',
      price: 1600
    },
  ]

  const cards = document.querySelectorAll('.card');
  cards.forEach((item, index) => {
      item.querySelector('.card__button').setAttribute('id', `${data[index].id}`);
      item.querySelector('.card__header').innerText = data[index].name;
      item.querySelector('.card__price').innerText = `${new Intl.NumberFormat('ru-RU').format(data[index].price)} руб.`;
      item.querySelector('.card__button').addEventListener('click', disableButton);
  })

  const sumEl = document.querySelector('.sum span');
  let sum = 0;

  function disableButton(e) {
    e.currentTarget.setAttribute('disabled', 'disabled');
    e.currentTarget.classList.add('clicked');
    e.currentTarget.innerText = 'ДОБАВЛЕНО';
    const btnId = e.currentTarget.getAttribute('id');
    sum += data[btnId - 1].price;
    sumEl.textContent = `${new Intl.NumberFormat('ru-RU').format(sum)}`;
  }
});
