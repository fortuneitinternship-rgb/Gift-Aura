export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validatePhone = (phone) => {
  return /^[0-9]{10}$/.test(phone.replace(/\D/g, ''));
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validatePincode = (pincode) => {
  return /^[0-9]{6}$/.test(pincode);
};