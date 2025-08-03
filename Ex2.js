const fibo = [1,1]
let i=0
let soma=0





while (i<31) {
    i++
    fibo.push(fibo[fibo.length -1] + fibo[fibo.length -2])
    console.log(`${fibo}`)
    if (fibo[fibo.length -1]%2=== 0 && fibo[fibo.length -1]<4000000) {
        soma = fibo[fibo.length -1] + soma
    }
}

console.log(`A soma é ${soma}`)