import React from "react";
import { render, screen } from "@testing-library/react";
import Signin from "./Signin";

describe("Signin component", () => {
  test("renders the UnderConstruction component", () => {
    render(<Signin />);
    
    const underConstructionElement = screen.getByTestId("under-construction");
    expect(underConstructionElement).toBeInTheDocument();
  });
});