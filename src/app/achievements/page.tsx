import PageIntro from "@/components/PageIntro";
import ImageDialog from "@/components/ImageDialog";
import { achievements } from "@/data/community";
export default function Page() {
  return (
    <>
      <PageIntro number="02" title="Learning under pressure.">
        <p>
          Competition results, collaborative problem solving, and practical
          training. A record of what I worked on and what the team achieved.
        </p>
      </PageIntro>
      <div className="community-list">
        {achievements.map((a) => (
          <article className="community-record" id={a.id} key={a.id}>
            <p className="record-date">{a.date}</p>
            <ImageDialog src={a.image} alt={a.imageAlt} />
            <div className="record-content">
              <p className="eyebrow">
                {a.meta} /{" "}
                {a.status === "Active" ? "Workshop completion" : a.status}
              </p>
              <h2>{a.title}</h2>
              <p className="record-subtitle">{a.subtitle}</p>
              <p>{a.description}</p>
              <ul>
                {a.bullets.map((b) => (
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
