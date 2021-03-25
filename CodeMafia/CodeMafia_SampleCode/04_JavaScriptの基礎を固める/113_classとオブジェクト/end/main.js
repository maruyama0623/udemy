const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        console.log('hello');
    }
}

class MyObj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log('hello');
    }
}

const obj2 = new MyObj();

console.log(obj2);

obj.printFullName();
obj2.printFullName();


class Car {
    constructor(maker,color,name,price){
        this.carMaker = maker;
        this.carColor = color;
        this.carName = name;
        this.carPrice = price; 
    }
    printFullName(){
        console.log(`あなたは${this.carMaker}の${this.carColor}の${this.carName}を${this.carPrice}で購入しました`);
    }
}

const maruyama = new Car("Matsuda","white","CX-5","200万円");

maruyama.printFullName();

console.log(maruyama.carMaker)


