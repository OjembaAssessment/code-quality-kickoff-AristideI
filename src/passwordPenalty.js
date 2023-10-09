/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */

export default function penaltyPoints(password = "") {
  // Ensure that password is always a string
  if (!password) return 0;
  if (typeof password !== "string") password = String(password);

  let points = 0;
  let prevChar = null;
  let seqLength = 0;

  for (let i = 0; i < password.length; i++) {
    const currChar = password[i];
    if (currChar === prevChar) {
      seqLength++;
    } else {
      if (seqLength === 2) {
        points++;
      } else if (seqLength >= 3) {
        points += 2;
      }
      seqLength = 1; // reset the sequence length
    }
    prevChar = currChar;
  }

  return points;
}
