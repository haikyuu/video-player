A video player built with react-native

What this looks like
=====
![video player GIF](screenshot.png)

Run it
=====

This assumes you have already installed [node.js](https://nodejs.org/en/) and [react-native](https://facebook.github.io/react-native/docs/getting-started.html)

- npm install
- react-native link
- react-native run-ios

In order to try it in the ios simulator, drag a video to the simulator to be able to access it in the simulator gallery.

Features
=====

- Load video from gallery
- Play/Pause the video
- Mute video
- Display/Change progress of video

Project Structure
====

- The entry point for the application is index.[android/ios].js and they both just register the same component as the root application.
- ```src/index.js``` contains the root compponent, which is the stack navigator that's used in the app. 
- ```components``` folder contains the components of our app.
- ```screens``` folder contains the screens (which are also components) used in navigation.
- ```utils``` folder contains utility functions and constants used trough out the application

Note about imports: 
----

- Every folder contains a `package.json` file containing a name, which is used from any location in the project to reference the given folder location. This is a convinience used to avoid `import sthg from '../../../fol/app.js` which is error prone and makes changing the folder structure a nightmare.
- An `index.js` file at the root of every folder is used to have a common interface for importing files in the project : `import { ControlBar, NavBar, Card } from '...'` and avoid making an import for each one.

Libraries used:
----

- [react-navigation](https://github.com/react-community/react-navigation) is used for navigation.
- [react-native-video](https://github.com/react-native-community/react-native-video) is used to play videos.
- [react-native-image-picker](https://github.com/react-community/react-native-image-picker) is used to load assets from the phone gallery.
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) is used for icons.
