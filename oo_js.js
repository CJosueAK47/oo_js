function Funcionario(nome, idade, setor, cargo, remuneracao) {
    this.nome = nome;
    this.idade = idade;
    this.setor = setor;
    this.cargo = cargo;
    this.remuneracao = remuneracao;
}

function Estagiario(nome, idade, setor, cargo, remuneracao,tempo_estagio, avaliacao){
    this.tempo_estagio = tempo_estagio;
    this.avaliacao = avaliacao;

    Funcionario.call(this, nome, idade, setor, cargo, remuneracao)
}

const joao = new Funcionario("Joao Castro Alves", 52, "Aciaria","Supervisor", 5320);
//const andressa = new Estagiario("Adressa Aguiar", 20, "RH", 1300, 3, 9.0);

console.log(joao);
//console.log(andressa);