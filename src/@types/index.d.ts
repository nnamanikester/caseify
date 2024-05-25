type TabType = {
  label: string;
  value: CaseType;
};

type CaseType =
  | "DEFAULT"
  | "LOWER_CASE"
  | "UPPER_CASE"
  | "TITLE_CASE"
  | "SENTENCE_CASE";
