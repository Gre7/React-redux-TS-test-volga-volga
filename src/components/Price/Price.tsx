import { useSelector } from "react-redux";
import { selectPizzaPrice } from "../../selectors/rootSelectors";
import "./Price.scss";

const Price = () => {
  const pizzaPrice = useSelector(selectPizzaPrice);
  return <p className="price">{pizzaPrice},00 ₽</p>;
};

export default Price;
