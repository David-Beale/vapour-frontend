import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/player-styles/playercard.css';
import chatIcon from '../../../assets/icons/chat-icon.png';
import phoneIcon from '../../../assets/icons/phone-icon.png';
import {handleCreateCall, handleLeave, acceptCall} from '../../rtc-components/RtcMain';


const PlayerCard = ({ player, handleShowChat, handleShowCall, calling, setCalling }) => {
  const status = () => (player.status ? 'online' : 'offline');
  const [connected, setConnected] = useState(false);
  const statusButton = () =>
    player.status ? 'button-enabled' : 'button-disabled';
  return (
    <div className={`player-card__container ${status()}`}>
      <div className="player-card__player-name-container">
        <h4 className="player-card__player-name">{player.name}</h4>
      </div>
      <div className="player-card__buttons-container"> <Link
        className={`player-card__button ${statusButton()}`}
        onClick={e => {
          e.preventDefault();
          player.status > 0 && handleShowChat(player);
        }}
        to={`/messages/?name=${player.name}`}
      >
        <img className="player-card__icon" src={chatIcon} alt="player-thumbnail"></img>
      </Link>
        <div
          className={`player-card__button call`}
          //should create call request ---> user 1 calls user 2
          onClick={e => {
            e.preventDefault();
            setCalling(true);
            handleShowCall(player);
            handleCreateCall(player)
          }}
        >
          <img className="player-card__icon" src={phoneIcon} alt="player-thumbnail" />
        </div>
        {calling &&
          <div
          className="player-card__call-buttons"
          //should have an event listener for incoming calls. 
          >
            <div
              //should accept connection
              onClick={e => { e.preventDefault(); setConnected(true); acceptCall(player) }}
              className={`player-card__button pickup`}>
              pickup
        </div>
            <div
              //should close connection
              onClick={e => { e.preventDefault(); setCalling(false); handleLeave() }}
              className={'player-card__button reject'}>
              reject
        </div>
          </div>
        }
        {connected && <div
          //should close connection
          onClick={e => { e.preventDefault(); setConnected(false); setCalling(false); handleLeave() }
        }
        >end call</div>}
      </div>
    </div>
  );
};

export default PlayerCard;
