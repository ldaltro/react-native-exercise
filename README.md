# Tools that I used
I built this project using [create-react-native-app](https://github.com/react-community/create-react-native-app) which is a tool that lets us generate react native projects with no configuration, it's based on Expo(which used to be called Exponent) and it's pretty cool for this phase of bootstraping a project.
For navigation I used react navigator, which seems to be turning it the closest thing we have from a standard navigation library. Note that we could easily move that to another library(maybe some that uses native code like the Wix one).

# What do you need to run the project
* Node.js V6+
* Expo client [ios](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) / [android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)

# How to run the project
* Install all dependencies with *npm install*
* Type *npm start* to run the project, a QR code will show up
* Open the expo client on your phone, scan the QR code to run the app(make sure your phone and your computer are in the same network)

# Things I left out 
I decided not to use a state managment library(like Redux or MobX) for this project because I belive that in a real life situation it's better to implement something like that later on. If this were a real project, we'd be able to easily move what is necesary out of local component state.

I also tried to keep create-react-native app as it would make it easier to run the project, because of that I tried not to use any library that would include native code(libraries where you need to use *link*) that's why, for instance I asked if I could use png images instead of svg as the Image component that comes with React Native support this extension better.

