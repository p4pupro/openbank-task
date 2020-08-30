import React, { useState } from "react";
import OpenbankLogo from "../../assets/img/key_openbank.png";
import LogoOpenBank from "../../assets/img/logo_openbank.png";
import { ModalWizard } from "../../components/modal/ModalWizard";
import { useTranslation } from "react-i18next";

export const RecoveryPwc = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return isModalOpen ? (
    <ModalWizard onRequestClose={toggleModal} />
  ) : (
    <div className="container is-fluid">
      <div>
        <img
          src={OpenbankLogo}
          className="App-header-logo"
          alt={"openbank-logo"}
        />
        <h1>
          {t("WELCOME")}
          <strong>{t("MANAGER-PWC")}</strong>
        </h1>

        <a className="" onClick={() => changeLanguage()}>
          <span className="icon lang-color">
            <i className="fas fa-flag"></i>
            {i18n.language === "en" ? <p>ES</p> : <p>EN</p>}
          </span>
        </a>
      </div>

      <hr />
      <section className="section ">
        <div className="container">
          <h1 className="title">{t("MANAGER-PWC")}</h1>
          <h2 className="subtitle">
            {t("SUBTITLE")}{" "}
            <strong>
              <a onClick={toggleModal}>{t("CLICK-HERE")}</a>
            </strong>
            {t("START-PROCCESS")}
          </h2>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Openbank task</strong> by{" "}
            <a href="https://github.com/p4pupro">Domingo Pérez</a>
          </p>
          <img
            src={LogoOpenBank}
            className="App-header-logo"
            alt={"openbank-logo"}
          />
        </div>
      </footer>
    </div>
  );
};
