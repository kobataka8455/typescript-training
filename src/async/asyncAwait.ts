export default async function asyncAwaitSample() {
  const url = 'https://api.github.com/users/kobataka8455';

  type Profile = {
    login: string;
    id: number;
  };

  type FetchProfile = () => Promise<Profile | null>;

  const fetchProfile: FetchProfile = async () => {
    const responce = await fetch(url)
      .then((res) => res)
      .catch((error) => {
        console.error(error);
        return null;
      });

    if (!responce) {
      return null;
    }

    const json = await responce
      .json()
      .then((json: Profile) => {
        console.log('AsyncHronous async/await Sample 1:', json);
        return json;
      })
      .catch((error) => {
        console.error(error);
        return null;
      });

    if (!json) {
      return null;
    }

    return json;
  };

  const profile = await fetchProfile();
  if (profile) {
    console.log('AsyncHronous async/await Sample 2:', profile);
  }
}
