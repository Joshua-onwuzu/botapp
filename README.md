# botapp
This is a slack message bot

### Features
* Bot listen to slack slash command ```/bot``` and respond with ``` Welcome. How are you doing ```
* Bot present a list with radio button in Slack for the user to select  ```Doing Well``` , ```Neutral```, ```Feeling Lucky``` 
* After user selects response, bot pop slack modal  ```What are your favorite hobbies``` with  checkboxes in Slack for the user to select multiple input ```Football```, ```Music```, ```Sleep```, ```Movies”, ```Basketball```
* After the user selects a response, the bot response with ```thank you```.

#### Prerequisites
You need to have Mongodb,Nodejs, and Npm installed globally on your local machine


### Installing 
* Clone the repository ```https://github.com/Joshua-onwuzu/botapp.git ```
* Navigate to the location of the folder and run ```npm install ``` to install dependencies
* Create a ```.env``` file
* Set ```SECRET_KEY``` in ```.env``` to slack  bot signin secret
* Set ```TOKEN``` to slack bot oauth token
* Use command ```npm run test ``` to run test
