import { State } from "../store/reducers/rootReducer";

export const selectCartTotal = ({ cartTotal }: State) => cartTotal;
export const selectPizzaInformation = ({ pizzaInformation }: State) =>
  pizzaInformation;
export const selectCurrentPizzaInWishlist = ({
  currentPizzaInWishlist
}: State) => currentPizzaInWishlist;

export const selectPizzaPrice = ({ pizzaInformation }: State) =>
  pizzaInformation.price;

export const selectWeight = ({ pizzaInformation }: State) =>
  pizzaInformation.weight;

export const selectCalories = ({ pizzaInformation }: State) =>
  pizzaInformation.calories;
