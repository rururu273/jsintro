console.log('Hello World!');
console.log(1 + 1); // 2
console.log(1 - 1); // 0
console.log(2 * 2); // 4
console.log(4 / 2); // 2
console.log(5 % 2); // 1
for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  const array = [1, 2, 3, 4, 5];
console.log(array[0]); // 1
console.log(array[1]); // 2
console.log(array[2]); // 3

console.log(array) // [1, 2, 3, 4, 5]


// すべての要素を2倍する
const doubledArray = array.map((value) => {
  return value * 2;
});

console.log(doubledArray); // [2, 4, 6, 8, 10]

const object = {
  name: 'John',
  age: 20,
};

console.log('name' in object); // true

console.log('isMale' in object); // false

// ページの読み込みが完了したときに呼び出される
document.addEventListener('DOMContentLoaded', () => {
  // ボタン要素を取得
  const button = document.getElementById('button');
  // ボタンがクリックされたときにテキストの色を変更する
  button.addEventListener('click', () => {
    const text = document.getElementById('text');
    text.style.color = 'red';
  });
});