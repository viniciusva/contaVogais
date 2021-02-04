function contaVogais(frase){
    const vogais = 'aeiou'
    let numeroDeVogais = 0;

    for (let i = 0; i< frase.length; i++){
        const letra = frase[i]. toLowerCase();
        if (vogais.includes(letra)){
            numeroDeVogais++;
        }
    }
    console.log('total', numeroDeVogais);
}

contaVogais("Marcos Henrique Maia Oliveira")