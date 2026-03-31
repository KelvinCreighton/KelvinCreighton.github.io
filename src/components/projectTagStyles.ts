export const defaultProjectTagClassName =
  "border-gray-300 bg-gray-100 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300";

export const projectTagClassNames: Record<string, string> = {
  web: "border-sky-200 bg-sky-100 text-sky-800 dark:border-sky-900 dark:bg-sky-950/70 dark:text-sky-300",
  ssti: "border-violet-200 bg-violet-100 text-violet-800 dark:border-violet-900 dark:bg-violet-950/70 dark:text-violet-300",
  jinja2:
    "border-fuchsia-200 bg-fuchsia-100 text-fuchsia-800 dark:border-fuchsia-900 dark:bg-fuchsia-950/70 dark:text-fuchsia-300",
  rce: "border-rose-200 bg-rose-100 text-rose-800 dark:border-rose-900 dark:bg-rose-950/70 dark:text-rose-300",
  nosql:
    "border-indigo-200 bg-indigo-100 text-indigo-800 dark:border-indigo-900 dark:bg-indigo-950/70 dark:text-indigo-300",
  mongodb:
    "border-emerald-200 bg-emerald-100 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-300",
  "auth-bypass":
    "border-amber-200 bg-amber-100 text-amber-800 dark:border-amber-900 dark:bg-amber-950/70 dark:text-amber-300",
  eval: "border-red-200 bg-red-100 text-red-800 dark:border-red-900 dark:bg-red-950/70 dark:text-red-300",
  python:
    "border-yellow-200 bg-yellow-100 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950/70 dark:text-yellow-300",
  xxe: "border-orange-200 bg-orange-100 text-orange-800 dark:border-orange-900 dark:bg-orange-950/70 dark:text-orange-300",
  soap: "border-cyan-200 bg-cyan-100 text-cyan-800 dark:border-cyan-900 dark:bg-cyan-950/70 dark:text-cyan-300",
  lfi: "border-teal-200 bg-teal-100 text-teal-800 dark:border-teal-900 dark:bg-teal-950/70 dark:text-teal-300",
  idor: "border-pink-200 bg-pink-100 text-pink-800 dark:border-pink-900 dark:bg-pink-950/70 dark:text-pink-300",
  routing:
    "border-lime-200 bg-lime-100 text-lime-800 dark:border-lime-900 dark:bg-lime-950/70 dark:text-lime-300",
  messages:
    "border-purple-200 bg-purple-100 text-purple-800 dark:border-purple-900 dark:bg-purple-950/70 dark:text-purple-300",
  sqli: "border-red-200 bg-red-100 text-red-800 dark:border-red-900 dark:bg-red-950/70 dark:text-red-300",
  ssh: "border-slate-200 bg-slate-100 text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
  mail: "border-blue-200 bg-blue-100 text-blue-800 dark:border-blue-900 dark:bg-blue-950/70 dark:text-blue-300",
  forensics:
    "border-emerald-200 bg-emerald-100 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-300",
  png: "border-green-200 bg-green-100 text-green-800 dark:border-green-900 dark:bg-green-950/70 dark:text-green-300",
  binwalk:
    "border-lime-200 bg-lime-100 text-lime-800 dark:border-lime-900 dark:bg-lime-950/70 dark:text-lime-300",
  steg: "border-lime-200 bg-lime-100 text-lime-800 dark:border-lime-900 dark:bg-lime-950/70 dark:text-lime-300",
  rev: "border-violet-200 bg-violet-100 text-violet-800 dark:border-violet-900 dark:bg-violet-950/70 dark:text-violet-300",
  binary:
    "border-gray-300 bg-gray-100 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",
  strings:
    "border-indigo-200 bg-indigo-100 text-indigo-800 dark:border-indigo-900 dark:bg-indigo-950/70 dark:text-indigo-300",
  easy: "border-zinc-200 bg-zinc-100 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  gdb: "border-sky-200 bg-sky-100 text-sky-800 dark:border-sky-900 dark:bg-sky-950/70 dark:text-sky-300",
  objdump:
    "border-cyan-200 bg-cyan-100 text-cyan-800 dark:border-cyan-900 dark:bg-cyan-950/70 dark:text-cyan-300",
  pwn: "border-rose-200 bg-rose-100 text-rose-800 dark:border-rose-900 dark:bg-rose-950/70 dark:text-rose-300",
  "buffer-overflow":
    "border-orange-200 bg-orange-100 text-orange-800 dark:border-orange-900 dark:bg-orange-950/70 dark:text-orange-300",
  ret2win:
    "border-pink-200 bg-pink-100 text-pink-800 dark:border-pink-900 dark:bg-pink-950/70 dark:text-pink-300",
  heap: "border-amber-200 bg-amber-100 text-amber-800 dark:border-amber-900 dark:bg-amber-950/70 dark:text-amber-300",
  overflow:
    "border-yellow-200 bg-yellow-100 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950/70 dark:text-yellow-300",
  "function-pointer":
    "border-fuchsia-200 bg-fuchsia-100 text-fuchsia-800 dark:border-fuchsia-900 dark:bg-fuchsia-950/70 dark:text-fuchsia-300",
  rop: "border-red-200 bg-red-100 text-red-800 dark:border-red-900 dark:bg-red-950/70 dark:text-red-300",
  libc: "border-stone-200 bg-stone-100 text-stone-800 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300",
  shell:
    "border-neutral-200 bg-neutral-100 text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
  source:
    "border-blue-200 bg-blue-100 text-blue-800 dark:border-blue-900 dark:bg-blue-950/70 dark:text-blue-300",
  html: "border-orange-200 bg-orange-100 text-orange-800 dark:border-orange-900 dark:bg-orange-950/70 dark:text-orange-300",
  "client-side":
    "border-cyan-200 bg-cyan-100 text-cyan-800 dark:border-cyan-900 dark:bg-cyan-950/70 dark:text-cyan-300",
  api: "border-sky-200 bg-sky-100 text-sky-800 dark:border-sky-900 dark:bg-sky-950/70 dark:text-sky-300",
  headers:
    "border-teal-200 bg-teal-100 text-teal-800 dark:border-teal-900 dark:bg-teal-950/70 dark:text-teal-300",
  curl: "border-slate-200 bg-slate-100 text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
  login:
    "border-blue-200 bg-blue-100 text-blue-800 dark:border-blue-900 dark:bg-blue-950/70 dark:text-blue-300",
  platformer:
    "border-sky-200 bg-sky-100 text-sky-800 dark:border-sky-900 dark:bg-sky-950/70 dark:text-sky-300",
  javascript:
    "border-yellow-200 bg-yellow-100 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950/70 dark:text-yellow-300",
  levels:
    "border-indigo-200 bg-indigo-100 text-indigo-800 dark:border-indigo-900 dark:bg-indigo-950/70 dark:text-indigo-300",
  "2d": "border-blue-200 bg-blue-100 text-blue-800 dark:border-blue-900 dark:bg-blue-950/70 dark:text-blue-300",
  arcade:
    "border-orange-200 bg-orange-100 text-orange-800 dark:border-orange-900 dark:bg-orange-950/70 dark:text-orange-300",
  shooter:
    "border-rose-200 bg-rose-100 text-rose-800 dark:border-rose-900 dark:bg-rose-950/70 dark:text-rose-300",
  tanks:
    "border-emerald-200 bg-emerald-100 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-300",
  engine:
    "border-violet-200 bg-violet-100 text-violet-800 dark:border-violet-900 dark:bg-violet-950/70 dark:text-violet-300",
  "3d": "border-fuchsia-200 bg-fuchsia-100 text-fuchsia-800 dark:border-fuchsia-900 dark:bg-fuchsia-950/70 dark:text-fuchsia-300",
  matrices:
    "border-cyan-200 bg-cyan-100 text-cyan-800 dark:border-cyan-900 dark:bg-cyan-950/70 dark:text-cyan-300",
  simulation:
    "border-teal-200 bg-teal-100 text-teal-800 dark:border-teal-900 dark:bg-teal-950/70 dark:text-teal-300",
  physics:
    "border-lime-200 bg-lime-100 text-lime-800 dark:border-lime-900 dark:bg-lime-950/70 dark:text-lime-300",
  orbit:
    "border-slate-200 bg-slate-100 text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
  arrangement:
    "border-violet-200 bg-violet-100 text-violet-800 dark:border-violet-900 dark:bg-violet-950/70 dark:text-violet-300",
  piano:
    "border-amber-200 bg-amber-100 text-amber-800 dark:border-amber-900 dark:bg-amber-950/70 dark:text-amber-300",
  homestuck:
    "border-pink-200 bg-pink-100 text-pink-800 dark:border-pink-900 dark:bg-pink-950/70 dark:text-pink-300",
  virtuosic:
    "border-rose-200 bg-rose-100 text-rose-800 dark:border-rose-900 dark:bg-rose-950/70 dark:text-rose-300",
  original:
    "border-emerald-200 bg-emerald-100 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-300",
  composition:
    "border-blue-200 bg-blue-100 text-blue-800 dark:border-blue-900 dark:bg-blue-950/70 dark:text-blue-300",
  rebuild:
    "border-orange-200 bg-orange-100 text-orange-800 dark:border-orange-900 dark:bg-orange-950/70 dark:text-orange-300",
  transmission:
    "border-red-200 bg-red-100 text-red-800 dark:border-red-900 dark:bg-red-950/70 dark:text-red-300",
  honda:
    "border-slate-200 bg-slate-100 text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
  drivetrain:
    "border-stone-200 bg-stone-100 text-stone-800 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300",
};
