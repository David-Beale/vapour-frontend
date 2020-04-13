const SERVER = 'https://vapour-backend.herokuapp.com/'

const getPlayers = async () => {
  const response = await fetch(
    //from parameter determined the person who has LOGGED IN, to detetmines to whom the messages will be sent
    SERVER + `users/find-all`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
  .then(res => res.json())
    .catch(err => console.log(err));

  return response;
};

export { getPlayers };
