# Capitals Quiz
## Description 
Capitals Quiz is an online Quiz designed to allow the user to test his knowledge about the capitals of the World. The Quiz is created in a very interactive and intuitive manner that would make it very accessible and entertaining. 
![Responsive](doc/screenshots/Responsive.png)

### User Stories
  * As a user, I would like to test my knowledge on the world's capitals 

## Features
### Existing Features
  * Capitals Quiz Heading 

As the page has been uploaded the user is presented with a large title area that is designed to caption his attention and interest.

![Title](doc/screenshots/title.png)

  * The Start Button

After getting intrigued by the title user should be already willing to play the game, and this can be easily done by pressing the start button. 

![Start](doc/screenshots/Start.png)

  * Question Section

Once the user has started the game, he will be presented with one question per page, which will have three answer options, from which he can choose and then submit his answer. 

![Question](doc/screenshots/question.png)

  * The Score Area

After submitting his answer a text will appear to say if the answer was correct and if contrary to say which was the correct answer. Also underneath this text, there is a section that will allow the user to see exactly how many correct and incorrect answers they have provided.

![Scores](doc/screenshots/scoresarea.png)

  * Next button

Aside from the submit button, there is a Next button, which can be pressed only after submitting an answer, and this will take the user to the next question or at the end of the game when questions have finished. 

![Buttons](doc/screenshots/buttons.png)

  * End of Game

When questions have ended user will be presented with his final score, and then have the option to play the quiz again by pressing the Restart button. 

![Final Score](doc/screenshots/finalscore.png)


### Features Left to Implement

In time the site should allow the user to create an account and play against time and other users.

## Technologies used 
* GitHub
* Gitpod
* HTML
* CSS
* JavaScript 
* Google Chrome developer tools
* FontAwesome

## Typography and colour scheme
The page has a fairly simple appearance. The background is created by an image with different flags, then the text area is fitted inside a white container. Text colours have been specified in CSS by RGB(red,  green, blue) values. 
 
## Testing
* Step I: pressing the Start button will show the first question and options.
* Step II: once an answer is selected by the user Submit button will appear.
* Step III: once Submit button is pressed, the answer selected gets checked - a message will appear for the user, the score will get incremented, and now Submit button will disappear and the Next button will show up.
* Step IV: once all questions are finished, the user will be shown the final score and a Restart button which if pressed, the page will be uploaded and the user can start playing the game again.

Capitals Quiz Project looks and works well on different browsers and screen sizes.

![Responsive:iPhoneSE](doc/screenshots/iPhoneSE.png)

![Responsive:iPadAir](doc/screenshots/iPadAir.png)


### Validator Testing
#### HTML

No errors were returned when passing through the official W3C validator.

#### CSS

No errors were returned when passing through the official W3C CSS validator.

#### JavaScript

No errors were found when passing through the official Jshint validator.
Metrics
* There are 5 functions in this file.

* Function with the largest signature take 1 argument, while the median is 0.

* Largest function has 13 statements in it, while the median is 4.

* The most complex function has a cyclomatic complexity value of 6 while the median is 1.

### Fixed Bugs 
* Before fixing, on pressing Submit button twice under the same question, the result area will already come incorrect as would already be compared to the next question, as the questionIndex incrementation was taking place within the checkAnswer Function. This has been changed by moving the questionIndex incrementation in the displayQuestion function. 

* When moving to the next question, the last answer (button) checked, will remain on the next question, and the user will need to press it again and then Submit. This has been fixed by creating a loop that is going to check if any of the buttons are pressed when displaying question and if so unselecting it.

## Deployment
### GitHub
The site was deployed to GitHub pages. The steps to deploy are as follows:
  * In the GitHub repository, navigate to the Settings tab
  * From the source section drop-down menu, select the Master Branch
  * Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
  The live link can be found here - https://nicolehitter.github.io/capitals-quiz/.

### Gitpod
After opening the repository in GitHub, you can press on Gitpod button which will take you to Gitpod.
To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:
python3 -m http.server

A blue button should appear to click: Make Public,
Another blue button should appear to click: Open Browser.


## Credits
### Content
The information has been taken from  [Wikipedia](https://en.wikipedia.org/wiki/List_of_national_capitals).


### Media
Wireframes have been created using: 
[Vectr](https://vectr.com/design/editor/73189ba5-144e-4529-b297-bbb6b1652881)

Flags image has been taken from 
[The Flags](https://www.google.com/url?sa=i&url=https%3A%2F%2Fworld-geography-games.com%2Fen%2Fflags_world.html&psig=AOvVaw3MyrGIyn8J7m60q5d6ooqm&ust=1665961816204000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCOCLrMSt4_oCFQAAAAAdAAAAABAE)

JavaScript code has been written with inspiration from:
* [YouTube](https://www.youtube.com/watch?v=riDzcEQbX6k)
* [Google Page](https://simplestepscode.com/javascript-quiz-tutorial/)
* [Another capitals quiz](https://geographyfieldwork.com/WorldCapitalCities.htm)

And with extra support from:
* [Code Institute](https://codeinstitute.net/)
* [Slack](https://slack.com/intl/en-gb)
* [W3schools](https://www.w3schools.com/js/)





