import { UI } from "@/components/common";
import * as React from "react";
import cx from "classnames";
import "./style.scss";
import { useText } from "@/hooks";
import { Clipboard } from "@/utils";

interface TextInputProps {}

const TextInput: React.FC<TextInputProps> = () => {
  const { text, transformedText, setText } = useText();

  const handleChange =
    (setState: (text: string) => void) =>
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setState(e.target.value);
    };

  const handlePaste = async () => {
    const clipText = await Clipboard.getText();
    setText(clipText);
  };

  return (
    <UI.Box className="textinput">
      <textarea
        className={cx({ textinput_input: true })}
        placeholder="Input text..."
        onChange={handleChange(setText)}
        value={transformedText || text}
      ></textarea>

      {!text && (
        <UI.Box className="paste-box">
          <UI.Button text="Paste text" outline onClick={handlePaste} />
        </UI.Box>
      )}
    </UI.Box>
  );
};

export { TextInput };
