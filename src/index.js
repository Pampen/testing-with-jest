import * as stack from './stack.js';

window.onload = () => {
  console.log("done")

  var pop = document.getElementById('pop');
  var push = document.getElementById('push');
  var peek = document.getElementById('peek');
  var display = document.getElementById('top_of_stack');

  pop.addEventListener("click", () => {
      var text = "Tog bort " + stack.pop();
      alert(text);
  });

  push.addEventListener("click", () => {
      var x = prompt("Vad ska vi lägga på stacken?");
      stack.push(x);
      display.innerHTML = x;
  });

  peek.addEventListener("click", () => {
      display.innerHTML = stack.peek();
  });
}
