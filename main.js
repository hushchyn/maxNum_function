function maxNum(...arg) {
    let num = 0;
    for (let i = 0; i <= arg.length; i++) {
        if (arg[i] > num) {
            num = arg[i];
        }
    }
    console.log(num);
}
maxNum(1, 2, 3, 4, 202, 5, 6, 7, 8, 100);
