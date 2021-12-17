import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPizzaInWishlist } from "../../selectors/rootSelectors";
import { changeWishlistAction } from "../../store/actions/rootActions";
import { ImageUrlColor } from "../../store/reducers/rootReducer";
import "./Wishlist.scss";

const Wishlist = () => {
  const dispatch = useDispatch();
  const currentPizzaInWishlist = useSelector(selectCurrentPizzaInWishlist);

  const toggleWishlistValue = () => {
    dispatch(changeWishlistAction(!currentPizzaInWishlist));
  };

  return (
    <img
      onClick={toggleWishlistValue}
      src={currentPizzaInWishlist ? ImageUrlColor.Red : ImageUrlColor.Gray}
      alt="wishlist"
      className="wishlist-img"
    />
  );
};

export default Wishlist;
