let nomeJogador = "ikawaFPS";
let xpJogador = -100;
let rank;

switch (true) {
    case xpJogador >= 0 && xpJogador <= 1000:
        rank = "Ferro";
        break;

    case xpJogador >= 1001 && xpJogador <= 2000:
            rank = "Bronze";
            break;

    case xpJogador >= 2001 && xpJogador <= 5000 :
        rank = "Prata";
        break;

    case xpJogador >= 5001 && xpJogador <= 7000:
        rank = "Ouro";
        break;

    case xpJogador >= 7001 && xpJogador <= 8000:
        rank = "Platina";
        break;
    case xpJogador >= 8001 && xpJogador <= 9000:
         rank = "Ascendente";
        break;
    case xpJogador >= 9001 && xpJogador <= 10000:
        rank = "Imortal";
        break;
    case xpJogador >= 10001:
        rank = "Radiante";
        break;

    default:
        rank = "Rank Inválido";
        break;
        
}

console.log("O Herói de nome " + nomeJogador + " está no nível de " + rank);