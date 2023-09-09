import { Editor } from "@monaco-editor/react";
import * as monaco from "@monaco-editor/react";
import { useState } from "react";

type Props = {
  displayName: string;
  language: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  defaultVal: string;
};

function CodeInput(props: Props) {
  const { displayName, language, setValue, defaultVal } = props;

  const changeHandle: monaco.OnChange = (value) => {
    if (value !== undefined) setValue(value);
  };

  const minimize = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
      <path d="M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z" />
    </svg>
  );

  const maximize = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
      <path d="M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z" />
    </svg>
  );

  const [status, setStatus] = useState(true);

  const toggleClose = () => {
    const newStatus = !status;
    setStatus(newStatus);
  };

  return (
    <div
      className={
        "p-3 pb-1 rounded-md fill-white text-white bg-black mx-1 my-3 w-28" +
        (status ? " grow" : "")
      }
    >
      <div className="top-part flex justify-between mr-1 ml-4">
        <div>{displayName}</div>
        <button onClick={toggleClose}>{status ? minimize : maximize}</button>
      </div>
      <div className="bot-part h-full">
        <Editor
          height={"90%"}
          defaultLanguage={language}
          theme="vs-dark"
          onChange={changeHandle}
          defaultValue={defaultVal}
        />
      </div>
    </div>
  );
}

export default CodeInput;
