# Cuisine Selection App (React Native)

> This mobile app allowes the user to select meal recipes from several cuisine types and mark them as favorite.

## The goals of creating this application:

The main goals for me as a web developer were to improve my skills in working with:

- React Navigator (Stack and Drawer):
  - { route } to set the selected cuisine name as the header title;
  - { navigation.navigate() } to navigate the user to a particular "page" and pass in the itemData;
  - { navigation.setOptions() } to implement an icon button on the "Recipe" page;
  - options/screenOptions to style the screens;
- the React Redux (hooks: useSelector() and useDispatch()) and Redux Toolkit to wire up the "Add to Favorites" icon button;
- the React Native components, such as View, Text, Pressable, FlatList, StyleSheet;
- creating custom reusable components (e.g. a list of meals);
- the React props (transferring data from parents to children);
- the React hooks such as useLayoutEffect();
- JS logic and methods (push(), splice(), indexOf(), etc) to create the Redux Toolkit reducers;
- "@expo/vector-icons" package;

## To start the app on your machine:

1. Clone the project to your machine by running:

```
git clone https://github.com/SharinLana/reactNative-cuisineSelection.git
```

2. To install the project dependencies, run:

```
npm install
```

3. When the installation is complete, run the following command to start the app:

```
npm start
```

4. Download and install Android Studio and Xcode, select simulators, and then, to run the app on Android, run:

```
a
```

To run the app on iOS, run:

```
i
```

## Languages, frameworks, libraries, packages, tools and technologies:

- ReactNative
- Redux Toolkit
- React Navigator
- React.js
- JavaScript

## Functionalities:

- navigation through cuisines and meal resipes;
- navigation sidebar (made with React Navigator Drawer);
- the ability to add a meal recipe to "Favorites" or remove it from there;
