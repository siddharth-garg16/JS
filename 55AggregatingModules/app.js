// from shape.js which is interacting with circle, rectangle, triangle and then interact with app.js
// import {circle} from "./modules/shapes/circle.js";
// import {rectangle} from "./modules/shapes/rectangle.js";
// import {triangle} from "./modules/shapes/triangle.js";
//this violates DRY principle if there are say 100 files in modules

//we can do modular approach and aggregate moduling--using shape.js
import {circle, rectangle, triangle} from "./modules/shape.js";


circle();
rectangle();
triangle();