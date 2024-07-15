# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

A responsive contact form built as part of a Frontend Mentor challenge. This form includes fields for first name, last name, email address, query type, message, and consent checkbox. It features client-side validation and a custom stylesheet (`styles.css`) for styling.

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission which I found somehow not easy.
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Mobile-Design](<./Frontend-Mentor-Contact-form(mobile-design).png>)
![Desktop-Design](<./Frontend-Mentor-Contact-form(Desktop-design).png>)
![Error-Indicators](<./Frontend-Mentor-Contact-form(Errors).png>)
![Success-Indicaors](<./Frontend-Mentor-Contact-form(success).png>)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

1. \*Form Structure\*\*: The HTML (`index.html`) defines a structured form with fields for first name, last name, email, query type (radio buttons), message, and consent checkbox.

2. **Styling**: CSS (`styles.css`) provides layout and styling, ensuring responsive design and visual feedback for user interactions.

3. **Validation**: JavaScript (`index.js`) validates form inputs on submission:

   - Checks required fields (first name, last name, email, message, and consent).
   - Validates email format.
   - Ensures a query type is selected using radio buttons.
   - Displays error messages and highlights fields with issues.

4. **Submission Handling**: Upon successful submission:

   - Displays a success message (`success-message` div) confirming form submission.
   - Success message styled to provide visual confirmation to users.

5. **Accessibility**: Designed with accessibility in mind, including keyboard navigation and screen reader compatibility.

6. **Responsiveness**: Media queries ensure the form adapts well to different screen sizes.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

1. **Form Validation**: Implemented client-side form validation using JavaScript, including handling required fields, email format validation, and radio button selection validation.

2. **CSS Flexbox and Grid**: Utilized CSS Flexbox and Grid for responsive layout design, ensuring the form adapts well across different screen sizes.

3. **Error Handling**: Managed error states dynamically by updating styles and displaying relevant error messages to guide users in filling out the form correctly.

4. **Success Message Display**: Implemented a success message upon form submission, providing visual feedback to users that their submission was successful.

5. **Challenges**: Overcame challenges in synchronizing form validation logic across multiple fields and ensuring consistent styling and behavior across different browsers and devices.

```html
<div id="name-container">
  <div class="wrapper first">
    <label for="first-name">First Name *</label>
    <input type="text" id="first-name" name="first-name" />
    <div class="error"></div>
  </div>
  <div class="wrapper last">
    <label for="last-name">Last Name *</label>
    <input type="text" id="last-name" name="last-name" />
    <div class="error"></div>
  </div>
</div>

<div class="wrapper">
  <label for="email">Email Address *</label>
  <input type="text" id="email" name="email" />
  <div class="error"></div>
</div>
```

```css
@media screen and (min-width: 1300px) {
  .form-card {
    width: calc(100% - 50%);
  }

  #name-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  .wrapper.query-type {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    align-items: center;
  }

  .query-type .second-div {
    margin-top: 8px;
  }

  button {
    width: calc((680 / 720) * 100%);
    margin-bottom: 20px;
  }
}
```

```js
const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "This field is required");
  } else {
    setSuccess(firstName);
  }
  if (lastNameValue === "") {
    setError(lastName, "This field is required");
  } else {
    setSuccess(lastName);
  }
  if (emailValue === "") {
    setError(email, "Email Address please");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "enter a valid email address");
  } else {
    setSuccess(email);
  }
  if (message.value.trim() === "") {
    setError(message, "This feild is required");
    message.style.borderColor = "hsl(0, 66%, 54%)";
  } else {
    setSuccess(message);
    message.style.borderColor = "hsl(169, 82%, 27%)";
  }
  if (!checkBox.checked) {
    document.getElementById("checkboxError").textContent =
      "To submit this form, please consent to be contacted";
  } else {
    document.getElementById("checkboxError").textContent = "";
  }
};
```

### Continued development

I've come to an understanding that I need to do more projects on Javascript cause I have
faced some difficulties working on this project. Therefore I realize that I need to expand
my skills on Javascript.

### Useful resources

- [FrontEnd Mentor](https://www.frontendmentor.io/) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Freecodecamp](https://www.freecodecamp.org/) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Dawit Getahun](https://www.your-site.com)
- Frontend Mentor - [@dawitgetahun055](https://www.frontendmentor.io/profile/dawitgetahun055)

## Acknowledgments

I would like to thank all the available resources out there and people who had given me the guidance
I needed. Thank you!
