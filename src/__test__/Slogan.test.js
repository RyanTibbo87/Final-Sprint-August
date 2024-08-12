import React from "react";
import { render, screen } from "@testing-library/react";
import Slogan from "../components/Slogan";

test("renders the Slogan component correctly", () => {
  render(<Slogan />);

  expect(screen.getByText(/Hockey Town/i)).toBeInTheDocument();
  expect(screen.getByText(/The coolest sport on earth./i)).toBeInTheDocument();

  expect(screen.getByTestId("icon")).toBeInTheDocument();

  expect(
    screen.getByText(
      /At Hockey Town, we provide a wide range of products that get you prepared for the upcoming season./i
    )
  ).toBeInTheDocument();
});
