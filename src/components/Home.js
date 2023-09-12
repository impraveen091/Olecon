// src/components/Home.js
import React from "react";
import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation();
  return (
    <div style={{ margin: "10%" }}>
      <h1>{t("welcome")}</h1>
      <p>{t("hello")}</p>
    </div>
  );
}
export default Home;
