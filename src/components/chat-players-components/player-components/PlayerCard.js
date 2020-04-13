import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/player-styles/playercard.css";
import chatIcon from "../../../assets/icons/chat-icon.png";
import placeHolderAvatar from "../../../assets/images/placeholder-avatar.svg";

const PlayerCard = ({
  player,
  handleShowChat,
  secondUser
}) => {
  const status = () => (player.status ? "online" : "offline");

  const statusButton = () =>
    player.status ? "button-enabled" : "button-disabled";
  return (
    <div className={`player-card__container ${status()}`}>
      <img
        className="player-card__avatar"
        src={player.avatar ? player.avatar : placeHolderAvatar}
        alt={player.name.charAt(0)}
      />
      <div className="player-card__player-name-container">
        <p className="player-card__player-name">{player.name}</p>
      </div>
      <div className="player-card__buttons-container">
        {" "}
        <Link
          className={`player-card__button ${statusButton()}`}
          onClick={e => {
            e.preventDefault();
            player.status > 0 && handleShowChat(player);
          }}
          to={`/messages/?name=${player.name}`}
        >
          <img
            className="player-card__icon"
            src={chatIcon}
            alt="player-thumbnail"
          ></img>
        </Link>
       
      </div>
    </div>
  );
};

export default PlayerCard;
