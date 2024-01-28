import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import RES_DATA from "../mocks/resListMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//Jsdom doesn't provide fetch, we creating mock fetch
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RES_DATA);
    },
  });
});

//for update state async operation we use act
it("should search biriyani text input the body component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(13);

  fireEvent.change(searchInput, { target: { value: "biriyani" } });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(3);
});
