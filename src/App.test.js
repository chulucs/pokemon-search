import { render, screen } from "@testing-library/react";
import axiosMock from "axios";
import App from "./App";

test("check if data is rendering after fetching", async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: {},
  });

  render(<App />);

  const loadEl = await screen.findByTestId("loading");
  expect(loadEl).toBeInTheDocument();
});
