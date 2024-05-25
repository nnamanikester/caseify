import React from "react";
import { Toobar } from "./Toolbar";
import { TextInput } from "./TextInput";
import { Header } from "./Header";
import { TextProvider } from "@/contexts";

const EditorPage = () => {
  return (
    <TextProvider>
      <main className="app">
        <Header />
        <TextInput />
        <Toobar />
      </main>
    </TextProvider>
  );
};

export { EditorPage };
