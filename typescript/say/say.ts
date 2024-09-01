const belowTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const thousands = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion'];

function chunkToWords(n: number): string {
  if (n === 0) return '';
  if (n < 20) return belowTwenty[n];
  if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 === 0 ? '' : '-' + belowTwenty[n % 10]);
  return belowTwenty[Math.floor(n / 100)] + ' hundred' + (n % 100 === 0 ? '' : ' ' + chunkToWords(n % 100));
}

export function sayInEnglish(num: number): string {
  if (num < 0 || num > 999999999999) throw new Error('Number must be between 0 and 999,999,999,999.');
  if (num === 0) return 'zero';
  let word = '';
  let index = 0;
  while (num > 0) {
      const chunk = num % 1000;
      if (chunk !== 0) {
          word = chunkToWords(chunk) + (thousands[index] === '' ? '' : ' ' + thousands[index]) + (word ? ' ' + word : '');
      }
      num = Math.floor(num / 1000);
      index++;
  }
  return word;
}

console.log(sayInEnglish(64687673654))