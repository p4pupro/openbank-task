import React, { useState, useEffect } from "react";
import { ItemForm } from "../item/ItemForm";
import { Step } from "../step/Step";
import { useTranslation } from "react-i18next";
import { submitForm } from "../../services/api";
import {
  inputPasswordValidation,
  tipValidation,
} from "../../utils/validations";

export const CreatePassword = ({
  setForm,
  formData,
  navigation,
  setResponse,
}) => {
  const { t } = useTranslation();
  const { previous, go } = navigation;

  const [disable, setDisable] = useState(true);
  const [error, setError] = useState(false);
  const { password, confirmPassword, rememberPassword } = formData;

  useEffect(() => {
    if (password !== "" && confirmPassword !== "") {
      setDisable(false);
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    if (password === confirmPassword) {
      setError(false);
    }
  }, [password, confirmPassword]);

  const passwordsMatch = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setError(false);
      try {
        const res = await submitForm(
          password,
          confirmPassword,
          rememberPassword
        );

        const { status } = res;
        setResponse(status);
        go("feedback");
      } catch (error) {
        const { status } = error;
        setResponse(status);
        go("feedback");
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="articles">
      <div className="column is-8 is-offset-2">
        <div className="card article">
          <div className="card-content">
            <div className="level-item">
              <Step title={"1"} icon={"fa fa-info"} active={false} />
              <Step title={"2"} icon={"fa fa-key"} active={true} />
              <Step title={"3"} icon={"fa fa-check"} active={false} />
            </div>
            <div className="media">
              <div className="media-content has-text-centered">
                <p className="title article-title">{t("CREATE-PWC")}</p>
                <div className="tags has-addons level-item">
                  <span className="tag is-rounded is-info">
                    {t("OPENBANK-TW")}
                  </span>
                  <span className="tag is-rounded">{t("GROUP-STN")}</span>
                </div>
              </div>
            </div>
            <div className="form">
              <form onSubmit={() => passwordsMatch()}>
                {error ? (
                  <span className="tag is-danger">{t("SAME-PWC")}</span>
                ) : null}
                <ItemForm
                  type="password"
                  label={t("CREATE-PWC")}
                  name="password"
                  value={password}
                  validation={inputPasswordValidation}
                  onChange={setForm}
                />

                <ItemForm
                  type="password"
                  label={t("REPEAT-PWC")}
                  name="confirmPassword"
                  value={confirmPassword}
                  validation={inputPasswordValidation}
                  onChange={setForm}
                />

                <h3 className="has-text-centered">{t("CREATE-TEXT-1")}</h3>

                <ItemForm
                  label={t("TIP-PWC")}
                  name="rememberPassword"
                  value={rememberPassword}
                  validation={tipValidation}
                  onChange={setForm}
                />
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button" onClick={previous}>
                      {t("BACK")}
                    </button>
                  </div>
                  <div className="control">
                    <button
                      className="button is-link"
                      disabled={disable}
                      onClick={passwordsMatch}
                    >
                      {t("SUBMMIT")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
