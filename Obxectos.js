const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pregunta(pregunta) {
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => {
      resolve(respuesta);
    });
  });
}

class Disco {
  constructor(nome, grupo, anoPublicacion, tipoMusica, prestado) {
    this.nome = nome;
    this.grupo = grupo;
    this.anoPublicacion = anoPublicacion;
    this.tipoMusica = tipoMusica;
    this.prestado = prestado;
  }

  async cargarDatos() {
    this.nome = await pregunta("   Nome do Disco: ");
    this.grupo = await pregunta("   Grupo de Música: ");
    this.anoPublicacion = await pregunta("   Ano de Publicación: ");
    this.tipoMusica = await pregunta("   Tipo de Música: ");
    this.prestado = (await pregunta("   Prestado (si ou non): ")).toLowerCase() === 'si';
    console.log("");
  }

  amosarInformacion() {
    console.log("   Nome: " + this.nome);
    console.log("   Grupo: " + this.grupo);
    console.log("   Ano de Publicación: " + this.anoPublicacion);
    console.log("   Tipo de Música: " + this.tipoMusica);
    console.log("   Prestado: " + (this.prestado ? "Si" : "Non"));
    console.log("");
  }
}

class ProgramaDiscos {
  constructor() {
    this.discos = [];
  }

  engadirDisco(disco) {
    this.discos.push(disco);
  }

  amosarTodosOsDiscos() {
    console.log("Todos os discos do Array:");
    this.discos.forEach(disco => disco.amosarInformacion());
  }
}

async function main() {
  var disco1 = new Disco("Nome do Disco 1", "Grupo 1", 2000, "Rock", false);
  console.log("Mostrar Disco 1");
  disco1.amosarInformacion();

  var disco2 = new Disco("Nome do Disco 2", "Grupo 2", 2010, "Pop", true);
  console.log("Mostrar Disco 2");
  disco2.amosarInformacion();

  var disco3 = new Disco();
  console.log("Cargas datos do disco");
  await disco3.cargarDatos();
  console.log("Mostrar Disco 3");
  disco3.amosarInformacion();

  rl.close();

  var programaDiscos = new ProgramaDiscos();

  programaDiscos.engadirDisco(disco1);
  programaDiscos.engadirDisco(disco2);
  programaDiscos.engadirDisco(disco3);

  programaDiscos.amosarTodosOsDiscos();
}

main();
