# React Native for Next.js Proof of Concept

This is a proof of concept repository for using React Native in a Next.js project.

The main focus of this project is to see if it's possible to create universal components which can be shared between web and native.

## Walkthrough

1. Take a look at the [`UniversalComponent.js`](UniversalComponent.js) component which is defined with only React Native primitives.
2. Notice how this component is then imported in [`pages/index.js`](pages/index.js) which is a regular Next.js page defined with DOM elements.
3. Start the app: `npm install && npm start`
4. Open the app: `open http://localhost:3000`
5. You should see a working Next.js page with the universal component being rendered without issues. This universal component can be used in a React Native mobile app as well because it doesn't render any DOM elements.
