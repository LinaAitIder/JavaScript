let object1 = {
  name : 'lina'
}
const object2 = object1;
console.log(object1);
console.log(object2);
object1 = object2;
object1.name="Choc";
console.log(object1);
console.log(object2);

