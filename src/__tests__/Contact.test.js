import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

//grouping test by describe
describe("Contact us pages tests", () => {
  beforeAll(() => console.log("Before All"));
  beforeEach(() => console.log("Before Each"));

  afterAll(() => console.log("After All"));
  afterEach(() => console.log("After Each"));

  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input tag with Placeholder as UserName inside contact component", () => {
    render(<Contact />);

    const userName = screen.getByPlaceholderText("UserName");

    //Assertion
    expect(userName).toBeInTheDocument();
  });

  it("Should load 2 input tags inside contact component", () => {
    render(<Contact />);
    //input -textbox
    const inputBoxes = screen.getAllByRole("textbox");

    //console.log(inputBoxes);

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
