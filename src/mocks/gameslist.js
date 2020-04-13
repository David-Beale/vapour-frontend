import pong from "../assets/images/pong.JPG";
import dot from "../assets/images/dot.png";
import epi from "../assets/images/going-epi.png";
import snake from "../assets/images/snake.png";
export default [
  {
    id: 1,
    name: "(oneDot).bind(all)",
    image: dot,
    description: "Move with the mouse and click to shoot. Eat green pellets to gain mass and ammo. To win, shoot your opponents or eat them if you are bigger than them.",
    url: "https://db-game1.herokuapp.com/",
    multiplayer: true
  },
  {
    id: 2,
    name: "Pong",
    image: pong,
    description:
      'Use up and down arrows to move your paddle. The loser moves to the back of the queue.',
    url: "https://db-pongv2.herokuapp.com/",
    multiplayer: true
  },
  {
    id: 3,
    name: "Going Epi",
    image: epi,
    description:
      "Use the arrow keys to get as many food items as you can, before the virus gets you",
    url: "https://vapour.netlify.com/games/going-epi",
    multiplayer: false
  },
  {
    id: 4,
    name: "Snake",
    image: snake,
    description:
      'Control the snake with arrow keys to eat as many apples as you can!',
    url: "https://vapour.netlify.com/games/snake/snake.html",
    multiplayer: false
  },

];
