import { render, screen } from "@testing-library/react";
import Navbar from "./components/navbar";
import { Provider } from "react-redux";
import { store } from "./app/store";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
  const linkElement = screen.getByText(/TODO LIST/i);
  expect(linkElement).toBeInTheDocument();
});
