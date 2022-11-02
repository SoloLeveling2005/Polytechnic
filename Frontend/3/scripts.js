// Задание 1
class Point{
    constructor(x,y) {
        this.x = x
        this.y = y
    }

}

class Segment{
    constructor(beginPoint,endPoint) {
        this.beginPoint = beginPoint
        this.endPoint = endPoint
    }

}

let reverse = function(data) {
    return new Segment(data.endPoint, data.beginPoint);

}


const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);
 
const segment = new Segment(beginPoint, endPoint);
const reversedSegment = reverse(segment);

console.log(
    segment.beginPoint.x,
    segment.beginPoint.y,
    segment.endPoint.x,
    segment.endPoint.y,
);// => 1 10 11 -3
   
console.log(
    reversedSegment.beginPoint.x,
    reversedSegment.beginPoint.y,
    reversedSegment.endPoint.x,
    reversedSegment.endPoint.y,
  
); // => 11 -3 1 10











console.log("\n\n\n\n\n")
// Задание 2

class Cart{
    constructor(){
        this.items = []
    }
    addItem(item, count) {
        this.items.push({"item":item,"count":count})
    }
    getItems() {
        return this.items 
    }
    getCost() {
        let summ = 0
        for (let i of this.items) summ += Number(i["count"]) * Number(i["item"]["price"]);
        return summ
    }
    getCount() {
        let coll = 0
        for (let i of this.items) coll += Number(i["count"]);
        return coll
    }
}

const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
console.log(cart.getItems().length); // 2
console.log(cart.getCost()); // 35
console.log(cart.getCount()); // 7 :)
