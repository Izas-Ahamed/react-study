import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import { RES_MOCK_DATA } from "../mocks/resCardMockData";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={RES_MOCK_DATA} />);

  const resName = screen.getByText("SS Hyderabad Briyani");
  expect(resName).toBeInTheDocument();
});
