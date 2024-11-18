import { render, screen } from "@testing-library/react";
import SkillsPage from "../app/skills/page";

describe("Skills page", () => {
  it("should render a heading", () => {
    render(<SkillsPage />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("should render page content", () => {
    render(<SkillsPage />);

    expect(screen.getAllByRole("heading", { level: 2 }).length).toEqual(2);
    expect(screen.getAllByRole("heading", { level: 3 }).length).toEqual(6);
    expect(screen.getAllByTestId("skill-card").length).toEqual(25);
  });
});
