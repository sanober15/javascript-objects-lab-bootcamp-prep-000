var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]:value});
}

function deleteFromObjectByKey(object, key){
  var x = Object.assign({}, object);
  x;
      delete x.key;
      x;
      return x;
  }
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  object;
  return object;
}
