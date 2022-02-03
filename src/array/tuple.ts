export default function tupleSample() {
  // 一般的なタプルの型定義
  const response: [number, string] = [200, 'OK'];
  // response = [400, "NG", "hogehoge"];
  // response = ["400", "NG"];
  console.log('Array tuple sample1', response);

  // 可変長引数を使ったタプル
  const girlFriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko'];
  girlFriends.push('Misa');
  console.log('Array tuple sample2', girlFriends);
}
