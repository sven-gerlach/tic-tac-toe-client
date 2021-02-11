# User Experience Flow Chart

## Modules
+ app: attach event listeners to objects
+ events: handle events
+ api: ajax requests
+ ui: modulate html to achieve SPA user-interface
+ game-board: gameBoard object with its properties and methods
+ player: player object with its properties and methods
+ store: store API response user variable and game variable

## Objects

1. gameBoard
    1. properties: gameBoard, gameState, id, owner, nextPlayer
    1. methods: setGameBoard (needed for option to continue old games), isValidMove, updateGameBoard, evaluateGameBoard
  
1. player
    1. properties: id, email
    1. methods: getNextMove (needed for AI), [tbd]
  
1. gameStats:
    1. properties: 
    1. methods: getAllGames, evaluateGames, setTable

## User Experience Flow
1. Welcome page:
    1. Sign-up
       + button to display sign-up page
    1. Sign-in
       + button to display sign-in page
  
1. Sign-up page:
    + collect values from input fields
    + make ajax call with appended values to sign-up user
    + store response is store.user variable (potentially needed for auto-log-in feature)
    + success: pass email and password to login for auto-log-in feature
    + failure: show error message

1. Sign-on page:
    + collect values from input fields
    + make ajax call with appended values to sign-up user
    + store response in store.user
    + success: display nav bar and gameplay section
    + failure: show error message
  
1. Gameplay page:
    + display generic text that describes the game and the game-play options
  
1. Game page:
    + display game grid
      + game board is an array of length 9, which reflects how the game state is stored in the API, whereby each element is itself an array of (x, y)
   + each of the 9 cells (elements) making up the game board will receive two data
    attributes:
     + "board-index": an array reflecting the coordinates this cell would represent in a cartesian system where zero is located in the top left
     + "player-symbol": can be either "", "O", or "X" and represents if a player has already staked a move onto this cell
   + The container div of the game board will receive the event listener for
    clicks on the 9 cells (elements)
   + There needs to be a function that evaluates the click for its validity (e, g, clicks can only be accepted if the data attribute "player-symbol"
    is null)
    + If the move is valid, two things need to happen next:
    1. update HTML data attributes for clicked field
    1. evaluate the game (game state should be either open, win, loss, or draw)
    1. Send an update request to the API
    + the "evaluate logic" is fairly simple:
      + horizontal win: 3 of the 9 cartesian cell arrays (e.g. (x,y)) have the same y value
      + vertical win: 3 of the 9 cartesian cell arrays (e.g. (x,y)) have the same x value
      + diagonal win: 3 of the 9 arrays have either the same sum or absolute difference

1. Game Stats page:
   + display table with basic game stats
  
1. Account page:
   + display form to update password
    + pass updated value to API via ajax request
