# Vapour
#### Vapour is a full stack social gaming platform on which users can play games and chat with eachother.
https://github.com/David-Beale/Vapour-backend

## Features
 
### Multiplayer Games
![vapour-img2](https://user-images.githubusercontent.com/59053870/79227569-012a6980-7e58-11ea-9045-963b7d2eaaaf.png)  
#### The first game is inspired by Agario and Asteroids. It is a free for all multiplayer game using SocketIO. Players can eat the green food to gain mass and ammo. Players can shoot opponents or eat them if they are bigger than them. Getting hit reduces your size and you will die if you get too small. Player names and images are downloaded from Vapour's database.
        
![vapour-img3](https://user-images.githubusercontent.com/59053870/79227572-01c30000-7e58-11ea-9e78-d459bc240289.jpg)  
#### The second game is a classic game of Pong. It is a 1v1 game using SocketIO but more players can spectate and join a queue. The loser will be sent to the back of the queue and the winner keeps playing. Player names and images are downloaded from Vapour's database.

#### The platform also has 2 single player games: Snake and a side scroller.

### Chat  
![vapour-img6](https://user-images.githubusercontent.com/59053870/79227564-0091d300-7e58-11ea-9b1f-c4853f6ea7a3.png)  
#### The platform features a chat section where users can chat with other online users.Messages are sent using SocketIO and stored in the database for future sessions. 

### Chat rooms
![vapour-img7](https://user-images.githubusercontent.com/59053870/79227566-012a6980-7e58-11ea-8d87-d4e6400db499.png)
#### There are also several chat rooms where users can discuss topics with everyone else in the room.

### Facial Recognition
#### The profile section allows users to submit a profile image using their webcam or via file upload. FaceAPI is used to detect a face, which is then cropped and stored on the database.

### Vapour effect
#### The background canvas uses fluid dynamics algorithms to display a vapour style effect.

## Built With
* React
* Redux
* Express
* SocketIO
* Mongo DB
* Passport
* p5.js#
* faceAPI

## My contributions:
* Front and back end authentication
* 2 multiplayer games using Socket IO and canvas
* Integration of FaceAPI
* Integration of vapour effect
* Deployment of frontend and backend

## Other contributors
* Pawel Pietruszka
* Joseph Tolentino Cayamanda 
* Vic Williams
* Mooness Davarian

## Acknowledgements
* Mattias Harrysson. fluids-2d. fluid solver in WebGL
* Jos Stam. Stable Fluids. In Proceedings of SIGGRAPH. 1999.
* Jos Stam. Real-Time Fluid Dynamics for Games. Proceedings of the Game Developer Conference. 2003.
* Mark Harris. Fast Fluid Dynamics Simulation on the GPU. In GPU Gems: Programming Techniques, Tips, and Tricks for Real-Time Graphics (Chapter 38). 2004.
