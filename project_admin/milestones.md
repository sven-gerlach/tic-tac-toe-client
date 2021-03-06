# Project Management Milestones


1.  [x] Review [game-project-scope-study](https://git.generalassemb.ly/ga-wdi-boston/game-project-scope-study)
1.  [x] User Stories
1.  [x] Review [project-planning-wireframes-practice](https://git.generalassemb.ly/ga-wdi-boston/project-planning-wireframes-practice)
1.  [x] Wire Frames [tic-tac-toe](https://imgur.com/a/58ytysC)
1.  [x] Draft detailed flow-chart and key objects needed

### Set Up

1.  [x] [Download Browser Template](https://git.generalassemb.ly/ga-wdi-boston/browser-template)
1.  [x] Create a Github Repository
----

### Draft HTML
-[x] Convert wireframe into basic unformatted HTML, focusing on application requirements for now (add in stretch goals if time)

### Authentication

1. [x] Review [api-token-auth](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-token-auth) and [game API authentication docs](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md)
1. [x] Sign Up (curl then web app)
1. [x] Sign In (curl then web app)
1. [x] Change Password (curl then web app)
1. [x] Sign Out (curl then web page)
1. [x] All API calls have success or failure messages
1.  [x] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Create New Game

1. [x] Display New Game button when a user signs in
1. [x] When New Game button is clicked display game board, start player as X, and make [POST games API call](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#create-post-games) to create game
1. [x] Save the API response so you have access to the game ID and cells
1.  [x] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Game UI Round 1

1. [x] Design a basic game board with HTML/CSS
1. [x] Add a click handler for when a space on the game board is clicked
1. [x] When the user clicks on a space, first check that the space is empty
1. [x] If they choose a valid space, add their token to the HTML/CSS board and the game cells array
1. [x] Add messaging for the user when the user clicks on an invalid space
1.  [x] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Game UI Round 2
1. [x] Rotate player between X and O
1. [x] Add messaging for the user when the turn changes
1. [x] Check for winner
1.  [x] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Update Game
1. [x] Make [PATCH games API call](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#update-patch-gamesid) to update game
1. [x] Add messaging for the user when the game is over (win or draw)
1. [x] Do not allow users to add an X or O to any spaces after the game is over
1.  [x] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Play Game Again
1. [x] Update New Game button functionality so it also works to play another game
1.  [x] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### View Games

1. [x] Add Games played button
1. [x] When Add Games button is clicked make [GET games API call](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#index-get-games) and display the number of games returned
1.  [x] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Formatting / Styling
1. [x] Use jQuery, Bootstrap, and SCSS

### Debug
-[x] test edge cases
-[x] test corner cases

### Documentation Requirements
-[ ] Draft [documentation requirements](project-guidelines/requirements.md)

## Final Submission Checklist
-[x] Debug, test edge and corner cases
-[x] Remove all console.log()
-[x] [Basic requirements](project-guidelines/requirements.md)
  -[x] Deployment requirements
  -[x] Version control requirements
  -[x] Documentation Requirements
  -[x] Application requirements
  -[x] API requirements
  -[x] Professional requirements
-[x] [Stretch goals](project-guidelines/stretch_goals.md)

