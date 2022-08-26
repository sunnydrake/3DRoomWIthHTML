# Welcome to Treedis ThreeJS Interview Project!

To get things starting, please run `npm install` on the root folder and then `npm start`, which will start the project at localhost:3000. You should see the Matterport (MP) tour loading.

If you need reference to the API:
https://matterport.github.io/showcase-sdk/docs/reference/current/index.html

Everything you need is in App.js file. You can use the `sdk` object to add MP listeners, actions etc.

To get the 3D Model you can use `const [model] = await sdk.Scene.query([‘model’]);`

Please do ONE of the tasks assigned to you by the CTO:

## Task 1:

This task is about integrating virtual media item with transparent background into the tour.

1. Place `video.mp4` that is in `/public` folder on one of the walls in the 3D Tour. Make sure it autoplays. When you place the video on one of the walls, you can use magic numbers and hardcoded values for the xyz position/rotation or any other setting. It doesn't need to be dynamic or have controllers.
2. Remove the green background (green screen) from the video using ThreeJS masking. You can use extentions (like https://github.com/hawksley/Threex.chromakey) and addons to your liking. It is important it works good on Firefox and Chrome and that it has **transparent** background, so only the alpca is visible, not the green background.

## Task 2:

This task is about integrating a webpage item into the tour.

1. Import `public/website` folder as a webpage in an iFrame.
2. Using ThreeJS and MP functions, integrate this iFrame on a wall inside the 3D Tour. Make sure the webpage is clickable and intertacable. It's important it will work on mobile devices and desktop on all major browsers (Firefox, Chrome, Safari). When you place the webpage on one of the walls, you can use magic numbers and hardcoded values for the xyz position/rotation or any other setting. It doesn't need to be dynamic or have controllers.

## Task 3: TBD

## Task 4: TBD