// Original conceptual cover illustrations, not technical wiring diagrams.
export function FieldMark() {
  return (
    <svg
      className="field-mark"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2v5m0 10v5M2 12h5m10 0h5M5 5l4 4m6 6 4 4M5 19l4-4m6-6 4-4"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
export function ProjectArtwork({ id }: { id: string }) {
  return (
    <svg
      className={`project-artwork artwork-${id}`}
      viewBox="0 0 480 330"
      fill="none"
      aria-hidden="true"
    >
      {id === "machineguard" && (
        <>
          <ellipse cx="241" cy="266" rx="137" ry="29" fill="#e9e4d9" />
          <path
            d="M130 128 255 85 354 143 231 192Z"
            fill="#c6dfd7"
            stroke="#537c73"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M130 128v67l101 61v-64ZM231 256l123-45v-68l-123 49Z"
            fill="#a9c9bc"
            stroke="#537c73"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="m168 133 72-24 69 40-73 25Z"
            fill="#f6f4ea"
            stroke="#537c73"
            strokeWidth="2"
          />
          <path
            d="m193 136 35-12 39 22-35 12Z"
            fill="#536d68"
            stroke="#435e59"
            strokeWidth="2"
          />
          <g stroke="#537c73" strokeWidth="2">
            <path d="m194 142-11 4m20 1-11 4m20 1-11 4m20 1-11 4m19-40 10-4m0 10 10-4m0 10 10-4m0 10 10-4M155 151v21l37 23m-24-35v10l37 22M248 221l34-12v-24m-22 39 34-12v-30" />
          </g>
          <path
            d="M309 122c50-18 54-63 16-72"
            stroke="#985779"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 6"
          />
          <path
            d="M102 75h28l8-13 12 31 13-50 13 66 13-40 8 13h34"
            stroke="#a26683"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="302" cy="181" r="5" fill="#c59669" />
          <circle cx="156" cy="138" r="3" fill="#fcfaf5" />
          <circle cx="234" cy="182" r="3" fill="#fcfaf5" />
          <path
            d="m99 221 35 20m-23-38 15 9M347 81v-17m-8 8h17"
            stroke="#ae8c6d"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      )}
      {id === "dragonshell" && (
        <>
          <ellipse cx="250" cy="272" rx="147" ry="22" fill="#eee3e8" />
          <g transform="rotate(-6 197 143)">
            <rect
              x="79"
              y="65"
              width="218"
              height="154"
              rx="7"
              fill="#f7eee1"
              stroke="#8c736c"
              strokeWidth="2"
            />
            <path d="M79 94h218" stroke="#8c736c" strokeWidth="2" />
            <circle cx="94" cy="80" r="3" fill="#b47789" />
            <circle cx="105" cy="80" r="3" fill="#d5b77b" />
            <circle cx="116" cy="80" r="3" fill="#83a9a1" />
            <path
              d="m105 125 13 10-13 10m25 1h37M105 166h122m-122 12h92"
              stroke="#86637a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g transform="rotate(5 305 204)">
            <rect
              x="207"
              y="154"
              width="180"
              height="101"
              rx="5"
              fill="#f6f4ed"
              stroke="#738e88"
              strokeWidth="2"
            />
            <path d="M207 178h180" stroke="#738e88" strokeWidth="2" />
            <path
              d="m225 195 11 8-11 8m22 0h22m-44 17h85"
              stroke="#537e77"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M326 101h48v31m-7-8 7 8 7-8M143 239v26h33m-8-7 8 7-8 7"
            stroke="#a58164"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m342 69 9-8m-5 19h14"
            stroke="#a26683"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </>
      )}
      {id === "dremel-3d45-rebuild" && (
        <>
          <ellipse cx="244" cy="286" rx="130" ry="18" fill="#e4e8df" />
          <path
            d="m144 91 150-42 53 38v166l-150 44-53-39Z"
            fill="#eee5d9"
            stroke="#8c8373"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="m144 91 53 40 150-44m-150 44v166"
            stroke="#8c8373"
            strokeWidth="2"
          />
          <path
            d="m214 145 116-34v125l-116 34Z"
            fill="#faf8f1"
            stroke="#8c8373"
            strokeWidth="2"
          />
          <path
            d="m162 126 21 16v108l-21-16Z"
            fill="#c2d5cc"
            stroke="#8c8373"
            strokeWidth="1.5"
          />
          <path
            d="m226 222 63-18 29 22-64 19Z"
            fill="#c9ddd4"
            stroke="#6f8d82"
            strokeWidth="1.5"
          />
          <path
            d="M229 151v65m84-88v88m-91-40 96-28"
            stroke="#a4b1a5"
            strokeWidth="3"
          />
          <path
            d="m258 163 21-6v24l-10 8-11-9Z"
            fill="#bb8d9a"
            stroke="#8b6377"
            strokeWidth="1.5"
          />
          <path
            d="m269 189 1 23m-2 0-15 5 13 9 17-5-13-9"
            stroke="#8b6377"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M179 268c-51 29-73-1-62-30 9-25 0-49-28-36"
            stroke="#985779"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="63"
            y="193"
            width="33"
            height="48"
            rx="3"
            transform="rotate(-12 63 193)"
            fill="#bcd7d0"
            stroke="#537c73"
            strokeWidth="1.5"
          />
          <path d="m74 205 13-3 3 13-13 3Z" fill="#597b70" />
          <path d="M359 168h21m-10-10v21" stroke="#b59a71" strokeWidth="1.5" />
        </>
      )}
      {id === "transmission-rebuild" && (
        <>
          <ellipse cx="242" cy="267" rx="139" ry="25" fill="#ece3d7" />
          <path
            d="m94 226 280-98"
            stroke="#ad9e87"
            strokeWidth="15"
            strokeLinecap="round"
          />
          <path
            d="m94 221 280-98"
            stroke="#e8d9bb"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {[
            { x: 174, y: 191, r: 63, c: "#c6d9d1" },
            { x: 268, y: 158, r: 52, c: "#dfc4c9" },
            { x: 342, y: 132, r: 33, c: "#e7d8b9" },
          ].map(({ x, y, r, c }) => (
            <g key={x} transform={`translate(${x} ${y}) rotate(-18)`}>
              {Array.from({ length: 12 }, (_, i) => (
                <rect
                  key={i}
                  x="-8"
                  y={-r - 7}
                  width="16"
                  height="20"
                  rx="2"
                  fill={c}
                  stroke="#8d8b7c"
                  strokeWidth="1.5"
                  transform={`rotate(${i * 30})`}
                />
              ))}
              <circle r={r - 5} fill={c} stroke="#8d8b7c" strokeWidth="2" />
              <circle
                r={r * 0.47}
                fill="#f7f4eb"
                stroke="#8d8b7c"
                strokeWidth="2"
              />
              <circle
                r={r * 0.2}
                fill="#acaa97"
                stroke="#8d8b7c"
                strokeWidth="1.5"
              />
              {[0, 120, 240].map((a) => (
                <path
                  key={a}
                  d={`M0 ${-r * 0.62}v${-r * 0.18}`}
                  stroke="#8d8b7c"
                  strokeWidth="2"
                  transform={`rotate(${a})`}
                />
              ))}
            </g>
          ))}
          <path
            d="M115 115c23-30 51-41 82-43m-9-6 9 6-7 10M319 232c-22 22-51 32-76 30m8-7-8 7 9 6"
            stroke="#a06a81"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4 5"
          />
        </>
      )}
    </svg>
  );
}
