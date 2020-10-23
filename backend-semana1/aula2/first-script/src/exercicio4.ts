type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?
// R: É preciso transpilar o arquivo. Como já tenho o tsconfig.json, preciso apenas do comando tsc e ele irá criar o arquivo js necessário

// d) na aula descomentamos várias linhas :
// "outDir": "./build",                        /* Redirect output structure to the directory. */
// "rootDir": "./src",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
// "removeComments": true,                /* Do not emit comments to output. */

// alteramos o "target": "es6"

// incluimos :   "outDir": "./build",                        /* Redirect output structure to the directory. */
// "rootDir": "./src", 