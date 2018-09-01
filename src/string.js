time.getFullYear() + '-' + ((time.getMonth() + 1) > 10 ? (time.getMonth() + 1) : (time.getMonth() + 1).toString().padStart(2, '0')) + '-' + (time.getDate() > 10 ? time.getDate() : time.getDate().toString().padStart(2, '0'));



function getCurrentDate () {
    const time = new Date();
    const padZero = number => number > 10 ? number : number.toString().padStart(2, '0');
    let year = time.getFullYear();
    let month = padZero(time.getMonth() + 1);
    let date = padZero(time.getDate());

    return `${year}-${month}-${date}`;
}

tag`Hello ${ a + b } world ${ a * b }`;

tag(['Hello ', ' world ', ''], a + b, a * b);


abc`Today is ${getCurrentDate()}, today is a good day, remember today is ${getCurrentDate()}`
abc(['Today is ', ', today is a good day, remember today is ', ''], getCurrentDate(), getCurrentDate());









































function getCurrentDate () {
    const time = new Date();
    const padZero = number => number > 10 ? number : number.toString().padStart(2, '0');

    const year = time.getFullYear();
    let month = padZero(time.getMonth() + 1);
    let date = padZero(time.getDate());

    return `${year}-${month}-${date}`;
}