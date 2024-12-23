let nickname = "vpaesi"
let nivel = "10.002"
let lvl = ""

if(nivel <= 1.000){
lvl = "Ferro"

//Se XP for entre 1.001 e 2.000 = Bronze
}else if(nivel >1.000 && nivel <=2.000){
lvl="Bronze"

//Se XP for entre 2.001 e 5.000 = Prata
}else if (nivel >2.000 && nivel <= 5.000){
lvl="Prata"

//Se XP for entre 6.001 e 7.000 = Ouro
}else if (nivel >6.000 && nivel <= 7.000){
lvl="Ouro"

//Se XP for entre 7.001 e 8.000 = Platina
}else if (nivel >7.000 && nivel <= 8.000){
lvl="Platina"

//Se XP for entre 8.001 e 9.000 = Ascendente
}else if (nivel >8.000 && nivel <= 9.000){
lvl="Ascendente"

//Se XP for entre 9.001 e 10.000= Imortal
}else if (nivel >9.000 && nivel <= 10.000){
lvl="Imortal"

//Se XP for maior ou igual a 10.001 = Radiante
}else if (nivel >=10.001){
lvl="Radiante"

}

//"O Herói de nome **{nome}** está no nível de **{nivel}**"

console.log ("O Heóri de nome " + nickname + " está no nível de " + lvl)