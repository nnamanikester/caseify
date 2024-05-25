import { Transform } from "@/utils";
import * as React from "react";

export const TextContext = React.createContext<{
  text: string;
  transformedText: string;
  transform: Transform;
  setText: (text: string) => void;
  setTransformedText: (text: string) => void;
}>({
  text: "",
  transformedText: "",
  transform: new Transform(""),
  setText: (text) => {},
  setTransformedText: (text) => {},
});

export const TextProvider: React.FC<{ children: any }> = (props) => {
  const [text, setText] = React.useState("");
  const [transformedText, setTransformedText] = React.useState("");
  const transform = React.useRef(new Transform("")).current;

  React.useEffect(() => {
    transform.setText(text);
  }, [text]);

  return (
    <TextContext.Provider
      value={{
        text,
        transformedText,
        transform,
        setText,
        setTransformedText,
      }}
    >
      {props.children}
    </TextContext.Provider>
  );
};
