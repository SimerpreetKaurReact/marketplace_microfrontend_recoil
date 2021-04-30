import { atom, selector } from "recoil";

export const product = atom({
  key: "product",
  default: [
    {
      name: "Eco",
      image: "http://localhost:3001/product/Eco.jpeg",
      price: 1,
      descriprion:"ECO is powered by UVC short wavelength UV light proven to decompose the DNA structure of pathogens, preventing the spread  of viruses, bacteria, and other micro-organisms. ECO is a  user-friendly robot which is ready to be part of your homes, play areas, offices and other shared spaces to shield your loved ones. Sterilize your surroundings with ECO and create a protected space for your loved ones by automating your  disinfection process with a reliable, cost-effective robot that helps fight viruses and contain the spread of coronavirus"
    },
    {
      name: "Auto",
      image: "http://localhost:3001/product/Auto.jpeg",
      price: 3,
      descriprion:"The robot is powered by UVC short wavelength UV light proven to decompose the DNA/RNA structure of pathogens, preventing the spread of viruses, bacteria, and other microorganisms. Sterilize your surroundings and create a protected space for your staff  and customers by automating your disinfection process with a reliable, cost-effective robot that helps fight viruses and contain the spread of coronavirus."
    },
  ],
});

export const selectedItems = atom({
  key: "selectedItems",
  default: [],
});

export const cartCount = selector({
  key: "cartCount",
  get: ({ get }) => {
    return get(selectedItems).length;
  },
});
