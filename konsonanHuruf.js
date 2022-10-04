const konsonan = (huruf, value, konsonan) => {
  let Newvokal = '';
  let word;
  for (let i = 0; i <= huruf.length - 1; i++) {
    word = huruf[i];
    if (word === value) {
      word = konsonan;
    }
    Newvokal += word;
  }
  return Newvokal;
};

const result = konsonan('jakarta', 'a', 'o');
console.log(result);
