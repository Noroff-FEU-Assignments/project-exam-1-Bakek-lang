export function isInteger(number) {
  if (Number.isInteger(number)) {
    number = number.toFixed(0);
  } else {
    number = number.toFixed(1);
  }
  return number;
}
