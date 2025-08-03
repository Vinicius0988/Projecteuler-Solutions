let soma=0

for (i=0;i<1000;i++) {
    if (i%3 == 0 || i%5==0) {
        soma = i+soma
        console.log(`${i}`)
    }
}
const total = soma
console.log(`${total}`) 