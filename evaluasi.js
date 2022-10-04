// // evaluasi mengganti huruf untuk soal Nomor 2
// const changeText = (str) => {
//   // Validasi
//   if (typeof str !== 'string') return 'Input data harus string';

//   let word = '';
//   for (let i = 0; i <= str.length - 1; i++) {
//     if (str[i] == 'a') word += 'o';
//     else word += str[i] + '';
//   }
//   return word;
// };

// console.log(changeText('jakarta'));

// divideAndSort Soal No.4
const divideAndSort = (num) => {
  if (typeof num !== 'number') return 'input harus number';
  if (num === 0) return 'error';

  return parseInt(
    num
      .toString() // mengembalikan string menjadi objek
      .split('0') // memotong array
      .map((e) => e.split('').sort().join('')) //menggabungkan element array menjadi sebuah string
      .join('')
  );
};
console.log(divideAndSort(5956560159466056));
