export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // Ensure that password is always a string
  if (typeof password !== "string") password = String(password);

  // Check if password is one of the forbidden ones
  if (forbiddenPasswords.includes(password)) return false;

  // Check if password is not exactly 10 alphanumeric characters
  if (!/^[a-zA-Z0-9]{10}$/.test(password)) return false;

  // Ensure password has at least one digit, one uppercase letter, and one lowercase letter
  if (
    !/[0-9]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password)
  ) {
    return false;
  }

  // Check for directly ascending/descending sequences
  const sequentialPattern =
    /(?:0123|1234|2345|3456|4567|5678|6789|7890|0987|9876|8765|7654|6543|5432|4321|3210)/;
  if (sequentialPattern.test(password)) return false;

  // Check if password doesn't have at least 4 unique characters
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;

  return true;
}
