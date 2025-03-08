let x = 1;

function fn2() {
    let x = 2;
    console.log(x)
    x = 200
    console.log(x)
}

function fn3() {
    let x = 3;
    console.log(x)
    x = 300;
    console.log(x)
}

function fn1() {
    console.log(x)
    x = 100;
    console.log(x)
}

fn1()
fn2()
fn3()