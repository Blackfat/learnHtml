var counter = {
    count: 0
};

/*
JavaScript中的this是动态的，指向函数的运行环境
1.在全局环境中使用this，指向的就是顶层对象window
2.在构造函数中使用this，指向的就是实例对象
3.在嵌套函数中，this最好使用临时对象保存
JavaScript 提供了严格模式,如果函数内部的this指向顶层对象，就会报错。
*/
counter.inc = function(){
    'use strict';
    this.count++;
}

var f = counter.inc;

f();

/*
绑定this的方法JavaScript提供了call、apply、bind这三个方法，来切换/固定this的指向。
1.函数实例的call方法，可以指定函数内部this的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。
  call方法的参数，应该是一个对象。如果参数为空、null和undefined，则默认传入全局对象。
2.apply方法的作用与call方法类似，也是改变this指向，然后再调用该函数。唯一的区别就是，它接收一个数组作为函数执行时的参数
3.bind方法用于将函数体内的this绑定到某个对象，然后返回一个新函数。
*/


/*
构造函数继承
*/

function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};


// 第一步，子类继承父类的实例,子类实例具有父类实例的属性
function Rectangle() {
  Shape.call(this); // 调用父类构造函数
}

// 第二步，子类继承父类的原型
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;





