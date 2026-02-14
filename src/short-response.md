Short Response Questions
========================

Answer the following questions in 2-4 sentences each. Be specific and use vocabulary from the lessons. Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

Question 1: Loading JavaScript
------------------------------

Examine the HTML code below:

    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Button Clicker</title>
        <link rel="stylesheet" href="style.css" />
        <script src="index.js"></script>
      </head>
      <body>
        <h1>Button Clicker</h1>
        <button id="my-button">Click Me!</button>
      </body>
    </html>

In the `index.js` file, they have the code:

    document.querySelector('#my-button').style.color = 'red';

But an error is thrown.

1.  What is the error (be specific)?
    
2.  Why does this error occur?
    
3.  What can be done to fix it?
    

**Your Answer:**

*   The error is a **TypeError** that says you cannot read properties of `null`.
    
*   This error occurs because the selected element from the `querySelector` has not loaded into the DOM yet, so it returns `null`.
    
*   It can be fixed by moving the `script` tag to the bottom of the `body` element to ensure all HTML elements have loaded into the DOM.
    

Question 2: event.target vs event.currentTarget
-----------------------------------------------

Consider this HTML:

    <div id='button-container'>
      <button>Click Me</button>
    </div>

And this JavaScript:

    const div = document.querySelector('#button-container');
    div.addEventListener('click', (event) => {
      console.log(event.target);
      console.log(event.currentTarget);
    });

When a user clicks the button, both `event.target` and `event.currentTarget` are logged. Explain what each property represents in this scenario and why they might be different.

**Your Answer:**

*   The `event.target` property represents the button element.
    
*   The `event.currentTarget` property represents the **button-container** `div` .
    
*   The difference between the two is that the `target` is the element that triggered the event (click) and the `currentTarget` is the element attached to the **event listener**.
    

Question 3: Creating Elements Dynamically
-----------------------------------------

Look at the JavaScript code below that is attempting to create a product card dynamically and add it to the body.

    const product = {
      name: 'iPhone 17',
      price: 1099.99,
      img: './images/iphone17.png'
    }
    
    /* Desired structure: 
    <div>
      <img src="./images/iphone17.png">
      <h3>iPhone 17</h3>
      <p>$1099.99</p>
    </div>
    */
    
    const productCard = document.createElement('div');
    const productImage = document.createElement('img');
    const productName = document.createElement('h3');
    const productPrice = document.createElement('p');
    
    productImage.src = product.img;
    productName.textContent = product.name;
    productPrice.textContent = `$${product.price}`;
    
    document.body.append(productCard);

However, when the page loads and the code is executed, the user isn't able to see the image, product name or product price. What is the issue with this code?

**Your Answer:**

*   The issue with this code is that the `productImage`, `productName`, and `productPrice` were not appended to `productCard`. Before the `document.body.append(productCard);`, `productCard.append(productImage, productName, productPrice);` should be added to the code to make the card information visible.
    

Question 4: Event Delegation and event.target.closest()
-------------------------------------------------------

Consider this HTML:

    <ul id="todo-list">
      <li id="todo-1">
        <p class='description'>Walk the dog</p>
        <p class='is-complete'>✅</p>
      </li>
      <li id="todo-2">
        <p class='description'>Take out the trash</p>
        <p class='is-complete'>❌</p>
      </li>
      <li id="todo-3">
        <p class='description'>Wash the dishes</p>
        <p class='is-complete'>❌</p>
      </li>
    </ul>

And this JavaScript:

    const todoList = document.querySelector('#todo-list');
    todoList.addEventListener('click', (event) => {
      const clickedLi = event.target.closest('li');
    
      if (!clickedLi) return;
    
      clickedLi.querySelector('.is-complete').textContent = "✅";
    });

1.  What is the name for this approach to event handling? What is the alternative and why is this approach better?
    
2.  Explain what the `event.target.closest('li')` method does and why it is essential to this approach.
    

**Your Answer:**

*   The name of this approach to event handling is **event delegation**. The alternative is to create event handlers for the individual elements, and for efficiency and less repetition, event delegation is better.
    
*   The `event.target.closest('li')` method targets the nearet `li` ancestor to the element that was clicked. It is essential to event delegation because it allows you to correctly select the queried ancestor element even if you click on a nested child element.
    

Question 5: NodeList
--------------------

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1.  What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
    
2.  What is the difference between a `NodeList` and an array? Why is it important to know this difference?
    

**Your Answer**

*   The difference between `querySelectorAll()` and `querySelector()` is that `querySelector()` returns the first element to match the query (`null` if no match), while `querySelectorAll()` returns a static `NodeList` of all the matches.
    
*   The difference between an `array` and `NodeList` is that a `NodeList` is specific to the DOM and holds DOM nodes such as attributes, text, and elements. It is important to know the difference because `NodeLists` are used for DOM manipulation, have their own methods and properties, and arrays cannot be converted into them.