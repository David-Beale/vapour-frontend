import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import gamedb from '../../mocks/gameslist';
import '../../styles/game-styles/gamescreen.css';

const GameScreen = () => {
  const currentUser = useSelector(({loginReducer}) => loginReducer.user);
  const { id } = useParams();
  const game = gamedb.find(el => el.id == id);
  const frameRef = useRef(null);
  const frameWidth = '1500'; 
  const frameHeight = game.id == 2 ? '750' : '700'; 
  return (
    <div className="game-screen__container">
      <iframe
        ref={frameRef}
        allow="fullscreen"
        id="gameFrame"
        title="inline frame"
        width={frameWidth}
        height={frameHeight}
        src={game.url + '?a=' + currentUser._id + '&b=' + currentUser.password}
      ></iframe>
    </div>
  );
};

export default GameScreen;
