import PageIntro from "@/components/PageIntro";
import ImageDialog from "@/components/ImageDialog";
import { events } from "@/data/community";

const shortMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function shortDate(sortDate: string) {
  const [year, month] = sortDate.split("-");
  return `${shortMonths[Number(month) - 1]} ${year}`;
}

export default function Page() {
  return (
    <>
      <PageIntro title="Community & Leadership">
        <p>
          Organizing competitions, keeping events running, and helping people
          find their way into security. The work around the work.
        </p>
      </PageIntro>
      <div className="community-list event-list">
        {[...events]
          .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
          .map((e) => (
            <article className="community-record" id={e.id} key={e.id}>
              <p className="record-date">{shortDate(e.sortDate)}</p>
              <ImageDialog src={e.image} alt={e.imageAlt} />
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
