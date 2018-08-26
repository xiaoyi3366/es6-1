const a = {
    y: 2,
    z: 3,
    toString () {
        console.log(1)
    }
};

let x = a.x || '';
let y = a.y;
let z = a.z;

let { x = '', y, z } = a;  
let { toString: s } = a;

const b = [1, 2, 3];
let ba = b[0];
let bb = b[1];
let bc = b[2];

let [ba, bb, bc, bd = ''] = b;


let a = {
    b: 1,
    c: 2,
    d: {
        e: 3,
        f: {
            g: 4,
        }
    }
}

let { d,d:{ e }, d: { f: { g } } } = a;

var xxxx = [1, 2, 3, 4, 5];

// xxxx.map(item => )
let a=[];
for( let i=0;i<xxxx.length;i++){
    a[i] = xxxx[i]+1;
}
let b = xxxx.map(item => item + 1);


jQuery.ajax = function (url, options) {
    let async = options.async || true;
}


const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let item of map) {
    // item = ['first', 'hello']
    let [key, value] = item;
    console.log(key + " is " + value);
}