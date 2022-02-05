export default function callbackSample() {
  const url = 'https://api.github.com/users/kobataka8455';

  type Profile = {
    login: string;
    id: number;
  };

  type FetchProfile = () => void;

  // コールバックで呼び出す非同期処理
  const fetchProfile: FetchProfile = () => {
    return fetch(url)
      .then((res) => {
        res
          .json()
          .then((json: Profile) => {
            console.log('AsyncHronous Callback Sample 1:', json);
            return json;
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const profile = fetchProfile();
  console.log('AsyncHronous Callback Sample 2:', profile);
}
