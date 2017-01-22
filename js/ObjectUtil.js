

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


/*
1.确保拷贝后的对象，与原对象具有同样的prototype原型对象
2.确保拷贝后的对象，与原对象具有同样的属性
*/
function copyObject(orig){
    var copy = Object.create(Object.getPrototypeOf(orig));
    copyOwnPropertiesFrom(copy,orig);
    return copy;
}

function copyOwnPropertiesFrom(target, source){
    Object.getOwnPropertyNames(source).forEach(
    function(propKey){
        var desc = Object.getOwnPropertyDescriptor(source, propKey);
        Object.defineProperty(target,propKey,desc);
    }
    );
}

