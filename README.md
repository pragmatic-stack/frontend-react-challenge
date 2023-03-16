# Breaking Bad logo generator challenge

![Drag Racing](public/img/breaking_bad_example.png)

## Given
- An array of periodic element strings that
  - contains strings with 2 chars like `Br`
  - contains strings with 1 char like `B`
- A component with 2 input fields and basic markup.

##  Challenge
### Extend the logo generator component that it

 - handles user input on the 2 input elements
 - checks each input value for the **first** occurrence of a periodic element string
 - renders prepared input values in 2 lines (the logo)
 - highlights the first found periodic element for each logo line

The component to extend is located in `src/challenges/BreakingBadGenerator.tsx`.

## Hints

### Best way to walk through this challenge is to:
1. Implement basic input handling
2. Implement value preparation for periodic occurrences
3. Implement rendering of the logo and styling

### Setup
- The project is setup with cra, typescript and jest.
- The app renders your component on the root route.

### Welcome
- Creation of components and utilities is welcome to separate concerns.