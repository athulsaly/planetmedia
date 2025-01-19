export const validations = {
  required: {
    message: "Required",
  },

  username: {
    minimum: { characters: 4, message: "Minimum 4 characters required" },
    maximum: { characters: 128, message: "Maximum 128 characters allowed" },
    match: {
      regEx: /^[a-zA-Z0-9]+$/,
      message: "Username can only contain letters, and numbers",
    },
  },

  email: {
    message: "Invalid email address",
  },

  password: {
    minimum: { characters: 8, message: "Minimum 8 characters required" },
    match: {
      regEx: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "At least 1 number and letter required",
    },
    matchError: { message: "Passwords don't match" },
  },

  firstName: {
    minimum: { characters: 1, message: "Minimum 1 characters required" },
    maximum: { characters: 128, message: "Maximum 128 characters allowed" },
    match: {
      regEx: /^[a-zA-Z]+$/,
      message: "First Name can only contain letters",
    },
  },

  lastName: {
    minimum: { characters: 1, message: "Minimum 1 characters required" },
    maximum: { characters: 128, message: "Maximum 128 characters allowed" },
    match: {
      regEx: /^[a-zA-Z]+$/,
      message: "Last Name can only contain letters",
    },
  },
  location: {
    minimum: { characters: 1, message: "Minimum 1 characters required" },
    maximum: { characters: 128, message: "Maximum 128 characters allowed" },
    match: {
      regEx: /^[a-zA-Z]+$/,
      message: "Location can only contain letters",
    },
  },

  phone: {
    minimum: { characters: 2, message: "Minimum 10 characters required" },
    maximum: { characters: 10, message: "Maximum 10 characters allowed" },
  },

  address: {
    minimum: { characters: 2, message: "Minimum 2 characters required" },
    maximum: { characters: 128, message: "Maximum 128 characters allowed" },
  },

  checkbox: {
    message: "Field must be checked",
  },

  advertisement: {
    title: {
      minimum: { characters: 2, message: "Minimum 2 characters required" },
      maximum: { characters: 128, message: "Maximum 128 characters allowed" },
    },
    price: {
      minimum: { characters: 2, message: "Minimum 2 characters required" },
      maximum: { characters: 128, message: "Maximum 128 characters allowed" },
    },
    description: {
      minimum: { characters: 2, message: "Minimum 2 characters required" },
    },
  },
};
