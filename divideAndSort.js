const divideAndSort = (num) => {
  if (typeof num !== 'number') return 'input harus number';
  if (num === 0) return '';

  return num
    .toString()
    .split('0')
    .map((e) => e.split('').sort().join(''))
    .join('');
};
console.log(divideAndSort(5956560159466056));
