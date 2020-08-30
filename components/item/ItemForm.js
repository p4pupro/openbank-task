import React, { useState, useEffect } from "react";
import { hasUpperCase, hasNumber } from "../../utils/validations";

export const ItemForm = ({
  label,
  children,
  type = "text",
  validation,
  ...otherProps
}) => {
  const { max, min, required } = validation;
  const { value } = otherProps;
  const [passError, setPassError] = useState(false);
  const [tipError, setTipError] = useState(false);

  useEffect(() => {
    validatePassword();
    validateTip();
  }, [value]);

  const validatePassword = () => {
    if (type === "password" && value) {
      if (hasUpperCase(value) && hasNumber(value)) {
        setPassError(false);
      } else {
        setPassError(true);
      }
      if (value.length >= min && value.length <= max) {
        setPassError(false);
      } else {
        setPassError(true);
      }
    }
  };

  const validateTip = () => {
    if (type === "text" && value) {
      if (value.length <= max) {
        setTipError(false);
      } else {
        setTipError(true);
      }
    }
  };

  return (
    <div className="field">
      {type === "text" ? (
        <>
          <label className="label">{label}</label>
          <div className="control has-icons-right">
            <input
              className="input"
              max={max}
              autoComplete="false"
              type={type}
              {...otherProps}
            />
            <span className="icon is-right">
              <i className="fas fa-exclamation"></i>
            </span>
            {tipError ? (
              <div className="column is-12">
                <span className="tag is-danger">
                  La Pista debe tener máximo 255 caracteres.
                </span>
              </div>
            ) : null}
          </div>
        </>
      ) : type === "password" ? (
        <div className="field">
          <label className="label">{label}</label>
          <div className="control has-icons-right">
            <input
              className="input"
              autoComplete="false"
              required={required}
              min={min}
              max={max}
              type={type}
              {...otherProps}
            />
            <span className="icon is-right">
              <i className="fas fa-eye"></i>
            </span>
          </div>
          {passError ? (
            <div className="column">
              <p className="help is-danger">
                La contraseña deben tener al menos 8 caracteres.
              </p>

              <p className="help is-danger">
                La contraseña deben tener menos de 24 caracteres.
              </p>

              <p className="help is-danger">
                La contraseña deben tener al menos un número.
              </p>

              <p className="help is-danger">
                La contraseña debentener al menos una mayúscula.
              </p>
            </div>
          ) : null}
        </div>
      ) : (
        <>
          <label className="label">
            <input
              required
              min={min}
              max={max}
              type={type}
              autoComplete="true"
              {...otherProps}
            />
            {label}
          </label>
        </>
      )}
    </div>
  );
};
