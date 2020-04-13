import React, { useState, useEffect } from 'react';
import PlayerList from './player-components/PlayerList';
import ChatContainer from './chat-components/ChatContainer';
import '../../styles/socialmain.css';
import { getPlayerMessages, sendMessage } from '../../api-services/messageAPI';
import { useDispatch } from 'react-redux';
import { joinRoomById, firstSocketLogin, disconnectSocket, socketPostMessage } from '../../redux/actions/socket-actions';
import { getPlayers } from '../../api-services/playersAPI';



const SocialMain = ({ currentUser, socket }) => {
  const dispatch = useDispatch();
  const [chatting, setChatting] = useState();
  const [messages, setMessages] = useState([]);
  const [roomid, setRoomid] = useState('');
  const [secondUser, setSecondUser] = useState({});
  const [players, setPlayers] = useState([]);

  const [loggedInUsers, setLoggedInUsers] = useState([]);

  useEffect(() => {
    if (players) {
      socket.on('updateUsers', data => {
        const newPlayers = players.map(player => {
          setLoggedInUsers([...data]);
          if ([...data].includes(player._id)) {
            return Object.assign(player, { status: 1 });
          } else {
            return Object.assign(player, { status: 0 });
          }
        });
        setPlayers(newPlayers);
      });
    }

    return () => {
      dispatch(disconnectSocket(socket));
    };
  }, [socket, players]);

  useEffect(() => {
    Object.assign(currentUser, { status: 1 });
    getPlayers()
      .then(res => setPlayers(res))
      .then(() => dispatch(firstSocketLogin(currentUser._id, socket)))
      .catch(err => console.log(err));

    return () => socket.emit('logout-user', currentUser._id);
  }, []);

  useEffect(() => {
    if (roomid && secondUser) {
      dispatch(
        joinRoomById(
          currentUser.name,
          roomid,
          currentUser._id,
          socket,
          () => { }
        )
      );
    }
    return () => {
      dispatch(disconnectSocket(socket));
    };
  }, [secondUser, currentUser, roomid, socket, dispatch]);

  useEffect(() => {
    if (roomid && secondUser) {
      socket.on('message', message => {
        setMessages([...messages, message.message]);
      });
    }
    return () => { };
  }, [messages, secondUser, socket, roomid]);

  let chatSessionId = '';

  const handleChatSubmit = message => {
    if (message) {
      sendMessage(
        message,
        secondUser._id,
        currentUser._id,
        currentUser.name
      )
        .then(res => {
          dispatch(socketPostMessage(res, () => { }, socket));
        })
        .catch(err => err);
    }
  };

  const handleShowChat = secondUser => {
    setSecondUser(secondUser);
    setChatting(secondUser);
    setRoomid(secondUser.messages[currentUser._id].roomId);

    getPlayerMessages(currentUser, secondUser)
      .then(res => setMessages(res.messageHistory))
      .catch(err => console.log(err));
  };

  if (players.length) {
    return (
      <div className="social-main__container">
        <PlayerList
          currentUser={currentUser}
          players={players}
          secondUser={secondUser}
          handleShowChat={handleShowChat}
        />
        {chatting && (
          <ChatContainer
            user={currentUser}
            setChatting={setChatting}
            chatSessionId={chatSessionId}
            secondUser={secondUser}
            handleChatSubmit={handleChatSubmit}
            messages={messages}
          />
        )}
      </div>
    );
  } else {
    return <div>LOADING...</div>;
  }
};

export default SocialMain;
