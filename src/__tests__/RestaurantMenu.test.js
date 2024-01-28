import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import RES_MENU_MOCK_DATA from "../mocks/resMenuMockData.json";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RES_MENU_MOCK_DATA);
    },
  });
});

it("should should load restaurant menu", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Breakfast (37)");
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItem");
  expect(foodItems.length).toBe(37);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  expect(screen.getByText("(0)")).toBeInTheDocument();

  //adding item to cart
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("(1)")).toBeInTheDocument();

  //adding item to cart
  fireEvent.click(addBtns[1]);

  expect(screen.getByText("(2)")).toBeInTheDocument();

  //jsdom rendered page now have +2 foodItem divs
  expect(screen.getAllByTestId("foodItem").length).toBe(39);

  //clearing cart
  fireEvent.click(screen.getByRole("button", { name: "Clear" }));

  expect(screen.getAllByTestId("foodItem").length).toBe(37);
});
