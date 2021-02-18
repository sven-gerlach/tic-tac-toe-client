# Tic Tac Toe: a single-page-application of this popular game with an unbeatable AI opponent

This application allows the user to play the popular game Tic Tac Toe by themselves, against other human players, or against a computer opponent.

This Single Page Application (SPA) of the game is entirely CRUD based, in that all user account details, including email address, password, as well as all game related and meta-data are stored decentralised on a server.

The game itself is a one-to-one representation of the popular game, whereby two players are each allocated a game symbol of X and O respectively.  Both players take turns in placing their respective symbol into one of 9 cells that make up the game-board's 3 x 3 matrix.  Players must only stake their symbol to a cell that is as yet unencumbered.  Whichever player positions three of his symbols in a horizontal, vertical, or diagonal straight first, has won the game.  If the game board has no more empty cells for players to stake a move on and neither player has achieved to position three of their symbols in a straight line, the game results in a draw.

Players can choose which symbol to play, <b>X or O</b>, which turn to take, <b>first or second</b>, and whether their opponent is <b>human or a computer</b>. If the latter option is selected, one can also choose the AI difficulty level. The most difficult level is in essence unbeatable with the best game outcome being a draw. This result has been achieved using the game theory derived minimax  algorithm. Due to the limited size of the game board alpha/beta pruning, as a way to improve time and space complexity, has been omitted.

Besides offering the above game play adjustments, players can also choose from a list of all their unfinished games, select one from a carousel-type selection pane, and bring to a conclusion.

## Important Links

- [Deployed App](https://sven-gerlach.github.io/tic-tac-toe-client/)
- [Deployed API](https://tic-tac-toe-api-production.herokuapp.com/)

## Planning Story

Before this project was developed in code the below planning and workstream management list was used to organise the key milestones and structure them in a way that makes most sense from a development perspective.

1.  [x] Review
1.  [x] User Stories
1.  [x] Review
1.  [x] Wire Frames
1.  [x] Draft detailed flow-chart and key objects needed

### Set Up

1.  [x] Download Browser Template
1.  [x] Create a Github Repository
----

### Draft HTML
1. [x] Convert wireframe into basic unformatted HTML, focusing on application requirements for now (add in stretch goals if time)

### Authentication

1. [x] Review
1. [x] Sign Up (curl then web app)
1. [x] Sign In (curl then web app)
1. [x] Change Password (curl then web app)
1. [x] Sign Out (curl then web page)
1. [x] All API calls have success or failure messages
1. [x] Deploy to Github Pages

### Create New Game

1. [x] Display New Game button when a user signs in
1. [x] When New Game button is clicked display game board, start player as X, and make POST games API call to create game
1. [x] Save the API response so you have access to the game ID and cells
1. [x] Deploy to Github Pages

### Game UI Round 1

1. [x] Design a basic game board with HTML/CSS
1. [x] Add a click handler for when a space on the game board is clicked
1. [x] When the user clicks on a space, first check that the space is empty
1. [x] If they choose a valid space, add their token to the HTML/CSS board and the game cells array
1. [x] Add messaging for the user when the user clicks on an invalid space
1. [x] Deploy to Github Pages

### Game UI Round 2
1. [x] Rotate player between X and O
1. [x] Add messaging for the user when the turn changes
1. [x] Check for winner
1. [x] Deploy to Github Pages

### Update Game
1. [x] Make PATCH games API call to update game
1. [x] Add messaging for the user when the game is over (win or draw)
1. [x] Do not allow users to add an X or O to any spaces after the game is over
1. [x] Deploy to Github Pages

### Play Game Again
1. [x] Update New Game button functionality so it also works to play another game
1. [x] Deploy to Github Pages

### View Games

1. [x] Add Games played button
1. [x] When Add Games button is clicked make GET games API call and display the number of games returned
1. [x] Deploy to Github Pages

### Debug
1. [x] test edge cases
1. [x] test corner cases

### Documentation Requirements
1. [x] Draft

### Final Submission Checklist
1. [x] Debug, test edge and corner cases
1. [x] Basic requirements
    1. [x] Deployment requirements
    1. [x] Version control requirements
    1. [x] Documentation Requirements
    1. [x] Application requirements
    1. [x] API requirements
    1. [x] Professional requirements
1. [x] Stretch goals
    1. [x] View previous games in carousel
    1. [x] Allow users finish playing unfinished games
    1. [x] Build an AI bot of different difficulty levels
    1. [x] Game statistics
    1. [x] Automatic sign-in immediately after sign-up
    1. [x] Responsive design features
    1. [x] Usage of advanced UX design, such as carousels, alerts, styled buttons, animations, etc

### User Experience Flow Chart

#### Modules
+ app: attach event listeners to objects
+ events: handle events
+ api: ajax requests
+ ui: modulate html to achieve SPA user-interface
+ game-board: gameBoard object with its properties and methods
+ player: player object with its properties and methods
+ store: store API response user variable and game variable

#### Objects

1. gameBoard
  1. properties: gameBoard, gameState, id, owner, nextPlayer
  1. methods: setGameBoard (needed for option to continue old games), isValidMove, updateGameBoard, evaluateGameBoard

1. player
  1. properties: id, email
  1. methods: getNextMove (needed for AI)

1. gameStats:
  1. properties:
  1. methods: getAllGames, evaluateGames, setTable


### User Stories
+ As a new user, I want to be able to create an account so that I can complete games at a later point and review my win/loss rate.
+ As a user with an account, I want to be able to change my password.
+ As a new user who just created an account, I want to be able to go straight to the game app without having to sign in.
+ As a new user who doesn't know the game, I want to read some instructions so that I can play the game.

### Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript
- SCSS

### Unsolved Problems
- Option for users to switch to full screen on their mobile devices inside their browsers
- Use a holding page with a spinner during loading
- On occasion, logging into the server can take a few seconds. Showing a spinner would enhance the user experience.
- Alert windows can be clicked away. Another, perhaps better option, would be to force the user to click on one of the buttons presented on those alert windows.
- Using responsive design, style the 3x3 game matrix in such a way that the 9 squares make up one bigger square, all staying proportional and squared as and when the screen gets resized
- When a win occurs, draw a line through the 3 symbols

## Images

#### Wireframe:
![wireframe](https://imgur.com/a/rlyeoQ5)
