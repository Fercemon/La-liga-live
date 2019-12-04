
# This app is created with expo cli 
Assuming that you have Node 10 LTS or greater installed, you can use npm to install the Expo CLI command line utility

# expo cli installation and create new project

- npm install -g expo-cli
- expo init App_name

# If you decided to clone this repository
The node_modules are not included, remember to install them by typing:

- npm install

note: you will get error even after npm install, since you didn't install the package I am using in the app yet, but no worries, I explain you how to do that in the next steps.

# to start a development server type the following

- expo start

this will start the Metro Bundler.

# to preview your app you can use one of the following options

- dowload expo app in your phone and scan the QR code you have on your command line
- download android studio and create a virtual device. Type a in your command line and you will see your app in your virtual device
- you can also type w to preview on the browser

# when using expo we will need some package to code some things as navigation
To be ale to use this package we have to install them with the command line typing: npm install name-of-the-package

And then we have to import the component we want to use typing: import component from 'package';

Remember to import the package on each page you need it.

# Im using firebase as a database to get the content of the app

  In the link below you have and example of how to creat a firebase realtime database

  https://medium.com/mindorks/firebase-realtime-database-with-react-native-5f357c6ee13b

# To use firebase authentication
  - Once you have created the project, the realtime database and you have the keys and connected your app with firebase, click on authentication tab.
  - In Methods enable email/password mettod and save.
  - Use firebase.auth().createUserWithEmailAndPassword(email, password) to add new users
  - Use firebase.auth().signInWithEmailAndPassword(email, password) to login user
  - Use firebase.auth().signOut() to sign out user

# App structure

- App.js
- components
  - Highlight.js
  - Logo.js
  - Match.js
  - Ranking.js
- screens
  - Loading.js
  - Login.js
  - SignUp.js
  - Home.js
  - Matches
    - index.js
    - PreviousMatchs.js
    - NextMatches.js
  - Rankings
    - index.js
    - Rankings.js
  - Highlights
    - index.js
    - Highlights.js
- assets(empty, using dynamic content)

# About this app

This App is the first prototype of La liga-LIVE App.

The app has:
- switcher navigator to navigate withing the Login/SignUp screens:
    - The switcher load the Loading screen as initial screen. This screen does not render anything but redirect you to either Login or Main screen, depending if you are already logged in or not
    - If you are logged out then you will get Login screen where you can log in or press sign Up to go to SignUp page.
    - The APP use firebase email and password authentication to creat the users
- bottomTabNavigator to navigate withing Mathes, Rankings and Highlights pages

Once you signUp or Login you get to home screen.

The Home page is Matches page. Here you have:

- StackNavigator just to hold the Title of the page(each page on the bottomTabNavigator have one)

- MaterialTabNavigator to navigate within Previous Matches and Next Matches pages

    In this page is where you can see the result of the previous matches and what are the next mathes

On the ranking page is display the current ranking of La liga. The border green is for the teams are currently clasified to play the champions league next year, and the red one is for the teams that will go to second division next year

Finally in highlights page you cand finde the videos with the highlights of the matches


# features used on the app

The app use 4 different types of navigation.

We have the switcherNavigator described before, a tabNavigator to navigate between the main pages (Matches, Rankings, Highlights)stackNavigator to hold the title of the page, and materialTabNavigator to switch within previous and next maches pages.

# Futures will be added in the future
- Posibility to choose your team when signing up to get the relevant info about that team
- Favourite buttom to save the videos or information you want to watch later
- Favourite section to display all the videos and info you marked as favourite
- Ticket section where you will be able to buy your tickets for the matches
- Payment system to maket checkout in Ticket section possible.
