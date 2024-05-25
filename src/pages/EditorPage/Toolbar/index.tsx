import { UI } from "@/components/common";
import { Icons } from "@/components/icons";
import * as React from "react";
import cx from "classnames";
import "./style.scss";
import { TABS } from "@/CONSTANTS";
import { useText } from "@/hooks";
import { Clipboard } from "@/utils";

interface ToobarProps {}

const Toobar: React.FC<ToobarProps> = () => {
  const { transformedText, transform, setTransformedText } = useText();
  const [activeTab, setActiveTab] = React.useState<CaseType>("DEFAULT");
  const [isCopied, setIsCopied] = React.useState(false);

  const handleTabClick = (tab: CaseType) => {
    setActiveTab(tab);

    switch (tab) {
      case "DEFAULT":
        setTransformedText(transform.getDefaultText());
        break;
      case "UPPER_CASE":
        setTransformedText(transform.toUpperCase());
        break;
      case "LOWER_CASE":
        setTransformedText(transform.toLowerCase());
        break;
      case "TITLE_CASE":
        setTransformedText(transform.toTitleCase());
        break;
      case "SENTENCE_CASE":
        setTransformedText(transform.toSentenceCase());
        break;
      default:
        break;
    }
  };

  const handleCopyTransformedText = () => {
    Clipboard.copy(transformedText);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <div className="toolbar">
        <div className="tabs">
          {TABS.map((tab) => (
            <UI.Box key={tab.value}>
              <button
                onClick={() => {
                  handleTabClick(tab.value);
                }}
                className={cx({
                  tab: true,
                  "tab--active": tab.value === activeTab,
                })}
              >
                {tab.label}
              </button>
            </UI.Box>
          ))}
        </div>

        <div>
          <UI.Button onClick={handleCopyTransformedText}>
            <>
              <Icons.CopyIcon />
              {isCopied ? "Copied!" : "Copy"}
            </>
          </UI.Button>
        </div>
      </div>
    </>
  );
};

export { Toobar };
