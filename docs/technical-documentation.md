# Technical Documentation – Assignment 2

## 1. Project Overview

This project is an enhanced version of the personal portfolio website developed in Assignment 1.  
The objective of Assignment 2 was to improve the website by adding interactivity, dynamic behavior, animations, and user feedback using JavaScript.

The system demonstrates modern front-end development practices, including dynamic content filtering, form validation, user feedback messaging, and smooth visual transitions.

The project maintains a clean structure and builds directly on the previous assignment rather than creating a new system.

---

## 2. Project Architecture

The application follows a modular file structure to separate responsibilities:

- **HTML** → Defines the structure and content of the website
- **CSS** → Controls styling, layout, and animations
- **JavaScript** → Handles interactivity and dynamic behavior
- **Assets** → Stores images used in the project
- **Docs** → Contains project documentation

This separation improves readability, maintainability, and scalability.

---

## 3. Dynamic Content Implementation

### Project Search Filter

The website includes a dynamic search feature that allows users to filter projects in real time based on text input.

The feature works as follows:

1. The user types into the search input field.
2. JavaScript listens for the `input` event.
3. Each project card is checked to see if it contains the typed text.
4. Matching projects remain visible.
5. Non-matching projects are hidden.
6. If no matches are found, a message is displayed.

Example logic:
searchInput.addEventListener("input", () => {
const searchText = searchInput.value.toLowerCase();
});


This feature demonstrates dynamic content updates based on user interaction.

---

## 4. Data Handling

### Form Validation

The contact form includes basic validation using JavaScript to ensure required fields are completed before submission.

Validation checks:

- Name field is not empty
- Email field is not empty
- Message field is not empty

If validation fails:

- An error message is displayed
- Form submission is prevented

If validation succeeds:

- A success message is shown
- The form resets

Example logic:
event.preventDefault();


This ensures controlled form behavior without requiring a backend system.

---

## 5. User Feedback and Error Handling

The application provides clear communication to users during interactions.

Implemented feedback messages include:

- **Searching...** → displayed while filtering projects
- **No projects found** → displayed when no search results match
- **Please fill in all fields** → displayed when form input is invalid
- **Message submitted successfully** → displayed after valid submission

These messages improve usability and user understanding.

---

## 6. Animation and Transitions

Simple animations were implemented to enhance the user experience without affecting performance.

Implemented animations:

- Hover effect on project cards
- Smooth transition movement when hovering
- Fade-in animation for project elements

Example CSS behavior:
.project-card:hover {
transform: translateY(-5px);
}


These animations provide visual feedback and make the interface feel more responsive and modern.

---

## 7. Theme Persistence (Local Storage)

The application stores the user's theme preference using `localStorage`.

Behavior:

1. The user toggles between light and dark mode.
2. The selected theme is saved in local storage.
3. When the page reloads, the saved theme is automatically applied.

This improves user experience by maintaining preferences across sessions.

---

## 8. Responsive Design

The layout adapts to different screen sizes using CSS Grid, Flexbox, and media queries.

Responsive behavior includes:

- Two-column project layout on larger screens
- Single-column layout on smaller screens
- Flexible navigation alignment
- Consistent spacing across devices

Example breakpoint:
@media (max-width: 850px)


This ensures compatibility across desktop, tablet, and mobile devices.

---

## 9. Performance and Compatibility

The application is designed to be lightweight and efficient.

Performance considerations:

- Minimal JavaScript usage
- No heavy external libraries
- Optimized animations
- Simple DOM manipulation
- Fast loading time

Compatibility:

The website functions correctly on modern browsers, including:

- Chrome
- Edge
- Firefox
- Safari

---

## 10. Limitations

The current system has the following limitations:

- The contact form does not connect to a backend server
- The project list is static and stored locally
- The search feature does not use advanced filtering algorithms
- No external database is used

These limitations are acceptable for a front-end portfolio application.

---

## 11. Future Improvements

Possible future enhancements include:

- Backend integration for form submission
- Database-driven project management
- Advanced search filtering
- Additional animations
- Deployment to a live hosting platform
- Integration with external APIs

These improvements would expand the system into a more advanced web application.

---

## 12. Conclusion

Assignment 2 successfully extends the functionality of the original portfolio website by introducing interactive features, user feedback mechanisms, and smooth animations.

The implementation demonstrates understanding of:

- JavaScript interactivity
- Event handling
- DOM manipulation
- User experience design
- Responsive web development
- Clean code structure
