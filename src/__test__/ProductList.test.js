import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductList from "../components/ProductList";

const listProducts = [
  // Just examples
  {
    id: 1,
    name: "Hockey Stick",
    price: 229.99,
    image: "/Images/stick.jpeg",
    description: "Flexible Hockey Stick",
  },
  {
    id: 2,
    name: "Hockey Skates",
    price: 199.99,
    image: "/Images/skates.jpeg",
    description: "Comfy Hockey Skates",
  },
];

test("renders products and handles add to cart", async () => {
  const listAddToCart = jest.fn();
  render(<ProductList products={listProducts} addToCart={listAddToCart} />);

  expect(screen.getByText("Pet Bed")).toBeInTheDocument();
  expect(screen.getByText("Dog Food")).toBeInTheDocument();

  await userEvent.click(screen.getAllByText("Add to Cart")[0]);
  expect(listAddToCart).toHaveBeenCalledWith(listProducts[0]);
});
