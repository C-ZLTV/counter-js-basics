# Counter - Cristina Zlatov

![BANNER](img/banner.png)

This is my second project built for the online Frontend Developer course by [Start2Impact](https://www.start2impact.it/). The project regards the JavaSCript Basics part of the course.

## Table of contents

- [Overview](#overview)
  - [The task](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The task

The task is to develop a JavaScript application that allows users to increase and decrease the counter's value. Any other functionalities can be added at will and if seen fit.

### Links

- URL: [Live Website URL](https://javascript-basics-counter.netlify.app/)

## My process

I started by creating the majority of the HTML markup with JavaSCript. That includes all the p elements and button elements.

Working my way through from top to bottom, I created a date function that generates the current date. Then included this function into setInterval() with an interval of 1000ms so the date can change every second.

I proceeded by including a greeting based on the hours of the day with an if statement.

The counter was made possible by assigning an outer variable to 0 and reassigning it whenever a click event listener was triggered. In total, there are three click events that control the counter, one per button.

Once the main logic was done, I got ahead and worked on the styling with vanilla CSS given the small dimensions of the application.

Finally, using CSS variables and the toggle() method, I implemented a Light Mode and a Dark Mode in the application.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flex-box
- Mobile-first workflow
- JavaScript

### What I learned or got more details on

CSS variables sometimes can be more flexible than Sass variables.

Sass variables are scoped to the declarative block they are defined in, while CSS variables are scoped globally.

Furthermore, Sass variables can't be reassigned, while CSS variables can have different values for different elements.

This makes CSS variables easier to work with in very small applications like this one, but quite unpredictable in big applications.

```css
body {
  --main_color: #1c3fbbff;
  --accent_color: #83a4fd;
  --button_text_color: var(--main_color);
  --button-bg-color: var(--accent_color);
  --link-text-color: var(--accent_color);
  --transition: 0.3s;
  background-color: var(--main_color);
  color: var(--accent_color);
  font-family: "Press Start 2P", cursive;
  transition: var(--transition);
}

body.dark {
  --main_color: #000000;
  --accent_color: #7af9c3;
  --button_text_color: var(--main_color);
  --button-bg-color: var(--accent_color);
  --link-text-color: var(--accent_color);
  background-color: var(--main_color);
  color: var(--accent_color);
}

.btn {
  background-color: var(--button-bg-color);
  color: var(--button_text_color);
}
```

JavaScript variables are also quite interesting. Creating a counter shows how they hang onto the last value thrown at them.

```javascript
resetBtn.addEventListener("click", () => {
  counterValue = 0;
  counter.innerText = counterValue;
});
```

Even if "currentValue" was initially and globally assigned to 0 it held the last value from the "up" and "down" buttons' manipulation.

The only way to reset the value was to reassign it to 0 again.

### Useful resources

- [30 Days of JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript)
- [Javascript.info](https://javascript.info/) -

## Author

- Twitter - [Cristina Zlatov](https://twitter.com/zlatov_cristina)
- Linkedin - [Cristina Zlatov](https://www.linkedin.com/in/cristina-zlatov/)

## Acknowledgments

Finally I'd like to thank Start2Impact for inspiring me to take on their course in the first place and making me feel comfortable while learning everything from 0.
