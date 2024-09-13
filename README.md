# Make It Real - Order Summary Card

This is a solution to the Order Summary Card project of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for your device's screen size
- View hover and focus for interactive elements

### Screenshot

![Desktop version](/src/assets/screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool

### What I learned

This project helped me to reinforce the use of BEM, the naming methodology for CSS classes that helps to create reusable and structured components.

```html
  <div className="order-summary-card__content">
    <h1>Order Summary</h1>
    <p>
      You can now listen to millions of songs, audiobooks, and podcasts on
      any device anywhere you like!
    </p>
  </div>
```
```css
  .order-summary-card__content {
	padding-inline: 1.5rem;
  }

  .order-summary-card__content h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--dark-blue);
  }

  .order-summary-card__content p {
    font-size: clamp(0.875rem, 1rem, 1.125rem);
    font-weight: 500;
    color: var(--desaturated-blue);
  }
```

### Continued development

Working on this project made me realize the importance of using BEM to style components, as it is a methodology widely used in the web development industry.

### Useful resources

- [BEM — Block Element Modifier](https://getbem.com/) - This website has all the information to learn BEM, and has examples for a better understanding.

## Author

- Website - [Heberth López](https://www.heblopez.web.app)

## Acknowledgments

A special thanks to the MakeItReal team for the knowledge and support provided in each class and the feedback received on each project.