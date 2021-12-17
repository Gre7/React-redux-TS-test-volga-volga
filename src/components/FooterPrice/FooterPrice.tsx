import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../selectors/rootSelectors";
import "./FooterPrice.scss";

const FooterPrice = () => {
  const cartTotal = useSelector(selectCartTotal);

  return (
    <p className={classNames("price_footer", { hide: cartTotal < 1 })}>
      Итого к оплате: {cartTotal},00 ₽
    </p>
  );
};

export default FooterPrice;
