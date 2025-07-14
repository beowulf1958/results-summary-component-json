# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge
This is a re-do of a previous project. I did it once with vanilla HTML, CSS. Next I did it in Tailwind CSS. This time I wanted to add javascript to the mix in order to fetch the data from the data.json file.

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/docs/installation/tailwind-cli) - CSS framework


### What I learned

- First I marked up the page and added Tailwind CSS v4. This required me to review how to add locally hosted fonts into Tailwind. Used @font-face, then created a CSS variable to use in my Tailwind @theme. I also learned how Tailwind does gradients.

- Once I had created a static site to my liking, it was time to add the javascript. I researched the fetch method, and got it to work. Then I found an alternate way to read data from json that made a lot of sense. [Mazen Salah](https://www.youtube.com/watch?v=w1Oz0Sj1QyQ)"How to read data from a JSON file into HTML | json to html js 2024"

- The biggest challenge was how to style the list-items dynamically. Each category has its own color scheme. I solved this by adding the background-color and text-color to the json file. I learned how to load an icon dynamically in javascript in Tailwind.



To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development

The site looks great in live server; now I have to figure out how to build it for production

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Frontend Mentor - [@beowulf1958](https://www.frontendmentor.io/profile/beowulf1958)


## Acknowledgments

Thank you to @lemz100 for the inspiration to calculate the average of the scores in javascript and display in HTML. Genius move.




