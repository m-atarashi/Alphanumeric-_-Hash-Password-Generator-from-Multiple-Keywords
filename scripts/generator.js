
const DIGIT = 16;

function calcHash(e) {
  const keywords = e.target.value.split('\n');
  input = keywords.sort().join('\n')
  const hash = new jsSHA('SHAKE256', 'TEXT');
  hash.update(input);
  return hash.getHash('HEX', { outputLen: 6*DIGIT });
}

// Hex to base64
// 1. Split hex by 2 digits (= 1 byte)
// 2. Convert 2 digits hex to decimal ASCII code ([0, 256))
// 3. Decode ASCII to char
// 4. Encode ASCII string to Base64
// 5. Replace '+' and '/' to '-' and '_' respectively
function convertRadix(hex) {
  return btoa(hex.match(/.{2}/g).map(e => String.fromCharCode(parseInt(e, 16))).join(''))
        .replaceAll('+', '-')
        .replaceAll('/', '_');
}

function generate(e) {
  const log = document.getElementById('values');
  log.textContent = convertRadix(calcHash(e));
}