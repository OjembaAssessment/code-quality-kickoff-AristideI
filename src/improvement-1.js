/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function countingRobot(list) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === "R") count++;
  }
  return count;
}
