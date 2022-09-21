let box = document.getElementById("box");
// console.log(box.className);
box.className += " dim"; //added dim class--added extra space before dim for differentiation

// console.log(box.classList); --tell all class in array and we can access using for loop
// box.classList.add("dim"); --can be done in this manner too

// box.classList.remove("dim"); --will remove that class
// box.classList.replace("color", "dim"); --replace color class with dim
// box.classList.contains('dim'); --checks if class is present
// box.classList.toggle("dim"); --if dim present then remove and if not there then add