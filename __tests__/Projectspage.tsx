import { render, screen } from "@testing-library/react";
import ProjectsPage from "../app/projects/page";

describe("Projects page", () => {
  it("should render a heading", () => {
    render(<ProjectsPage />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("should render page content", () => {
    render(<ProjectsPage />);
    const projects = screen.getAllByTestId("project");

    expect(projects.length).toEqual(3);

    projects.forEach((project) => {
      const firstParagraph = project.children[0];
      const secondParagraph = project.children[1];
      const list = project.children[2];

      expect(firstParagraph).toBeInTheDocument();
      expect(firstParagraph.localName).toEqual("p");
      expect(secondParagraph).toBeInTheDocument();
      expect(secondParagraph.localName).toEqual("p");
      expect(list).toBeInTheDocument();
      expect(list.localName).toEqual("ul");
    });
  });
});
