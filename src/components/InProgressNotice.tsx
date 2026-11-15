export default function InProgressNotice({
  message = "This project is still in progress and some parts are not available yet.",
}: {
  message?: string;
}) {
  return (
    <aside className="notice">
      <p className="eyebrow">Work in progress</p>
      <p>{message}</p>
    </aside>
  );
}
