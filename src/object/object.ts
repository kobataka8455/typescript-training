export default function objectSample() {
  const a: object = {
    name: 'hogehoge',
    age: 37,
  };
  // a.name

  let contry: {
    language: string;
    name: string;
  } = {
    language: 'Japanese',
    name: 'Japan',
  };
  console.log('Object sample 1:', contry);

  contry = {
    language: 'English',
    name: 'United states of America',
  };
  console.log('Object sample 2:', contry);

  // オプショナルとreadonly
  const kobataka: {
    age: number;
    lastName: string;
    readonly firstName: string;
    gender?: string;
  } = {
    age: 37,
    lastName: 'takahiro',
    firstName: 'kobayashi',
    // gender?: string
  };

  kobataka.gender = 'male';
  kobataka.lastName = 'kokaji';
  // kobataka.firstName = "hogehoge";

  console.log('Object sample 3:', kobataka);

  // インデックスシグネチャ
  const capitals: {
    [contryName: string]: string;
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  };

  capitals.Chine = 'Beijing';
  capitals.Canada = 'Ottawa';

  console.log('Object sample 4:', capitals);
}
