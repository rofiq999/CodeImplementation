// evaluasi mengganti huruf untuk soal Nomor 2
const changeText = (str) => {
  // Validasi
  if (typeof str !== 'string') return 'Input data harus string';

  let word = '';
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] == 'a') word += 'o';
    else word += str[i] + '';
  }
  return word;
};

console.log(changeText('jakarta'));

// FazzFood Soal No.3
const FazzFood = (price, kupon, distance, tax) => {
  if (typeof price !== 'number') return 'Input price number';
  if (typeof kupon !== 'string' && kupon !== null) return 'Input kupon string';
  if (typeof distance !== 'number') return 'Input distance number';
  if (typeof tax !== 'boolean') return 'Input Tax boolean';

  const pemilihankupon = diskon(price, kupon);

  //ongkir
  let ongkir;
  if (distance <= 0) return 'jarak harus lebih dari 0 km';
  if (distance < 2) {
    ongkir = 5000;
  } else {
    ongkir = (distance - 2) * 3000 + 5000;
  }

  // tax (pajak)
  let resultTax;
  if (tax) {
    resultTax = price * 0.05;
  } else {
    resultTax = 0;
  }
  let SubTotal = price - pemilihankupon + ongkir + resultTax;
  console.log(`Harga : ${price}`);
  console.log(`Potongan : ${pemilihankupon}`);
  console.log(`Biaya Antar : ${ongkir}`);
  console.log(`Pajak : ${resultTax}`);
  console.log(`SubTotal ${SubTotal}`);
};
//Voucher diskon & price
const diskon = (price, kupon) => {
  let harga_potong = 0;
  if (kupon !== '') {
    if (kupon == 'FAZZFOOD50') {
      if (price < 50000) return 'Kupon tidak dapat digunakan pembayaran kurang dari 50 RB';
      harga_potong = price * 0.5;
      if (harga_potong <= 50000) return harga_potong;
      return 50000;
    }
    if (kupon == 'DITRAKTIR60') {
      if (price < 25000) return 'Kupon tidak dapat digunakan pembayaran kurang dari 25 RB';
      harga_potong = price * 0.6;
      if (harga_potong <= 30000) return harga_potong;
      return 30000;
    }
  }
  return (harga_potong = 0);
};

FazzFood(75000, 'FAZZFOOD50', 5, true);

// divideAndSort Soal No.4
const divideAndSort = (num) => {
  if (typeof num !== 'number') return 'input harus number';
  if (num === 0) return 'error';

  return num
    .toString() // mengembalikan string menjadi objek
    .split('0') // memotong array
    .map((e) =>
      e
        .split('')
        .sort((a, b) => a - b)
        .join('')
    ) //menggabungkan element array menjadi sebuah string
    .join('');
};
console.log(divideAndSort(5956560159466056));
