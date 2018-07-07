# React-Week-Two

This is a copy of an AngularJS brewery website from the Javascript module of the Epicodus . This one was made with ReactJS with the intention of it looking the same, with the functionality of adding a new beer item to the list.

With limited functionality the development process in React still seemed much smoother. The looping of data was still simple and the client side routing was straightforward. Angular development forced an attention to detail but allowed an easy way to loop through data, but the component interface was messy and the routing too syntax heavy.

For comparison:

[React Version](https://github.com/react-week-one)

[Angular Version](https://github.com/Maxna/brewery)

### Component Tree

![Component Tree](src/assets/images/tree-final.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Set Up

To set the project up:

First clone this repository by copying this link.

```
  https://github.com/Maxna/react-week-one.git

```

Then open the terminal and navigate the the desktop. Clone the project down by using the following command.

```
$ cd desktop
$ git clone https://github.com/Maxna/react-week-one.git
```

Next, in the terminal navigate to the project folder, and then open it with the Atom editor. Use these commands.

```
$ cd react-week-one
$ atom .
```

Then install the npm dependencies.

```
$ npm install
```

Finally, open the app in the web browser.

```
$ npm run start
```

This app is not interactive yet.

## Built With

* ReactJS
* HTML
* CSS
* JSX
* npmjs
* Atom
* Webpack
* Babel

## Notes

```
FAVICON: Tried to implement the React favicon into browser header.
ISSUE -  Installed react favicon dependency but could not find the right icon or link syntax.
SOLUTION - Scrapped.

BEERLIST BORDER: Tried to set borders around each beer component, with small margins between them.
ISSUE -  Had a border containing all three beers, but margin would only create an empty box underneath entire beer list container.
SOLUTION - Removed extra <div> in OnTap.jsx and container styling from BeerList.jsx.

BEER BACKGROUND COLORS: Tried to set the individual background colors of the beer components using CSS modules.
ISSUE -  Set up CSS module for background colors in both BeerList.jsx and OnTap.jsx but couldn't figure out how to individually set colors.
SOLUTION - Used CSS object to set background colors.

FONT STYLE: Tried to match title and header fonts to match AngularJS version.
ISSUE -  Font family styles available in HTML were not available in JSX, did not attempt to install googleFont dependencies as suggested on StackOverflow. Left fonts looking different, but still similar.
SOLUTION - Scrapped.

LINT-FIX: Tried to use linter to fix indentation errors.
ISSUE -  Console reported that in many places text indentation was off by small amounts. However, using lint-fix caused many of these errors to worsen, yet would report them resolved.
SOLUTION - Manually fixed indentation errors, ignored linter.
```

## Author

* **Matt Nardoni** -*Main Contributor*- [React Brewery](https://github.com/react-week-one)

## License

This project is licensed under the MIT License
