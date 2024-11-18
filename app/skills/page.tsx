import Skills from "../ui/Skills/skill-list";
import { skills } from "../lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
};

export default function Page() {
  return (
    <div className="flex px-2 pb-4 pt-20">
      <div className="flex flex-col gap-2 w-[680px] mx-auto">
        <h1 className="text-3xl text-blue-300">Skills</h1>
        <Skills skills={skills} />
      </div>
    </div>
  );
}
