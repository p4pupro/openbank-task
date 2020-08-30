import React, { useState } from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Info } from "../info/Info";
import { CreatePassword } from "../create/CreatePassword";
import { Feedback } from "../feedback/Feedback";

const steps = [
  { id: "productInfo" },
  { id: "createPassword" },
  { id: "feedback" },
];

const defaultData = {
  password: "",
  confirmPassword: "",
  rememberPassword: "",
};
export const ModalWizard = ({ onRequestClose }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  const [response, setResponse] = useState(401);

  const props = {
    formData,
    setForm,
    navigation,
    onRequestClose,
    response,
    setResponse,
  };

  switch (id) {
    case "productInfo":
      return <Info {...props} />;
    case "createPassword":
      return <CreatePassword {...props} />;
    case "feedback":
      return <Feedback {...props} />;
    default:
      return null;
  }
};
