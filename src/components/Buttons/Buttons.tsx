import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { selectPizzaInformation } from "../../selectors/rootSelectors";
import { changePizzaInformationAction } from "../../store/actions/rootActions";
import { ThinCrust, PizzaSize } from "../../store/reducers/rootReducer";
import getApiProduct from "../../apiProduct/product";
import "./Buttons.scss";

const { price, weight, calories } = getApiProduct();
const { variant } = getApiProduct();

// const valueSizeChanges = {
//   [`size=${PizzaSize.Small}-thinCrust=${ThinCrust.Regular}`]: {
//     price: 100,
//     weight: 700,
//     calories: 2220
//   },

//   [`size=${PizzaSize.Medium}-thinCrust=${ThinCrust.Regular}`]: {
//     price: 200,
//     weight: 900,
//     calories: 2620
//   },

//   [`size=${PizzaSize.Large}-thinCrust=${ThinCrust.Regular}`]: {
//     price: 300,
//     weight: 1100,
//     calories: 3000
//   },

//   [`size=${PizzaSize.Medium}-thinCrust=${ThinCrust.Thin}`]: {
//     price: 400,
//     weight: 800,
//     calories: 2340
//   },

//   [`size=${PizzaSize.Large}-thinCrust=${ThinCrust.Thin}`]: {
//     price: 500,
//     weight: 1000,
//     calories: 2780
//   }
// };

enum ButtonName {
  ThinCrust = "thinCrust",
  PizzaSize = "pizzaSize"
}

const Buttons = () => {
  const dispatch = useDispatch();
  const { pizzaSize, thinCrust } = useSelector(selectPizzaInformation);

  const getUpdatedSizeByThin = (value: string) =>
    value === ThinCrust.Thin ? PizzaSize.Medium : PizzaSize.Small;

  const updatePizzaParams = (event: React.MouseEvent<HTMLButtonElement>) => {
    const isSizeChange = event.currentTarget.name === ButtonName.PizzaSize;
    const changedValue = event.currentTarget.value;
    const updatedSize = isSizeChange
      ? changedValue
      : getUpdatedSizeByThin(changedValue);
    const updatedThinCrust = !isSizeChange ? changedValue : thinCrust;

    // const pizzaParams =
    //   valueSizeChanges[`size=${updatedSize}-thinCrust=${updatedThinCrust}`];

    let pizzaParams = variant.filter((item) => {
      return item.type === updatedThinCrust && item.size === updatedSize;
    });

    if (updatedThinCrust === "regular" && updatedSize === "small") {
      pizzaParams = [{ price: price, weight: weight, calories: calories }];
    }

    dispatch(
      changePizzaInformationAction({
        pizzaSize: updatedSize as PizzaSize,
        thinCrust: updatedThinCrust as ThinCrust,
        ...(pizzaParams[0] as any)
      })
    );
  };

  const isSmallSizeAvailable = thinCrust !== ThinCrust.Thin;

  return (
    <div className="buttons">
      <div className="dough-buttons-container">
        <button
          className={classnames("button-dough", {
            active: thinCrust === ThinCrust.Regular
          })}
          value={ThinCrust.Regular}
          name={ButtonName.ThinCrust}
          onClick={updatePizzaParams}
        >
          Обычное тесто
        </button>
        <button
          className={classnames("button-dough", {
            active: thinCrust === ThinCrust.Thin
          })}
          name={ButtonName.ThinCrust}
          value={ThinCrust.Thin}
          onClick={updatePizzaParams}
        >
          Тонкое тесто
        </button>
      </div>
      <div className="size-buttons">
        {isSmallSizeAvailable && (
          <button
            onClick={updatePizzaParams}
            className={classnames("button-size", {
              active: pizzaSize === PizzaSize.Small
            })}
            name={ButtonName.PizzaSize}
            value={PizzaSize.Small}
          >
            Маленькая
          </button>
        )}

        <button
          onClick={updatePizzaParams}
          className={classnames("button-size", {
            active: pizzaSize === PizzaSize.Medium,
            two: !isSmallSizeAvailable
          })}
          name={ButtonName.PizzaSize}
          value={PizzaSize.Medium}
        >
          Средняя
        </button>
        <button
          onClick={updatePizzaParams}
          className={classnames("button-size", {
            active: pizzaSize === PizzaSize.Large,
            two: !isSmallSizeAvailable
          })}
          name={ButtonName.PizzaSize}
          value={PizzaSize.Large}
        >
          Большая
        </button>
      </div>
    </div>
  );
};

export default Buttons;
