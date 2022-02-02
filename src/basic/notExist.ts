export default function notExitstSample() {
  let name = null;
  console.log('notExist smaple 1:', typeof name, name);

  name = 'kobataka';
  if (!name) {
    console.log('notExist smaple 2:', '吾輩は猫である。名前はまだ' + name);
  } else {
    console.log('notExist smaple 3:', '吾輩は猫である。名前は' + name);
  }

  let age = undefined;
  console.log('notExist smaple 4:', typeof age, age);

  age = '37';
  if (!age) {
    console.log('notExist smaple 5:', '年齢は秘密です');
  } else {
    console.log('notExist smaple 6:', '年齢は' + age + 'です');
  }
}
