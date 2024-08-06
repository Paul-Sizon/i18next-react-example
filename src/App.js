import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <h1>{t("welcome")}</h1>
        <p>{t("description")}</p>
        <LanguageSelector />
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("Edit src/App.js and save to reload.")}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Learn React")}
        </a>
      </header>
    </div>
  );
}

export default App;
