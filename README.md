# 🌍 React Native for Next.js Proof of Concept

This is a proof of concept repository for using React Native in a Next.js project.

The main focus is to explore the possibility of sharing components between web and native.

## ▶️ Walkthrough

1. Take a look at the [`UniversalComponent.js`](UniversalComponent.js) component which is defined with only React Native primitives.
2. This component is then imported in [`pages/index.js`](pages/index.js) (a normal Next.js page with DOM elements).
3. Start the app\*: `npm install && npm start`
4. Open the app: [http://localhost:3000](http://localhost:3000)
5. You should see a working Next.js page with the universal component being rendered without issues. This universal component can be used in a React Native mobile app as well because it doesn't render any DOM elements. Now we can ["Write once, run anywhere."](https://en.wikipedia.org/wiki/Write_once,_run_anywhere) 😎

\*This repository's default branch is also deployed to [universal-components.vercel.app](https://universal-components.vercel.app/)

## 📚 Resources

- [Using Next.js with Expo for Web](https://docs.expo.dev/guides/using-nextjs/)
- [`@expo/next-adapter`](https://github.com/expo/expo-cli/tree/master/packages/next-adapter)
- [React Native for Web](https://necolas.github.io/react-native-web/)
