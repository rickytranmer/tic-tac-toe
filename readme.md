<!--
Market: SF
-->

[https://rickytranmer.github.io/tic-tac-toe/](https://rickytranmer.github.io/tic-tac-toe/)

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)


# Tic Tac Toe Javascript
<figure>
  <img src="http://i.giphy.com/J0KMRPYbwWru0.gif" alt="DOM Tree">
</figure>

## Introduction

This week, we have been learning about writing functions, working with
loops, and writing conditionals. We also learned about how HTML elements are styled and behave in the DOM.

For this lab, you'll be building a tic tac toe game in HTML, CSS, and pure JavaScript, that can run in your browser!

## Exercise

#### Requirements

- Solution should use **ONLY jQuery or vanilla JavaScript** - not some combination thereof
- Users should see a 3x3 grid for the tic-tac-toe board
- A user should be able to click on different squares to make a move
- Every click will alternate between marking an `X` and `O`
- Upon marking of an individual cell, use JavaScript to add a class to
  each cell to display separate colors (either background or text--both is better)
- A cell should not be able to be replayed once marked
- A user should be able to see if `X` or `O` won the game
- Add a reset button that will clear the contents of the board
- Deploy your game online, using GitHub pages.  If you're not sure how to do this, refer back to [the earlier GitHub lesson](https://github.com/den-materials/git-branching-and-pages).

---

- Here are some __tips/hints__ to get started:

 - Construct a `index.html` to be your starting point on this
 project. Add your necessary HTML tags, including `script` and
 `link` tags to link to your JavaScript and CSS, respectively.

 - Before you even start working with JavaScript, construct the
 gameboard. The gameboard page should include the 3x3 grid and at
 minimum, a reset button. Using `id` and `class` on clickable
 elements will help you wire this up in JavaScript afterwards.

 - JavaScript portion will be next:

   * Locate the element first to use it within your app. Think about
      using `document.getElementById`, `document.getElementsByClassName` or something similar to locate your target elements. Try this in your console to make sure your selection works.

   * After finding the elements, start writing logic to listen for
      `click` events on those elements

   * You will also need a variable to keep track of moves - this
      will be used to indicate whether or not to draw an `X` or an `O`.

**Bonus:**
- Display a message if neither `X` or `O` won the game (all squares have been played with no winner)
- Display a message at the beginning of the game telling `X` or `O` to go first.
- Alert the winner if they have won three in a row
    * Hint: Determine a set of winning combinations. Check those
      combinations on the board contents after every move.
- Add a scoreboard!
- Add some basic animations using [CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)


#### Starter code

There is no starter code provided for this lab.

#### Deliverable

Feel free to get creative with how you style your interface. Here are some basic examples:

![Screen-shot](https://i.imgur.com/kz2L9f9.png)
![Screen-shot](https://i.imgur.com/d8lFshD.png)
![Screen-shot](https://i.imgur.com/Jw6hhcA.png)

An Alternative UI:

![](http://i.giphy.com/maSr1dPOf7Qac.gif)

#### Additional Resources

- [MDN docs on the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [More MDN docs on events](https://developer.mozilla.org/en-US/docs/Web/Events)

### Self Evaluation

During the previous exercise, rate your progress on a scale of 1-5 (5 being the highest) for the following criteria:

- **Persistence:** Do you handle frustration well? Do you independently pursue understanding?
- **Organization:** Do you thoughtfully implement best coding patterns and practices?
- **Collaboration:** Do you make an effort solve problems and share your ideas with others?
- **Communication:** Do you clearly convey your thoughts to others in illustrative and clear ways?
- **Self-compassion:** Do you make productive use of turning failures into learning opportunities?
- **Resourcefulness:** Do make an effort to compare and contrast new ideas with ones you already know? 

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
