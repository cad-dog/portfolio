import { render, screen } from "@testing-library/react";
import AboutPage from "../app/about/page";

describe("About page", () => {
  it("should render all paragraphs", () => {
    render(<AboutPage />);

    expect(screen.getAllByRole("paragraph").length).toEqual(4);
  });

  it("should render a list", () => {
    render(<AboutPage />);

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
    expect(list.childNodes.length).toEqual(3);
  });
});
