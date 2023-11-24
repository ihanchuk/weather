import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Main blocks", () => {
  test("renders All main sections", () => {
    render(<App />);
    const linkElement = screen.getByText(/Header/i);
    expect(linkElement).toBeInTheDocument();
  });
});
