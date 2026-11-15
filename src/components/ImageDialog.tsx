"use client";
import { useId, useRef } from "react";
import BlurImage from "@/components/BlurImage";
export default function ImageDialog({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const id = useId();
  function close() {
    ref.current?.close();
  }
  return (
    <>
      <button
        className="record-image certificate"
        ref={trigger}
        aria-label={`Enlarge ${alt}`}
        aria-haspopup="dialog"
        onClick={() => ref.current?.showModal()}
      >
        <BlurImage
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 760px) 90vw, 320px"
        />
        <span>Enlarge ↗</span>
      </button>
      <dialog
        className="image-dialog"
        ref={ref}
        aria-labelledby={id}
        onClose={() => trigger.current?.focus()}
        onClick={(e) => {
          if (e.target === ref.current) {
            const r = ref.current.getBoundingClientRect();
            if (
              e.clientX < r.left ||
              e.clientX > r.right ||
              e.clientY < r.top ||
              e.clientY > r.bottom
            )
              close();
          }
        }}
      >
        <div className="dialog-toolbar">
          <p id={id}>{alt}</p>
          <button autoFocus onClick={close} aria-label="Close image">
            Close ×
          </button>
        </div>
        <BlurImage src={src} alt={alt} sizes="90vw" />
        <a className="text-link" href={src} target="_blank" rel="noreferrer">
          Open original image ↗
        </a>
      </dialog>
    </>
  );
}
