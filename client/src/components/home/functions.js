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

export function sortByProp(array, ord) {
  var swap = true;
  while (swap) {
    swap = false;
    if (ord) {
      for (var i = 0; i < array.length - 1; i++) {
        if (array[i][ord] > array[i + 1][ord]) {
          var aux = array[i];
          array[i] = array[i + 1];
          array[i + 1] = aux;
          swap = true;
        }
      }
    }
  }
  return array;
}
