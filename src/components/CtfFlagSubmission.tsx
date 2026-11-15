"use client";
import { useId, useState, type FormEvent } from "react";
export default function CtfFlagSubmission({
  expectedFlag,
  isComingSoon,
}: {
  expectedFlag: string;
  isComingSoon: boolean;
}) {
  const id = useId();
  const [flag, setFlag] = useState("");
  const [state, setState] = useState<"idle" | "correct" | "incorrect">("idle");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isComingSoon)
      setState(flag.trim() === expectedFlag ? "correct" : "incorrect");
  }
  return (
    <section className="challenge-form">
      <h2>Check your flag</h2>
      <p id={`${id}-help`}>
        {isComingSoon
          ? "The flag check will be available when this challenge is released."
          : "A local practice check. Your answer stays in this browser; there is no account or scoreboard."}
      </p>
      <form onSubmit={submit}>
        <label htmlFor={id}>Recovered flag</label>
        <div>
          <input
            id={id}
            aria-describedby={`${id}-help ${id}-feedback`}
            value={flag}
            disabled={isComingSoon}
            onChange={(e) => {
              setFlag(e.target.value);
              setState("idle");
            }}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            required
            placeholder={isComingSoon ? "Release pending" : "Enter your flag"}
          />
          <button className="button" disabled={isComingSoon} type="submit">
            Check flag →
          </button>
        </div>
        <p id={`${id}-feedback`} className="challenge-feedback" role="status">
          {state === "correct"
            ? "Correct — you found it."
            : state === "incorrect"
              ? "That doesn’t match. Check the exact spelling and try again."
              : ""}
        </p>
      </form>
    </section>
  );
}
