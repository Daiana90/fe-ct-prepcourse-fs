/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   if (x === y) {
      return true;
   } else {
      return false;
   }
}

function tienenMismaLongitud(str1, str2) {
 // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
      if (str1.lenght === str2.lenght) {
      return true ;
      } else {
       return false;
      }
}

function menosQueNoventa(num) {
      if (num<90) {
      return true;
      } else {
      return false;
      }
      }


function mayorQueCincuenta(num) {
   if (num>50) {
      return true;
      } else {
      return false;
      }
      }

function esPar(num) {
   if (num % 2 === 0) {
      return true; 
   } else {
      return false;
   }
}


function esImpar(num) {
   if (num % 2 === 1) {
      return true; 
   } else {
      return false;
   }
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
