Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
  for (let i =0; i < this.length; i++){
        let currentElement = this[i]
        let check = callback(currentElement, i, this);
        if (check){
          newArray.push(currentElement);
        }
      }
    // Only change code above this line
    return newArray;
  };