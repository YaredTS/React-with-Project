// How to style react components with CSS
// ------------------------------------------------
// (Not including external frameworks or preprocessors)

// 1.External

 /* they are easy to use for simple project it gives you flexibility media queries and pseudo selectors  */

 /* you can use external style sheet to apply global styles thoughout your web application
 - however using external style sheet can lead to naming conflicts especially when you have more components and classes to work with */

// 2.Modules

// its like creating dedicated css stylesheet specifically for each component 
// 1st you create new folder in src specifically for there component
// 2nd drag the component to the folder and update the import button/button.jsx meaning you are importing the component button.jsx from the button directory
// it avoids naming conflict 

// 3rd create file css file dedicated to that component

// 3.Inline

import Button from "./Button/Button.jsx"

function App() {
  return(
    <Button/>
  ); 
}

export default App
