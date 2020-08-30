import React from "react";
import { Step } from "../step/Step";
import { useTranslation } from "react-i18next";

export const Info = ({ navigation, onRequestClose }) => {
  const { next } = navigation;
  const { t } = useTranslation();
  return (
    <div className="articles">
      <div className="column is-8 is-offset-2">
        <div className="card article">
          <div className="card-content">
            <div className="level-item">
              <Step title={"1"} icon={"fa fa-info"} active={true} />
              <Step title={"2"} icon={"fa fa-key"} active={false} />
              <Step title={"3"} icon={"fa fa-check"} active={false} />
            </div>
            <div className="media">
              <div className="media-content has-text-centered">
                <p className="title article-title">{t("OPENBANK-ACCOUNT")}</p>
                <div className="tags has-addons level-item">
                  <span className="tag is-rounded is-info">
                    {t("OPENBANK-TW")}
                  </span>
                  <span className="tag is-rounded">{t("GROUP-STN")}</span>
                </div>
              </div>
            </div>
            <div className="content article-body">
              <p>{t("INFO-TEXT-1")} </p>
              <p>{t("INFO-TEXT-2")}</p>
              <h3 className="has-text-centered">{t("INFO-TEXT-3")}</h3>
              <p> {t("INFO-TEXT-4")}</p>
              <div className="field is-grouped">
                <div className="control">
                  <button onClick={onRequestClose} className="button">
                    {t("CANCEL")}
                  </button>
                </div>
                <div className="control">
                  <button className="button is-link" onClick={next}>
                    {t("NEXT")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
