import { useDispatch, useSelector } from "react-redux";
import {
  selectCartTotal,
  selectPizzaPrice
} from "../../selectors/rootSelectors";
import { changeCartTotalAction } from "../../store/actions/rootActions";
import "./CartButton.scss";

const CartButton = () => {
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotal);
  const pizzaPrice = useSelector(selectPizzaPrice);

  const addToCartHandler = () => {
    dispatch(changeCartTotalAction(cartTotal + pizzaPrice));
  };

  return (
    <button className="button-cart" onClick={addToCartHandler}>
      В корзину
    </button>
  );
};

export default CartButton;
