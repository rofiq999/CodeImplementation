const FazzFood = (price, kupon, distance, tax) => {
  //   if (typeof price !== 'number') return 'Input price number';
  //   if (typeof kupon !== 'string') return 'Input kupon string';
  //   if (typeof distance !== 'number') return 'Input distance number';
  // if (typeof tax !== "boolean") return console.log('Input Tax boolean');

  const pemilihankupon = diskon(price, kupon);

  //ongkir
  let ongkir;
  if (distance <= 0) return 'kupon tidak dapat digunakan pembayaran kurang dari 25rb';
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

  console.log(`Harga : ${price}`);
  console.log(`Potongan : ${pemilihankupon}`);
  console.log(`Biaya Antar : ${ongkir}`);
  console.log(`Pajak : ${resultTax}`);
  console.log(`SubTotal : ${price - pemilihankupon + ongkir + resultTax}`);
};

//Voucher diskon & price
diskon = (price, kupon) => {
  let harga_potong;
  if (kupon !== '') {
    if (kupon == 'FAZZFOOD50') {
      if (price < 50000) return 'Kupon tidak dapat digunakan pembayaran kurang dari 50 RB';
      harga_potong = price * 0.5;
      if (harga_potong < 50000) return harga_potong;
      return 50000;
    }
    if (kupon == 'DITRAKTIR60') {
      if (price < 25000) return 'Kupon tidak dapat digunakan pembayaran kurang dari 50 RB';
      harga_potong = price * 0.6;
      if (harga_potong < 30000) return harga_potong;
      return 30000;
    }
  }

  return (price = 0);
};
// console.log(FazzFood(75000, 'FAZZFOOD50', 5, false));
FazzFood(75000, 'FAZZFOOD50', 5, true);
