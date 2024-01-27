import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load button inside contact component", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  //Assertion
  expect(button).toBeInTheDocument();
});

test("Should load input tag with Placeholder as UserName inside contact component", () => {
  render(<Contact />);

  const userName = screen.getByPlaceholderText("UserName");

  //Assertion
  expect(userName).toBeInTheDocument();
});

test("Should load 2 input tags inside contact component", () => {
  render(<Contact />);
  //input -textbox
  const inputBoxes = screen.getAllByRole("textbox");

  //console.log(inputBoxes);

  //Assertion
  expect(inputBoxes.length).toBe(2);
});
