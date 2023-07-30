const NumeroCandidato = {
    CANDIDATO_X: 889,
    CANDIDATO_Y: 847,
    CANDIDATO_Z: 515,
    BRANCO: 0,
  };
  
  const candidatos = {
    [NumeroCandidato.CANDIDATO_X]: { nome: "Candidato X", votos: 0 },
    [NumeroCandidato.CANDIDATO_Y]: { nome: "Candidato Y", votos: 0 },
    [NumeroCandidato.CANDIDATO_Z]: { nome: "Candidato Z", votos: 0 },
    [NumeroCandidato.BRANCO]: { nome: "Branco", votos: 0 },
    nulo: { nome: "Nulo", votos: 0 },
  };
  
  while (true) {
    var inputVoto = window.prompt("Número do candidato (ou 'branco' para voto em branco, ou 'sair' para finalizar a votação): ");
      
    if (inputVoto.toLowerCase() === "sair") {
      break; 
  
    var numeroCandidato;
    var nomeCandidato;
      
    if (inputVoto.toLowerCase() === "branco") {
      numeroCandidato = NumeroCandidato.BRANCO;
      nomeCandidato = "Branco";
    } else {
      numeroCandidato = parseInt(inputVoto);
        
      if (isNaN(numeroCandidato)) {
        window.alert("Apenas números ou 'branco' são aceitos!");
        continue; 
      }
  
    
      if (!(numeroCandidato in NumeroCandidato)) {
        candidatos.nulo.votos++; 
        window.alert("Voto nulo.");
        continue; 
      }
  
      nomeCandidato = candidatos[numeroCandidato].nome;
      candidatos[numeroCandidato].votos++; 
  
    
      window.alert(`Você votou no candidato ${nomeCandidato}, número ${numeroCandidato}.`);
    }
  }
  

  let vencedor = candidatos[NumeroCandidato.BRANCO];
  
  Object.values(candidatos).forEach(candidato => {
    if (candidato.votos > vencedor.votos) {
      vencedor = candidato;
    }
  });
  
  window.alert(`Resultados:
  Votos para o Candidato X: ${candidatos[NumeroCandidato.CANDIDATO_X].votos}
  Votos para o Candidato Y: ${candidatos[NumeroCandidato.CANDIDATO_Y].votos}
  Votos para o Candidato Z: ${candidatos[NumeroCandidato.CANDIDATO_Z].votos}
  Votos em Branco: ${candidatos[NumeroCandidato.BRANCO].votos}
  Votos Nulos: ${candidatos.nulo.votos}
  Vencedor: ${vencedor.nome} com ${vencedor.votos} votos.`);
} 