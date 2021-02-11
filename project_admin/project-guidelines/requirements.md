### Deployment Requirements

1.  [ ] Hosted and deployed on GitHub Pages, not Github Enterprise.

### Version Control Requirements

1.  [ ] Sharing your work through a git repository hosted on Github.
1.  [ ] Making frequent, cohesive commits dating back to the **first day**
    of the project week.

### Documentation Requirements

1.  [ ] Pin your repository on GitHub as a [Popular Repository](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/pinning-items-to-your-profile)
1.  [ ] Complete the repository `Description` field and `Website` field with a meaningful sentence description of the application and link to the live URL
    ![github image](https://git.generalassemb.ly/storage/user/3667/files/beae41ae-aaaa-11e7-8867-63958d376a0b)
1.  [ ] README.md must include a [list of technologies used](example_readme.md#technologies-used)
1.  [ ] README.md must include your [planning and a story about your development process and problem-solving strategy](example_readme.md#planning-story).
1.  [ ] README.md must include [unsolved problems](example_readme.md#unsolved-problems) which would be fixed in future iterations.
1.  [ ] README.md must include [wireframes](example_readme.md#wireframe) and [user stories](example_readme.md#user-stories).

> Note: There's an [`example_readme.md`](example_readme.md) in this repository for your reference. It covers all documentation requirements.

### Application Requirements

1.  [ ] User must be able to sign up
1.  [ ] User must be able to sign in
1.  [ ] Signed in user must be able to change password
1.  [ ] Signed in user must be able to sign out
1.  [ ] Signed in user user must be able to start a tic tac toe game
1.  [ ] When playing game, user must start as X and then rotate between X and O
1.  [ ] When playing game, user must only select available spaces on the board
1.  [ ] When playing game, user must be notified when win, loss or tie occurs
1.  [ ] Once a game is over, user must not be able to add to that board
1.  [ ] Once a game is over, user must be able to play again
1.  [ ] Signed in user must be able to view number of games played

### API Requirements

1.  [ ] Sign up [POST /sign-up](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md#signup)
1.  [ ] Sign in [POST /sign-in](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md#signin)
1.  [ ] Change password [PATCH /change-password](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md#changepw)
1.  [ ] Sign out [DELETE /sign-out](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md#signout)
1.  [ ] New game [POST /games](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#create)
1.  [ ] Update game [PATCH /games/:id](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#update)
1.  [ ] View number of games played [GET /games](https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md#index)
1.  [ ] Give feedback to the user after each action's success or failure.
1.  [ ] All forms must clear after submit success

### Professional Requirements

1.  [ ] **Do not** delete your repository at any time or start over.
1.  [ ] **Do not** rely on refreshing the page for any functionality.
1.  [ ] **Do not** have any user-facing bugs.
  -  Display non-functional buttons, nor buttons that do not successfully complete a task.
  -  Show actions at inappropriate times (example: sign out button when not signed in).
1.  [ ] **Do not** use browser alerts or prompts.
1.  [ ] **Do not** display console logs, errors or warnings in the console.
