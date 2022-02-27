const Util = {
  
  isCollidedWith(obj1, obj2) {            //assume obj1 is on the left side
    if (obj1.y === obj2.y &&
        obj1.x + obj1.width > obj2.x
    ) { 
      return true
    } else {
      return false
    }
  }
};
  
  
module.exports = Util;