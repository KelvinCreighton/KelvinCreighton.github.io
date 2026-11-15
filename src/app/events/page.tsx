import PageIntro from "@/components/PageIntro";
import BlurImage from "@/components/BlurImage";
import { events } from "@/data/community";
export default function Page() {
  return (
    <>
      <PageIntro number="03" title="Good work takes people.">
        <p>
          Organizing competitions, keeping events running, and helping people
          find their way into security. The work around the work.
        </p>
      </PageIntro>
      <div className="community-list">
        {[...events]
          .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
          .map((e) => (
            <article className="community-record" id={e.id} key={e.id}>
              <p className="record-date">{e.date}</p>
              <div className="record-image">
                <BlurImage
                  src={e.image}
                  alt={e.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 760px) 90vw, 320px"
                />
              </div>
              <div className="record-content">
                <p className="eyebrow">Community / Event organization</p>
                <h2>{e.title}</h2>
                <p className="record-subtitle">{e.subtitle}</p>
                <p>{e.description}</p>
                <ul>
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
      </div>
    </>
  );
}
