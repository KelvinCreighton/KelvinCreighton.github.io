type InProgressNoticeProps = {
  message?: string;
};

export default function InProgressNotice({
  message = "This project is still in progress and some parts are not available yet.",
}: InProgressNoticeProps) {
  return (
    <div className="mb-8 rounded-xl border border-amber-300 bg-amber-50 px-5 py-4 text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
      <p className="text-xs font-semibold uppercase tracking-[0.18em]">
        In Progress
      </p>
      <p className="mt-2 text-sm">{message}</p>
    </div>
  );
}
