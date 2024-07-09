import { renderPizzas } from './modules/renderPizzas';
import { renderToppings } from './modules/renderToppings';
import { toppingsToggle } from './modules/toppingsToggle';

const init = () => {
  toppingsToggle();
  renderToppings();
  renderPizzas();
};

init();
