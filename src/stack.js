var _ = require('underscore');

let stack = [];

//Lägger ett element överst i stacken
exports.push = (x) => {
  stack.push(x);
};

//Returnerar det översta elementet i stacken och tar bort det
exports.pop = () => {
  return stack.pop();
};

//Returnerar det översta elementet i stacken
exports.peek = () => {
  return stack[0] ;
};
