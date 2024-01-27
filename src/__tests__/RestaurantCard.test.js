import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import RES_MOCK_DATA from "../mocks/resCardMockData.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={RES_MOCK_DATA} />);

  const resName = screen.getByText("SS Hyderabad Briyani");
  expect(resName).toBeInTheDocument();
});

it("should render RestaurantCard component with props data", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  render(<RestaurantCardPromoted resData={RES_MOCK_DATA} />);

  const promotedTag = screen.getByText("Promoted");
  expect(promotedTag).toBeInTheDocument();
});
