"use client";

import React from "react";
import SectionLabel from "./SectionLabel";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";

const CodeSnippet = ({ id }: { id: string }) => {
  const snippet = `
      const iframe = document.createElement("iframe");
      
      const iframeStyles = (styleString) => {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
      }
      
      iframeStyles('
          .chat-frame {
              position: fixed;
              bottom: 50px;
              right: 50px;
              border: none;
          }
      ')
      
      iframe.src = "http://localhost:3000/chatbot"
      iframe.classList.add('chat-frame')
      document.body.appendChild(iframe)
      
      window.addEventListener("message", (e) => {
          if(e.origin !== "http://localhost:3000") return null
          let dimensions = JSON.parse(e.data)
          iframe.width = dimensions.width
          iframe.height = dimensions.height
          iframe.contentWindow.postMessage("${id}", "http://localhost:3000/")
      })
          `;
  return (
    <div className="mt-10 flex flex-col items-start gap-5">
      <SectionLabel
        label="Code snippet"
        message="Copy and paste this code snippet into the header tag of your website"
      />
      <div className="relative inline-block rounded-lg bg-muted px-10">
        <Copy
          className="absolute right-5 top-5 cursor-pointer text-gray-400"
          onClick={() => {
            navigator.clipboard.writeText(snippet);
            toast("You can now paste the code inside your website");
          }}
        />
        <pre>
          <code className="text-gray-500">{snippet}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
