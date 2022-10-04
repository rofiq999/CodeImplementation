function palin(value) {
  let result = '';
  for (let i = value.length - 1; i >= 0; i--) {
    result += value[i] + '';
  }
  if (result == value) {
    console.log('adalah palindrom');
  } else {
    console.log('bukan palindrom');
  }
}
palin('malam');
