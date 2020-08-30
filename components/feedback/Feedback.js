import React from "react";
import { Step } from "../step/Step";
import { useTranslation } from "react-i18next";
import "../../App.scss";
export const Feedback = ({ navigation, response }) => {
  const { previous, go } = navigation;
  const { t } = useTranslation();

  return (
    <div className="articles">
      <div className="column is-8 is-offset-2">
        <div className="card article">
          <div className="card-content">
            <div className="level-item">
              <Step title={"1"} icon={"fa fa-info"} active={false} />
              <Step title={"2"} icon={"fa fa-key"} active={false} />
              <Step title={"3"} icon={"fa fa-check"} active={true} />
            </div>
            <div className="media">
              <div className="media-content has-text-centered">
                {response == 200 ? (
                  <div className="content">
                    <span className="icon is-large has-text-success">
                      <i className="fas fa-check-circle fa-2x"></i>
                    </span>
                    <p className="title article-title">
                      {t("CREATE-PWC-SUCCES")}
                    </p>
                  </div>
                ) : (
                  <div className="content">
                    <span className="icon is-large has-text-danger">
                      <i className="fas fa-exclamation-triangle fa-2x"></i>
                    </span>
                    <p className="title article-title">
                      {t("CREATE-PWC-FAIL")}
                    </p>
                  </div>
                )}
                <div className="tags has-addons level-item">
                  <span className="tag is-rounded is-info">
                    {t("OPENBANK-TW")}
                  </span>
                  <span className="tag is-rounded">{t("GROUP-STN")}</span>
                </div>
                <div className="field has-text-centered">
                  {response ? (
                    <div className="control">
                      <a
                        className="link-btns"
                        onClick={() => go("productInfo")}
                      >
                        {t("JOIN")}
                      </a>
                    </div>
                  ) : (
                    <div className="control">
                      <a className="link-btns" onClick={previous}>
                        {t("BACK-AGAIN")}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
