const { EMAIL_REGEX } = require("./constants");

export const validateAuthForm = (type, email, password, fullName) => {
  const isEmailValid = EMAIL_REGEX.test(email);
  const isPasswordValid = password.length >= 6;
  if (!isEmailValid) {
    return { field: "email", msg: "Invalid Email Address" };
  }
  if (!isPasswordValid) {
    return {
      field: "password",
      msg: "Password should be at least 6 characters long",
    };
  }
  if (type === "signup") {
    const isFullNameValid = fullName.length > 0 && fullName.length <= 50;
    if (!isFullNameValid) {
      return { field: "fullName", msg: "Full Name is required" };
    }
  }
  return null;
};
