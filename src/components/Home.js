import { DpHolder } from "./DpHolder";
import { Navbar } from "./Navbar";
import { Project } from "./Project";
import { Skills } from "./Skills";
import { About } from "./About";
export function Home(){
    return (
        <div className="App">
          <Navbar/>    
          <DpHolder/>
          <About/>
          <Project/>   
          <Skills/>   
        </div>
      );
}
// <!DOCTYPE html>
// <html>
// <style>
// #myContainer {
//   width: 400px;
//   height: 400px;
//   position: relative;
//   background: black;
// }
// #myAnimation-0 {
//   width: 50px;
//   height: 5px;
//   position: absolute;
//   background-color: blue;
// }
// #myAnimation-1 {
//   width: 50px;
//   height: 5px;
//   position: absolute;
//   background-color: white;
// }
// #myAnimation-2 {
//   width: 50px;
//   height: 5px;
//   position: absolute;
//   background-color: blue;
// }
// </style>
// <body>

// <p>
// <button onclick="myMove()">Click Me</button> 
// </p>

// <div id ="myContainer">
// <div id ="myAnimation-0"></div>
// <div id ="myAnimation-1"></div>
// <div id ="myAnimation-2"></div>
// </div>

// <script>
// var id = null;
// function myMove() {
//   var elem = document.getElementById("myAnimation-1");
//   var container = document.getElementById("myContainer");
//   var pos = elem.getBoundingClientRect().left;
//   var top = elem.getBoundingClientRect().top;
//   clearInterval(id);
//   id = setInterval(frame, 10);
//   function frame() {
//     if (pos ==  container.getBoundingClientRect().right) {
//       pos = container.getBoundingClientRect().left;
//     } else {
//       pos++; 
//       elem.style.left = pos + 'px'; 
//     }
//   }
// }
// </script>

// </body>
// </html>