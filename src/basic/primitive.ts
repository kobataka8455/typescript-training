export default function primitiveSample() {
  const name = 'kobataka';
  console.log('primitive smaple 1:', typeof name, name);

  const age = 37;
  console.log('primitive smaple 2:', typeof age, age);

  const isSingle = false;
  console.log('primitive smaple 3:', typeof isSingle, isSingle);

  const isOver20: boolean = age >= 20;
  console.log('primitive smaple 4:', typeof isOver20, isOver20);
}
