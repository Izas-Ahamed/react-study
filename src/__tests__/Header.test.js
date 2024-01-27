import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";

it("Should render header component", () => {
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
