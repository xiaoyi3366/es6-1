function foo({ x, y = 5 }) {
    console.log(x, y);
}

foo({})
foo({ x: 1 })
foo({ x: 1, y: 2 })
foo()


// 写法一
function m1({ x = 0, y = 0 } = {}) {
    return [x, y];
}

// 写法二
function m2({ x, y } = { x: 0, y: 0 }) {
    return [x, y];
}


// 函数没有参数的情况
m1()
m2()

// x 和 y 都有值的情况
m1({x: 3, y: 8})
m2({x: 3, y: 8})

// x 有值，y 无值的情况
m1({x: 3})
m2({x: 3})

// x 和 y 都无值的情况
m1({})
m2({})

m1({z: 3})
m2({z: 3})


var x = 1;

function f(x, y = x) {
  console.log(y);
}

f(2) // 2


let foo = 'outer';

function bar(foo, func = () => foo) {
  foo = 'inner';
  console.log(func());
}

bar(123); // outer


function abc (a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(a);
    console.log(b);
    console.log(c);
}
abc(1, 2, 3)

let getTempItem = id => { id: id, name: "Temp" }

function getTempItem (id) {
    id: id,
    name: "Temp"
}

let getTempItem = id => ({ id: id, name: "Temp" })

function getTempItem (id) {
    return {
        id: id,
        name: "Temp"
    }
}


let aaaaa = {
    abc () {
        alert(1)
    },
    def () {
        // var self = this;
        // setTimeout(function () {
        //     self.abc();
        // }, 1000);
        setTimeout(() => void this.abc(), 1000)
    }
}

aaaaa.def();


const xxx = abc => ccc => bcd => abc => 1;

const xxx = function (abc) {
    return function (ccc) {
        return function (bcd) {
            return function (abc) {
                return 1;
            }
        }
    }
}

xxx(123)(123)(24)(52525)


var id = 1;
function getId () {
    return this.id;
}
getId();
getId.apply({id: 5})

// apply 和 call 需要记笔记  bind
// https://blog.csdn.net/ganyingxie123456/article/details/70855586

getId.bind({id: 5});


getId();