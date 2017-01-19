

/*
Object函数可以将各种值转换成对应构造函数生成的对象
如果Object函数参数是一个对象，那么它总是返回原对象
*/
function isObject(value){
    'use strict';
    return value === Object(value);
}

/*
Object.prototype.toString可以得到一个实例对象的构造函数
*/
function type(value){
    var s = Object.prototype.toString.call(value);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
}

['Null',
 'Undefined',
 'Object',
 'Array',
 'String',
 'Number',
 'Boolean',
 'Function',
 'RegExp',
 'NaN',
 'Infinite'
].forEach(function(t){
    type['is' + t] = function(value){
        return type(value) === t.toLowerCase();
    }
});

