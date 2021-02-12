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
1. [ ] When New Game button is clicked display game board, start player as X, and make [POST games API call](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#create-post-games) to create game
1. [ ] Save the API response so you have access to the game ID and cells
1.  [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Game UI Round 1

1. [ ] Design a basic game board with HTML/CSS
1. [ ] Add a click handler for when a space on the game board is clicked
1. [ ] When the user clicks on a space, first check that the space is empty
1. [ ] If they choose a valid space, add their token to the HTML/CSS board and the game cells array
1. [ ] Add messaging for the user when the user clicks on an invalid space
1.  [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Game UI Round 2
1. [ ] Rotate player between X and O
1. [ ] Add messaging for the user when the turn changes
1. [ ] Check for winner
1.  [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Update Game
1. [ ] Make [PATCH games API call](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#update-patch-gamesid) to update game
1. [ ] Add messaging for the user when the game is over (win or draw)
1. [ ] Do not allow users to add an X or O to any spaces after the game is over
1.  [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Play Game Again
1. [ ] Update New Game button functionality so it also works to play another game
1.  [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### View Games

1. [ ] Add Games played button
1. [ ] When Add Games button is clicked make [GET games API call](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#index-get-games) and display the number of games returned
1.  [ ] [Deploy to Github Pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)

### Debug
-[ ] test edge cases
-[ ] test corner cases

### Documentation Requirements
-[ ] Draft [documentation requirements](project-guidelines/requirements.md)

## Final Submission Checklist
-[ ] Debug, test edge and corner cases
-[ ] Remove all console.log()
-[ ] [Basic requirements](project-guidelines/requirements.md)
  -[ ] Deployment requirements
  -[ ] Version control requirements
  -[ ] Documentation Requirements
  -[ ] Application requirements
  -[ ] API requirements
  -[ ] Professional requirements
-[ ] [Stretch goals](project-guidelines/stretch_goals.md)

