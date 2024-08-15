function calcular(formulario){    
    let idade1 = formulario.idade1.value;
    let idade2 = formulario.idade2.value;
    let idade3 = formulario.idade3.value;
    let idade4 = formulario.idade4.value;
    let idade5 = formulario.idade5.value;

    let idade = [idade1, idade2, idade3, idade4, idade5];

    let resultado = document.getElementById("resultado");
    let menor = 0;
    let adulto = 0;
    let acima = 0;  

    for(let i = 0; i < idade.length; i++){

        if(idade[i] <= 15){
            menor++;
        }

        else if(idade[i] > 16 && idade[i] <= 40){
            adulto++;
        }

        else if(idade[i] > 40){
            acima++;
        }
    }

    resultado.innerHTML = "Até 15 anos: " + menor + "\nDe 16 a 40 anos: " + adulto + "\nAcima de 40: " + acima;

}