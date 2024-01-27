import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";

it("Should render header component and contain login button", () => {
  render(
    //without this <Link/> error thrown
    <BrowserRouter>
      {/*without this redux error throwm*/}
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("Should render header component and contain cart link", () => {
  render(
    //without this <Link/> error thrown
    <BrowserRouter>
      {/*without this redux error throwm*/}
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //using regex
  const cartText = screen.getByText(/Cart/);

  expect(cartText).toBeInTheDocument();
});
