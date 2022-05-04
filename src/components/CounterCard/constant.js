// Icons
import { ReactComponent as Energy } from "../../assets/icons/energy.svg";
import { ReactComponent as Chicken } from "../../assets/icons/chicken.svg";
import { ReactComponent as Apple } from "../../assets/icons/apple.svg";
import { ReactComponent as Burger } from "../../assets/icons/burger.svg";

export const MAPPING_CARD = {
  calorieCount: {
    icon: <Energy />,
    color: "#faeaea",
    name: "Calories",
    unit: "kCal",
  },
  proteinCount: {
    icon: <Chicken />,
    color: "#e9f4fb",
    name: "Protéines",
    unit: "g",
  },
  carbohydrateCount: {
    icon: <Apple />,
    color: "#faf6e5",
    name: "Glucides",
    unit: "g",
  },
  lipidCount: {
    icon: <Burger />,
    color: "#faeaef",
    name: "Lipides",
    unit: "g",
  },
};
