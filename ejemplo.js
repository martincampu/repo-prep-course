function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:
  var contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      return false;
    } else {
      return true;
    }
  }
}

var arrayej = [1, 1, 1, 1, 1, 1];
var arr2 = [2, 2, 2, 3, 2, 2];
console.log(todosIguales(arrayej));
