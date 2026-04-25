export type ProjectNavigationCategory =
  | "cybersecurity"
  | "game-dev"
  | "music"
  | "auto"
  | "engineering";

type ProjectNavigationItem = {
  href: string;
  title: string;
};

export const projectNavigationData: Record<
  ProjectNavigationCategory,
  ProjectNavigationItem[]
> = {
  cybersecurity: [
    { href: "/projects/cybersecurity/ssti1", title: "PicoCTF: SSTI1" },
    {
      href: "/projects/cybersecurity/nosql-injection",
      title: "PicoCTF: No Sql Injection",
    },
    { href: "/projects/cybersecurity/eval", title: "PicoCTF: 3v@l" },
    { href: "/projects/cybersecurity/soap", title: "PicoCTF: SOAP" },
    {
      href: "/projects/cybersecurity/macsync-stealer",
      title: "MacSync Stealer",
    },
    {
      href: "/projects/cybersecurity/cupid-portal",
      title: "HTCOTB2026 CTF: Cupid's Secret Message",
    },
    {
      href: "/projects/cybersecurity/heartmail",
      title: "HTCOTB2026 CTF: HeartMail 1.0",
    },
    {
      href: "/projects/cybersecurity/wicys-ctf-01",
      title: "WiCyS CTF: Bunny Tracker Glitch",
    },
    {
      href: "/projects/cybersecurity/wicys-ctf-02",
      title: "WiCyS CTF: Luck Checker",
    },
    {
      href: "/projects/cybersecurity/wicys-ctf-03",
      title: "WiCyS CTF: Bunny Network - Portal Override",
    },
    {
      href: "/projects/cybersecurity/wicys-ctf-04",
      title: "WiCyS CTF: Bunny Overflow",
    },
    {
      href: "/projects/cybersecurity/wicys-ctf-05",
      title: "WiCyS CTF: Rainbow Vault Overflow",
    },
    {
      href: "/projects/cybersecurity/wicys-ctf-06",
      title: "WiCyS CTF: ROP Around the Rainbow",
    },
    {
      href: "/projects/cybersecurity/wicys-ctf-07",
      title: "WiCyS CTF: Scavenger Hunt",
    },
    {
      href: "/projects/cybersecurity/wicys-ctf-08",
      title: "WiCyS CTF: Bunny Network API Override",
    },
    {
      href: "/projects/cybersecurity/wicys-ctf-09",
      title: "WiCyS CTF: Leprechauns Vault",
    },
  ],
  "game-dev": [
    { href: "/projects/game-dev/my-first-game", title: "My First Game" },
    { href: "/projects/game-dev/ufo", title: "UFO" },
    { href: "/projects/game-dev/tank-game", title: "Tank Game" },
    { href: "/projects/game-dev/3d-game", title: "3D Game Engine" },
    {
      href: "/projects/game-dev/blackhole-simulator",
      title: "Blackhole Simulator",
    },
  ],
  music: [
    {
      href: "/projects/music/blind-justice-investigation",
      title: "BL1ND JUST1C3: 1NV3ST1G4T1ON",
    },
    { href: "/projects/music/beethoven-virus", title: "Beethoven Virus" },
    {
      href: "/projects/music/the-longest-moment",
      title: "The Longest Moment Before a New Beginning",
    },
  ],
  auto: [
    {
      href: "/projects/auto/tacoma-valve-cover",
      title: "Valve Cover Replacement & Modification (2002 Toyota Tacoma)",
    },
    {
      href: "/projects/auto/transmission-rebuild",
      title: "Manual Transmission Rebuild (1989 Honda Accord)",
    },
  ],
  engineering: [
    {
      href: "/projects/engineering/rc-car",
      title: "Remote Control Car",
    },
  ],
};