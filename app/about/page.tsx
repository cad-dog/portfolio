import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="flex h-full">
      <div className="flex flex-col gap-2 pt-20 w-[680px] mx-auto px-2 text-gray-400">
        <p className="text-3xl text text-blue-300">
          Hey there!
          <br />
          I'm Christopher Arce.
        </p>
        <p>
          I've been a passionate software engineering enthusiast since I was a
          teenager. Since then, I've worked on numerous coding-related projects
          throughout my academic and professional life. Some of the areas I've
          worked in include:
        </p>
        <ul className="pl-6 list-disc">
          <li>Fullstack development</li>
          <li>Implementing algorithms from scratch</li>
          <li>Training AI models</li>
        </ul>
        <p>
          Nowadays, I enjoy doing full-stack development using Node.js on the
          backend and React on the frontend, with TypeScript as the programming
          language. I love learning new things and constantly improving my
          knowledge and skills.
        </p>
        <p>
          When I'm not coding, I enjoy watching series, playing video games,
          studying Japanese, going for a run, and exercising.
        </p>
      </div>
    </div>
  );
}
