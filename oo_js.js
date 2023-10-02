//Programadores 
function Funcionario(nome, idade, setor, cargo, remuneracao) {
    this.nome = nome;
    this.idade = idade;
    this.setor = setor;
    this.cargo = cargo;
    this.remuneracao = remuneracao;
}

function Estagiario(nome, idade, setor, cargo, remuneracao, tempoestagio, avaliacao){
    Funcionario.call(this, nome, idade, setor, cargo, remuneracao);

    this.tempoestagio = tempoestagio;
    this.avaliacao = avaliacao;
}

function Candidato_estagiario(nome, idade, setor, cargo, remuneracao, fase){
    Funcionario.call(this, nome, idade, setor, cargo, remuneracao);

    this.fase = fase;

}

function Freelancer(nome, idade, setor, cargo, remuneracao, meses_servico){
    Funcionario.call(this, nome, idade, setor, cargo, remuneracao);

    this.meses_servico = meses_servico;
}

const joao = new Funcionario("Joao Castro Alves", 52, "Back-end","Supervisor", 15320);
const andressa = new Estagiario("Andressa Aguiar", 20, "RH", "Supervisor", 2300, 3, 9);
const thamires = new Candidato_estagiario("Thamires Aquino", 24, "Front-end", "candidata", 0, 3);
const luana = new Freelancer("Luana Maia", 32, "Data Base", "Freelancer", 9000, 5);


console.log("Programadores: ");
console.log(joao);
console.log(andressa);
console.log(thamires);
console.log(luana);
