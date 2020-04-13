const ENDPOINT = "http://localhost:4000/";

const sendMessage = async (newMessage, recipientId, senderId, senderName) => {

  const message = { message: newMessage, time: Date.now() };
  const response = await fetch(ENDPOINT + "messages", {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message, recipientId, senderId, senderName })
  });
  return response.json();
};

const getPlayerMessages = async (sender, recipient) => {
  const response = await fetch(
    //from parameter determined the person who has LOGGED IN, to detetmines to whom the messages will be sent
    ENDPOINT + `users/find/?from=${sender._id}&to=${recipient._id}`
  )
    .then(res => res.json())
    .catch(err => err);
  return response;
};

export { getPlayerMessages, sendMessage };
