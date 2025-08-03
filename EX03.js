let numero = 0
let maior = 0


for (i=2; i<= Math.sqrt(600851475143); i++) {
    if (600851475143 % i == 0) {
        for (c=2; c<i; c++) {
            if (i % c == 0) {
                break
            }
        }
        if (c == i) {
            if (i > maior) {
                maior = i
            }
        }

    }
}

console.log(`${maior}`)