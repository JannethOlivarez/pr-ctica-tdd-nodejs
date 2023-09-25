function fizzbuzz(numero) {
    const divisible= (divisor,numero)=> numero%divisor==0

    if(divisible(3,numero)&& divisible(5,numero)){
        return "FIZZ-BUZZ"
    }
    if(divisible(3,numero)){
        return 'FIZZ';
    }
    if(divisible(5,numero)){
        return "BUZZ";
    }
    return numero;
}
function print(numero){
    for (let i = 0; i <= numero; i++) {
        console.log(`${i}:${fizzbuzz(i)}`)
    }
}

print(16);

module.exports = fizzbuzz;