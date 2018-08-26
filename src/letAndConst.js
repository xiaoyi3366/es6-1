var a = require('./modules/1');

import a from './modules/1';


function test (a, b) {
    var a = a || 1;
    var b = b || 2;
    return a + b;
}

function test (a = 1, b = 2) {
    return a + b;
}

test();



var tmp = new Date();

function f() {
    var tmp = undefined;
    console.log(tmp);
    if (false) {
        tmp = 'hello world';
    }
}

var a = {
    a: 1,
    b: 2,
    c: '内存A'
}

var b = a;

b.c.a = 2;

a.c.a === 2 // true
const isObject = data => Object.prototype.toString.call(data) === '[Object object]';
let copy = (a) => {
    let c = {};
    for (let key in a) {
        if (isObject(a[key])) {
            c[key] = copy(a[key]);
        } else {
            c[key] = a[key];
        }
    }

    return c;
}

let c = copy(a);

c = {
    a: 1,
    b: 2,
    c: '内存B'
}

'内存A' = {
    a: 1,
    b: 2,
}

const zzz = 'zzz';
let a = {
    xxx: 'yyy',
    zzz,
    test () {
        this.xxx; // yyy
        this.zzz; // zzz
    }
}

function test1 () {
    this // window
}

'use strict'

function test2 () {
    this // undefined
}