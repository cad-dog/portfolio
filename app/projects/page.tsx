import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Page() {
  return (
    <div className="flex px-2 pb-4 pt-20 text-gray-400">
      <div className="flex flex-col gap-4 w-[680px] mx-auto">
        <h1 className="text-3xl text-blue-300">Projects</h1>
        <div data-testid="project">
          <p className="text-2xl text-gray-200">
            June 2023 - October 2024 | The Telegraph Group | Remote, Mexico
          </p>
          <p className="text-xl text-gray-300">Frontend Engineer</p>
          <ul className="list-disc pl-6">
            <li>
              Worked as a software engineer on the front-end development of a
              web page and a mobile application for an online newspaper.
            </li>
            <li>
              Worked using the following technologies:
              <ul className="list-disc pl-6">
                <li>Adobe AEM</li>
                <li>JavaScript</li>
                <li>Cypress</li>
              </ul>
            </li>
          </ul>
        </div>

        <div data-testid="project">
          <p className="text-2xl text-gray-200">
            July 2022 - May 2023 | The Mitre Corporation | Remote, Mexico
          </p>
          <p className="text-xl text-gray-300">Software Engineer</p>
          <ul className="list-disc pl-6">
            <li>
              Worked as a software engineer on the front-end and back-end
              development of a web page where users can subscribe to get an
              education and get certified on their threat-informed defense
              aptitude.
            </li>
            <li>
              Worked using the following technologies:
              <ul className="list-disc pl-6">
                <li>React.js</li>
                <li>.NET Core</li>
                <li>Entity Framework</li>
              </ul>
            </li>
          </ul>
        </div>

        <div data-testid="project">
          <p className="text-2xl text-gray-200">
            January 2023 - May 2023 | Lawgic | Remote, Mexico
          </p>
          <p className="text-xl text-gray-300">Full-stack Developer</p>
          <ul className="list-disc pl-6">
            <li>
              Worked as a freelancer on the front-end and back-end development
              and deployment of an app used for task management for a company
              that sells online courses using the following tech stack:
              <ul className="list-disc pl-6">
                <li>.NET Core</li>
                <li>React.js</li>
                <li>MySQL</li>
                <li>Azure</li>
                <li>Entity Framework</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
