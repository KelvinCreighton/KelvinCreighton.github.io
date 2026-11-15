import InteractiveProject from "@/components/InteractiveProject";

export default function BeethovenVirusPage() {
  return (
    <div className="project-body">
      <div className="w-full max-w-6xl">
        <InteractiveProject
          preview="/images/projects/Beethoven_Virus.webp"
          file="/scores/Beethoven_Virus.musicxml"
        />
      </div>
    </div>
  );
}
