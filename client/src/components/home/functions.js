export function capitalize(string) {
  if (string.indexOf("(") !== -1) {
    string = string.split("(")[0];
  }
  let capitalized = string.split(" ");
  return capitalized
    .map((el) => {
      var first = el.slice(0, 1).toUpperCase();
      var rest = el.slice(1);
      return first + rest;
    })
    .join(" ");
}
