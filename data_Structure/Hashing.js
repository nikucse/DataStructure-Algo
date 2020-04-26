// Basic Hash function works only String

function hash(key, length) {
  let total = 0;

  for (const char of key) {
    let value = char.charCodeAt(0) - 96;

    total = (total + value) % length;
  }
  console.log(total);
}

hash("pink", 10);
hash("purple", 10);
hash("cyan", 10);
