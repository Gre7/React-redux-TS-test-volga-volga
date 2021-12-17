import { useSelector } from "react-redux";
import { selectCalories, selectWeight } from "../../selectors/rootSelectors";
import getApiProduct from "../../apiProduct/product";
import "./Information.scss";

const Information = () => {
  const { title, category, description } = getApiProduct();
  const weight = useSelector(selectWeight);
  const calories = useSelector(selectCalories);
  return (
    <div className="text-information">
      <h5 className="kind-of-food">{category}</h5>
      <h3 className="pizza-name">{title}</h3>
      <p className="pizza-composition">{description}</p>
      <div className="nutritional-value">
        <span className="weight">{weight} г</span>
        <span className="calories">{calories} ккал</span>
      </div>
    </div>
  );
};

export default Information;
