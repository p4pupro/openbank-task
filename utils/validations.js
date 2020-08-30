export const hasUpperCase = (str) => {
  return /[A-Z]/.test(str);
};

export const hasNumber = (str) => {
  return /[0-9]/.test(str);
};

export const inputPasswordValidation = {
  required: true,
  min: 8,
  max: 24,
};
export const tipValidation = {
  max: 255,
};
