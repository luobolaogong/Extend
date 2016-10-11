//L.Draw.Polyline

var o = {}; 
goog.object.extend(o, {
  a: 0, b: 1
}); 
o; // {a: 0, b: 1} 
goog.object.extend(o, {b: 2, c: 3}); 
o; // {a: 0, b: 2, c: 3}
console.log('done');