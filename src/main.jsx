import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./components/Form/Form";
import LanguageProvider from "./components/lang/Lang";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <Form />
  </LanguageProvider>
);