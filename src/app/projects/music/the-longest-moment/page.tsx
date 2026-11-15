import InteractiveProject from "@/components/InteractiveProject";

export default function TheLongestMomentPage() {
  return (
    <div className="project-body">
      <div className="w-full max-w-6xl">
        <InteractiveProject
          preview="/images/projects/The-Longest-Moment-Before-a-New-Beginning.webp"
          file="/scores/The-Longest-Moment-Before-a-New-Beginning.musicxml"
        />
      </div>
    </div>
  );
}
