export default function promiseSample() {
  const url = 'https://api.github.com/users/kobataka8455';

  type Profile = {
    login: string;
    id: number;
  };

  type FetchProfile = () => Promise<Profile | null>;

  // コールバックで呼び出す非同期処理
  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          res
            .json()
            .then((json: Profile) => {
              console.log('AsyncHronous Callback Sample 1:', json);
              resolve(json);
            })
            .catch((error) => {
              console.error(error);
              reject(null);
            });
        })
        .catch((error) => {
          console.error(error);
          reject(null);
        });
    });
  };

  fetchProfile()
    .then((profile: Profile | null) => {
      if (profile) {
        console.log('AsyncHronous Callback Sample 2:', profile);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
