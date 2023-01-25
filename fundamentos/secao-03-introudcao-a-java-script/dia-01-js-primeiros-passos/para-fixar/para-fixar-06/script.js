let situacaoDoCandidato = 'Lista';

switch (situacaoDoCandidato) {
  case "Aprovado":
    console.log("Parabéns, você foi aprovado(a)!");
    break;

  case "Lista":
    console.log("Você está na nossa lista de espera");
    break;

  case "Reprovado":
    console.log("Você foi reprovada(o)");
    break;

  default:
    console.log("Informação incorreta");
}
