export type WicysChallenge = {
  slug: string;
  title: string;
  subtitle: string;
  description: string[];
  topic: string;
  difficulty: string;
  points: number;
  flagFormat: string;
  expectedFlag: string;
  downloadFiles?: Array<{
    href: string;
    filename: string;
    label: string;
  }>;
  solutionSteps: string[];
};

const WICYS_CTF_DOWNLOADS_ROOT = "/downloads/wicys-ctf/challenges";

function getWicysChallengeDownloadPath(
  challengeId: string,
  filename: string,
) {
  return `${WICYS_CTF_DOWNLOADS_ROOT}/${challengeId}/${filename}`;
}

export const wicysChallenges: Record<string, WicysChallenge> = {
  "01": {
    slug: "wicys-ctf-01",
    title: "WICYS CTF: Bunny Tracker Glitch 🟩",
    subtitle: "A forensic challenge centered on a suspicious image artifact.",
    description: [
      "The Easter Bunny's tracker sent a single green pixel, but the file clearly has more going on than a normal 1x1 image should.",
      "Heap MacCipher insists the file is just a harmless glitch, but the artifact feels staged. The task is to inspect the image carefully and determine what was hidden inside it.",
    ],
    topic: "PNG Forensics with binwalk",
    difficulty: "Easy",
    points: 300,
    flagFormat: "WICYS{...}",
    expectedFlag: "WICYS{byt3s_b3hind_th3_bunnies}",
    downloadFiles: [
      {
        href: getWicysChallengeDownloadPath("01", "glitch.png"),
        filename: "glitch.png",
        label: "Download Challenge File",
      },
    ],
    solutionSteps: [
      "Inspect the file with `file glitch.png`, `ls -lh glitch.png`, and `hexdump -C glitch.png` to confirm it is more than a normal tiny PNG.",
      "Run `binwalk glitch.png` to detect embedded data appended to the image.",
      "Extract the embedded content with `binwalk -e glitch.png`.",
      "Change into the extracted directory with `cd _glitch.png.extracted/` and read `distress_signal.txt`.",
      "The recovered flag is `WICYS{byt3s_b3hind_th3_bunnies}`.",
    ],
  },
  "02": {
    slug: "wicys-ctf-02",
    title: "WICYS CTF: Luck Checker 🍀",
    subtitle: "A beginner-friendly reversing challenge focused on a suspicious validator binary.",
    description: [
      "Heap MacCipher claims the luck engine validation code is impossible to guess, but the validator feels far less mysterious than he wants it to appear.",
      "The challenge is to inspect the binary, understand what it is checking for, and recover the true luck validation code.",
    ],
    topic: "Binary strings analysis",
    difficulty: "Easy",
    points: 300,
    flagFormat: "WICYS{...}",
    expectedFlag: "WICYS{H34p_M4cCiph3r_H4ck5_Th3_Pr0b4b1l1ty}",
    downloadFiles: [
      {
        href: getWicysChallengeDownloadPath("02", "luck_checker"),
        filename: "luck_checker",
        label: "Download Challenge File",
      },
    ],
    solutionSteps: [
      "Run `strings luck_checker` to list printable strings inside the binary.",
      "Search the output manually for the flag, or filter directly with `strings luck_checker | grep WICYS`.",
      "The exposed flag in the binary is `WICYS{H34p_M4cCiph3r_H4ck5_Th3_Pr0b4b1l1ty}`.",
    ],
  },
  "03": {
    slug: "wicys-ctf-03",
    title: "WICYS CTF: Bunny Network - Portal Override 🐇🌐",
    subtitle: "A reversing challenge built around an emergency portal override binary.",
    description: [
      "The Bunny Network's routing portal has been locked down, and the emergency override binary named portal is the last path back in.",
      "The program refuses to restore the routing tables without the correct override key. The objective is to analyze how it validates input and break through the lockout.",
    ],
    topic: "Binary reversing with objdump and gdb",
    difficulty: "Medium",
    points: 500,
    flagFormat: "WICYS{...}",
    expectedFlag: "WICYS{m4c_c1ph3r_c4nt_h1d3_fr0m_gd6}",
    downloadFiles: [
      {
        href: getWicysChallengeDownloadPath("03", "portal"),
        filename: "portal",
        label: "Download Challenge File",
      },
    ],
    solutionSteps: [
      "If the binary is not already executable, run `chmod +x ./portal` before trying to execute it.",
      "Disassemble the binary with `objdump -d ./portal` and list named functions with `objdump -d ./portal | grep '<.*>:'`.",
      "Open the binary in `gdb ./portal` and set a breakpoint on `validate_key`.",
      "Run the program, enter any input, then inspect the local variables with `info locals`, step with `next`, and print the expected value with `print expected`.",
      "The recovered override key is `H34P_M4CC1PH3R_BYS74ND3R`.",
      "Run `./portal` again, enter that key when prompted, and receive the flag `WICYS{m4c_c1ph3r_c4nt_h1d3_fr0m_gd6}`.",
    ],
  },
  "04": {
    slug: "wicys-ctf-04",
    title: "WICYS CTF: Bunny Overflow 🐇",
    subtitle: "A classic binary exploitation challenge with a vulnerable authorization path.",
    description: [
      "Heap MacCipher removed the bounds checking on the Bunny Network Security Gateway and left the authorization path dangerously exposed.",
      "The objective is to study the binary, understand how input is handled, and force execution into the success path.",
    ],
    topic: "Stack buffer overflow",
    difficulty: "Easy",
    points: 300,
    flagFormat: "WICYS{...}",
    expectedFlag: "WICYS{buffer_overflows_are_egg-cellent}",
    solutionSteps: [
      "Read `challenge.c` to confirm the vulnerable input handling and inspect protections with `checksec --file=./challenge`.",
      "Connect to the service with `nc 172.237.155.118 1337` or test the local binary and send repeated `A` characters to identify where the crash occurs.",
      "Determine that the offset to the saved return address is 40 bytes.",
      "Use `nm` or `objdump` to find the address of the `win()` function.",
      "Build an exploit payload such as `b'A' * 40 + p64(0x401216)` and send it to the process.",
      "Triggering the overwrite redirects execution into `win()` and reveals the flag `WICYS{buffer_overflows_are_egg-cellent}`.",
    ],
  },
  "05": {
    slug: "wicys-ctf-05",
    title: "WICYS CTF: Rainbow Vault Overflow 🌈🔒",
    subtitle: "A heap-focused exploitation challenge hidden inside the Rainbow Vault portal.",
    description: [
      "The Rainbow Vault portal looks simple on the surface, but its internal memory layout tells a different story.",
      "The challenge is to analyze how the program allocates and uses heap memory, then exploit the flaw to unlock the vault.",
    ],
    topic: "Heap overflow and function pointer overwrite",
    difficulty: "Medium",
    points: 500,
    flagFormat: "WICYS{...}",
    expectedFlag: "WICYS{luck_is_just_unprotected_heap}",
    solutionSteps: [
      "Open the binary in `gdb ./rainbow_vault`, list functions with `info functions`, and disassemble `main`.",
      "Identify that the program allocates 32 bytes for the access code buffer and 8 bytes for a second heap object holding a function pointer.",
      "Observe that `read()` accepts 128 bytes into the 32-byte heap buffer, creating a heap overflow primitive.",
      "Calculate the overwrite distance as 48 bytes: 32 bytes of user data plus 16 bytes of heap metadata before the next chunk's data.",
      "Find the address of `unlock_vault` and craft a payload like `b'A' * 32 + b'B' * 16 + p64(0x401256)`.",
      "Send the payload to overwrite the function pointer and force the program down the success path, yielding `WICYS{luck_is_just_unprotected_heap}`.",
    ],
  },
  "06": {
    slug: "wicys-ctf-06",
    title: "WICYS CTF: ROP Around the Rainbow 🌈🐇",
    subtitle: "An advanced binary exploitation challenge built around precise control-flow hijacking.",
    description: [
      "A vulnerable return path in the Rainbow Bridge control system allows execution to be steered in small, deliberate steps.",
      "The objective is to chain those steps together, bypass the program's constraints, and reach the hidden command channel at the Rainbow Vault.",
    ],
    topic: "ROP chain with libc leak",
    difficulty: "Hard",
    points: 1000,
    flagFormat: "WICYS{...}",
    expectedFlag: "WICYS{r0p_sh3ll_th3_r4inb0w_br1dg3}",
    solutionSteps: [
      "Check the binary protections with `checksec --file=./challenge` and enumerate gadgets with `ROPgadget --binary ./challenge`.",
      "Locate a `pop rdi ; ret` gadget, along with `puts@plt`, `puts@got`, `main`, and a standalone `ret` gadget for stack alignment.",
      "Use a cyclic pattern in gdb to determine the overflow offset, then recover the crashing sequence and compute the offset as 56 bytes.",
      "Build a first-stage ROP chain that calls `puts(puts@got)` and returns to `main` so you can leak the runtime address of `puts`.",
      "Subtract the known `puts` offset from the leaked address to calculate the libc base, then resolve `system` and the `/bin/sh` string inside libc.",
      "Send a second-stage payload using `ret`, `pop rdi ; ret`, the `/bin/sh` pointer, and `system` to gain a shell.",
      "Run `cat flag.txt` from the shell to retrieve `WICYS{r0p_sh3ll_th3_r4inb0w_br1dg3}`.",
    ],
  },
  "07": {
    slug: "wicys-ctf-07",
    title: "WICYS CTF: Scavenger Hunt 🔎🥚",
    subtitle: "A web challenge that rewards careful inspection of the client-side application.",
    description: [
      "The Spring Incident Response Team recovered Heap MacCipher's control console, but the front-end itself is where the real clues were left behind.",
      "The page appears locked down, but MacCipher's habit of leaving notes in odd places may be enough to bypass his probability shields.",
    ],
    topic: "Client-side source inspection",
    difficulty: "Easy",
    points: 300,
    flagFormat: "WICYS{...}",
    expectedFlag: "WICYS{h1dd3n_1n_p141n_s1ght}",
    solutionSteps: [
      "Open the challenge page in a browser and inspect the HTML source with Developer Tools or View Source.",
      "Find the HTML comment containing the first part of the flag: `WICYS{h1dd3n_1n_`.",
      "Open `style.css` through the Sources or Network panel and recover the second fragment: `p141n_`.",
      "Open `script.js` and recover the final fragment: `s1ght}`.",
      "Combine the three pieces to form the full flag `WICYS{h1dd3n_1n_p141n_s1ght}`.",
    ],
  },
  "08": {
    slug: "wicys-ctf-08",
    title: "WICYS CTF: Bunny Network API Override 🐇🌐",
    subtitle: "A web challenge involving a hidden override path in the Bunny Network API.",
    description: [
      "The Bunny Network API has been hijacked, and the rendered page only shows part of what the service is actually sending back to clients.",
      "Somewhere in the request and response flow is an emergency override that Heap MacCipher failed to remove. The task is to find it and recover the confirmation token.",
    ],
    topic: "HTTP response header inspection",
    difficulty: "Easy",
    points: 300,
    flagFormat: "WICYS{...}",
    expectedFlag: "WICYS{h34d3r_h1dd3n_lck_byp4ss}",
    solutionSteps: [
      "Inspect the challenge page source and find the hidden developer note describing the `luck_override=true` parameter.",
      "Append `/?luck_override=true` to the challenge URL and confirm the page accepts the override.",
      "Because the flag is not rendered in the body, request the page manually with `curl -i http://172.234.204.220:5001/?luck_override=true`.",
      "Review the full HTTP response headers and recover the flag `WICYS{h34d3r_h1dd3n_lck_byp4ss}`.",
    ],
  },
  "09": {
    slug: "wicys-ctf-09",
    title: "WICYS CTF: Leprechauns Vault 🍀🔒",
    subtitle: "A web challenge centered on a suspicious login flow and a careless hidden backdoor.",
    description: [
      "A secret portal at the end of the rainbow exposes a login form and a known employee email, but brute force is not the intended path.",
      "The real weakness is buried in the client-side application and the developer notes it exposes. The task is to uncover that weakness and use it to access the vault.",
    ],
    topic: "Hidden header auth bypass",
    difficulty: "Medium",
    points: 500,
    flagFormat: "WICYS{...}",
    expectedFlag: "WICYS{p0t_0f_g0ld_4cquir3d_m8}",
    solutionSteps: [
      "Inspect the page and locate the base64-encoded developer note embedded in the source.",
      "Decode it to recover the backdoor instruction: send the header `X-Leprechaun-Token: lucky-charm`.",
      "Review the page JavaScript to see how `/login` is called and note that the app sends a JSON POST request.",
      "Use the known employee email `shamrock@leprechaun-vault.net` and recreate the request with curl, including the extra header and a JSON body.",
      "Submitting that request bypasses auth and returns `{\"flag\":\"WICYS{p0t_0f_g0ld_4cquir3d_m8}\",\"success\":true}`.",
    ],
  },
};
