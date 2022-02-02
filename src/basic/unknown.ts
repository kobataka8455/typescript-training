export default function unknownSample() {
  const meybeNumber: unknown = 10;
  console.log('unknown smaple 1:', typeof meybeNumber, meybeNumber);

  const isFoo = meybeNumber === 'foo';
  console.log('unknown smaple 2:', typeof isFoo, isFoo);

  // const sum = meybeNumber + 10;

  if (typeof meybeNumber === 'number') {
    const sum = meybeNumber + 10;
    console.log('unknown smaple 3:', typeof sum, sum);
  }
}
