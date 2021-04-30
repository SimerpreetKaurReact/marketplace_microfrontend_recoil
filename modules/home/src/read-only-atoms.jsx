import {selector} from "recoil"
import {product,selectedItems} from "./atoms"

export const theBill = selector({
    key: "theBill",
    get: ({ get }) => {
      const items = get(product)
        .filter(({ name }) => get(selectedItems).includes(name))
        .map((fruit) => ({
          ...product,
          quantity: 2,
          total: fruit.product * 2,
        }));
  
      return {
        items,
        total: items.reduce((a, { total }) => a + total, 0),
      };
    },
  });