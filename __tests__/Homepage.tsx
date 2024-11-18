import { render, screen } from "@testing-library/react";
import HomePage from "../app/page";

describe("Home page", () => {
  it("should render all page content", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole("paragraph").length).toEqual(2);
  });

  it("should render a link with all its attributes", () => {
    render(<HomePage />);

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toEqual("https://www.3pillarglobal.com");
    expect(link.attributes.length).toEqual(4);
  });
});
