// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(`1 , пауза ${Math.random() * (4 - 2) + 2}`), Math.random() * (4 - 2) + 2);
//     setTimeout(() => resolve(`2 , пауза ${Math.random() * (4 - 2) + 2}`), Math.random() * (4 - 2) + 2);
//     setTimeout(() => resolve(`3 , пауза ${Math.random() * (4 - 2) + 2}`), Math.random() * (4 - 2) + 2);
// });


// promise.then(
//     result => alert(result),
//     error => alert(error)
// );









// Задание 2

let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(Math.random() * (6 - 0) + 0), Math.random() * (6 - 0) + 0);
});

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(Math.random() * (6 - 0) + 0), Math.random() * (6 - 0) + 0);
});

let promise3 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(Math.random() * (6 - 0) + 0), Math.random() * (6 - 0) + 0);
});


let pause = 0;


promise1.then(
    result => {
        pause+=Number(result)
        promise2.then(
            result => {
                pause+=Number(result)
                promise3.then(
                    result => console.log(pause+=Number(result)),
                    error => alert(error)
                );
            },
            error => alert(error)
        );
    },
    error => alert(error)
);





// Задание 3



let getNum1 = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(Math.random() * (6 - 0) + 0), 3);
    });
}

let getNum2 = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(Math.random() * (11 - 5) + 5), 5);
    });
}

async function get_numders() {
    

    let get1 = await getNum1(); // будет ждать, пока промис не выполнится (*)
    let get2 = await getNum2(); // будет ждать, пока промис не выполнится (*)
    console.log(`Сумма: ${get1+get2}`); // "готово!"
    
}
    
get_numders();