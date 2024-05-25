import { UI } from "@/components/common";
import * as React from "react";
import "./style.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <UI.Box className="header">
      <h1>Caseify</h1>
    </UI.Box>
  );
};

export { Header };
