import { render, screen } from "@testing-library/react";
import WhyRegister from "../WhyRegister/WhyRegister";

test("should render why register component", () => {
  render(<WhyRegister />);
  const whyRegisterElement = screen.getByTestId("why-register");
  expect(whyRegisterElement).toBeInTheDocument();
  expect(whyRegisterElement).toHaveClass("row");
});
