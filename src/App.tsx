import React, { useEffect, useState } from "react";
import CodeInput from "./components/CodeInput";

function App() {
  const [html, setHtml] = useState(localStorage.getItem("codepen-html") || "");
  const [css, setCss] = useState(localStorage.getItem("codepen-css") || "");
  const [js, setJs] = useState(localStorage.getItem("codepen-js") || "");
  const [doc, setDoc] = useState("");

  useEffect(() => {
    const state = `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `;
    console.log(state);
    setDoc(state);
    localStorage.setItem("codepen-html", html);
    localStorage.setItem("codepen-css", css);
    localStorage.setItem("codepen-js", js);
  }, [html, css, js]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row h-1/2 bg-gray-800 w-screen">
        <CodeInput
          displayName="HTML"
          language="html"
          setValue={setHtml}
          defaultVal={html}
        />
        <CodeInput
          displayName="CSS"
          language="css"
          setValue={setCss}
          defaultVal={css}
        />
        <CodeInput
          displayName="JS"
          language="javascript"
          setValue={setJs}
          defaultVal={js}
        />
      </div>
      <div>
        <iframe
          title="Document"
          srcDoc={doc}
          className="w-screen box-border"
          style={{ height: "50vh" }}
        ></iframe>
      </div>
    </div>
  );
}

export default App;
