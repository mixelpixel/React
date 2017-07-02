# LESSON THREE LECTURE NOTES
- Flexbox: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes
- Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## [@32s](https://youtu.be/ULx7gruIh20?t=32s) **Native Global Functions: `setInterval` & `setTimeOut` review of Homework 2**

## [@4m30s](https://youtu.be/ULx7gruIh20?t=4m30s) **The Clock Problem: review of Lecture 2**
#### [@10m](https://youtu.be/ULx7gruIh20?t=10m) **Update every second**
- update every second with setInterval and change the state of the component
- passing an object vs. callback
#### [@12m43s](https://youtu.be/ULx7gruIh20?t=12m43s) **Alternative Solutions**
- life cycle methods
- React component lifecycle: https://facebook.github.io/react/docs/react-component.html
- componentWillMount keeps the interval action out of the constructor
#### [@14m35s](https://youtu.be/ULx7gruIh20?t=14m35s) **Alternative Solutions pt.2**
- Better design pattern

## [@17m](https://youtu.be/ULx7gruIh20?t=17m) **Card Layout example**
## [@18m](https://youtu.be/ULx7gruIh20?t=18m) **Components: breaking down a page**
## [@21m39s](https://youtu.be/ULx7gruIh20?t=21m39s) **Create a Feed Scroll with Card Components**
- Prjoect name: "[feed](Lecture3/feed)"
- Basic App setup with a Feed and a Card component
#### [@24m48s](https://youtu.be/ULx7gruIh20?t=24m48s) **Add Some Style**
- import App.css to Feed.js and Card.js
- Card.js `<div className="card">`
#### [@27m05s](https://youtu.be/ULx7gruIh20?t=27m05s) **Centering with FLEXBOX**
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- NOTE: older browsers & IE as red-headed step-child...
- [@29m31s](https://youtu.be/ULx7gruIh20?t=29m31s): `{display: flex;}`
```css
.feed {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

#### [@32m](https://youtu.be/ULx7gruIh20?t=32m) **Add more Cards**
- add a second card with margins
#### [@33m](https://youtu.be/ULx7gruIh20?t=33m) **Iterating Cards Dynamically**
- dummy data array to work with
- making a card per array item
#### [@37m23s](https://youtu.be/ULx7gruIh20?t=37m23s) **Passing array values into the Card components**
- map the array values into Feed.js per the array keys
- use {this.props....} in Cards.js to handle the data Feed gets
#### [@40m27s](https://youtu.be/ULx7gruIh20?t=40m27s) **static propTypes**
- restricting allowed/acceptable data types, more secure
