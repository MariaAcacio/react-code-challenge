import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Instructions = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("README.md")
      .then((res) => res.text())
      .then((text) => setText(text));
  }, []);

  return (
    <div>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default Instructions;
