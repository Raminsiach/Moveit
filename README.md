# Moveit SVG path animator


> Moveit is in active development phase. It is a library that you can use in order to animate SVG path in your html.

Move it is an open source javascript library to animate SVG path using SVG strok dasharray and stroke dashoffset attributes.
* Pure javascript
* Utilizing css transitions
* No Javascript animation code

### Quick start

> Checkout these two examples to see how the effect works.

1. [SVG animated burger menu](http://www.kodhus.com/kodity/kod/codify/LLZbtj/layout/0)
2. [Animated success Icon](http://kodhus.com/library/moveit-demo/)



Include [`Moveit.js`](/Moveit.js) in your project. Then in your html's body add following code:

```html
<svg width="400" height="400">
  <circle id="circle" cx="100" cy="100" r="40" fill="none" stroke="#000" stroke-width="4"></circle>
</svg>
```

Now in javascript add following code. It first set the initial size of the circle path and then animates it.
```javascript
Moveit.put(circle, {
  start: '0%',
  end: '14%'
});
Moveit.animate(circle, {
  start: '0%',
  end: '100%',
  duration: 0.6,
  delay: 0,
  timing: 'ease-out'
});
```




# Table of Contents
* [Usage](#usage)
* [Frequently Asked Questions](#frequently-asked-questions)
* [Support, Questions, Contributions or Feedback](#support-questions-contributions-or-feedback)


## Usage
> Setting Start and end of the visible portion of the full svg path:

```
Moveit.put('YOUR SVG PATH', {
  start: 'start perentage of the path%',
  end: 'end percentage of the path%',
  duration: [Duration in second(s)],
  timing: 'ease-in' | 'ease-out' | 'ease-in-out' | 'cubic-bezier'
});
```
> Animating SVG path:
```
Moveit.put('YOUR SVG PATH', {
  start: '0%',
  end: '14%'
});
```
```

## Frequently Asked Questions
* Can I use external javascript aimation libraries to use different timing functions such as Elasticity, etc?
  * Due to performace, we avoided implementing this. At the moment we only support css timing functions including ease-in, ease-out, ease-in-out, cubic-bezier.

## Support, Questions, Contributions or Feedback?
> The lead maintainer is Kodhus [Kodhus](mailto:kodhus@kodhus.com), please send any questions to [kodhus@kodhus.com](mailto:kodhus@kodhus.com).

* [Youtube: FrontendTips](https://www.youtube.com/channel/UC0abAX9cuVB0klLobCewq-g)
