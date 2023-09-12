// src/components/About.js
import React from "react";
import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();
  return (
    <div style={{ margin: "10%" }}>
      <h1>{t("hello")}</h1>
      <p>{t("data")}</p>
    </div>
  );
}
export default About;
