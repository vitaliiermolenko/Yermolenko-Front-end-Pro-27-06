function kod(length, characters) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const key = kod(5, 'abcdefghijklmnopqrstuvwxyz0123456789');
console.log(key); 
