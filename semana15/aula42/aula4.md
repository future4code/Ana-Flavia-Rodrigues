## Exercício 1

### a)

CREATE TABLE Ator ( ==> Comando usado para criar a tabela


VARCHAR  ==> Usamos o VARCHAR para declarar o id para ter mais possibilidades, o VARCHAR é utilizado para representar vários caracteres (letras, números, caracteres especiais)


PRIMARY KEY ==> usado para representar a chave primária, ou seja uma chave única que não permite duplicação e que identifique o item.

NOT NULL ==> usado para não permitir que o campo fique sem preenchimento.

FLOAT  ==> usado para permitir a entrade de número não inteiro.


### b)

SHOW DATABASES = mostra a base de dados a qual estou conectada

SHOW TABLES = mostra as tabelas contidas nessa base de dados.

### c)

DESCRIBE = detalha a estrutura da tabela :
Campos, tipos , se pode ser nulo , PK 

## Exercício 2

### a)

INSERT INTO Ator (nome, id, salário, data_de_nascimento, genero)
VALUES("Gloria Pires" , "002" , 120000, "1963/08/23" , "female");

### b)

Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

Chave primaria duplicada ==> a chve primaria PK é necessáriamente única

### c)
14:59:49	INSERT INTO Ator ( id , nome , salário )  VALORES ( "003" , "Fernanda Montenegro" , 300000 , "1929-10-19" , "feminino" )	Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'VALORES ( "003" , "Fernanda Montenegro" , 300000 , "1929-10-19" , "feminino" )' at line 2	0.031 sec

- Erro de sintaxe a forma correta é VALUES
- A contagem de colunas não corresponde à contagem de valores na linha 1. É necessario colocar os campos na linha 1, ou seguir a ordem da tabela.

- o Campo "genero" comporta apenas 6 caracteres

### d) 
15:08:39	INSERT INTO Ator ( id , salário , data de nascimento , sexo )  VALORES ( "004" , 400000 , "1949-04-18" , "masculino" )	Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'de nascimento , sexo )  VALORES ( "004" , 400000 , "1949-04-18" , "masculino" )' at line 1	0.015 sec

- data de nascimento = não pode conter espaços. Forma correta data_de_nascimento

- Erro de sintaxe a forma correta é VALUES

- COLUNA SEXO NÃO EXISTE = forma correta "genero"

- o Campo "genero" comporta apenas 6 caracteres

- O campo nome não pode ser nulo

### d)
- Erro de sintaxe a forma correta é VALUES

- fomato data errado ==> forma correta yyyy/mm/dd

## Exercício 3
### a)

SELECT * FROM Ator WHERE genero = "female";

### b)

SELECT salário from Ator WHERE nome = "Tony Ramos";

### c)

SELECT id , nome , salário from Ator WHERE salário <= 500000;

### d)

- nome da tabela é Ator e não Actor
- Faltou o ; no final

SELECT id, nome from Ator WHERE id = "002";

## Exercício 4
### a)
SELECT * FROM Ator
WHERE (nome LIKE "A%" OR nome LIKE "J%") AND salário > 300000;

(SELECT)Selecione (*)todos os atores (FROM)da tabela Ator (WHERE)onde o nome (LIKE "A%")começa com a letra A (e não importa o que vem depois) ou com a letra J e depois desse filtro , sekecione o que tem salario maior que 300000

### b)

SELECT * FROM Ator
WHERE nome NOT LIKE "A%" AND salário > 350000;

### c)
SELECT * FROM Ator
WHERE nome LIKE "%g%" OR nome LIKE "%G%";

### d)

SELECT * FROM Ator
WHERE 
	(nome LIKE "%g%" OR nome LIKE "%G%" OR nome LIKE "%a%" OR nome LIKE "%A%")
  AND salário BETWEEN 350000 AND 900000;

## Exercício 5
### a)

CREATE TABLE Filmes (
id VARCHAR (255) PRIMARY KEY ,
nome VARCHAR (255) NOT NULL UNIQUE,
sinopse TEXT NOT NULL,
data_de_lançameto DATE NOT NULL,
avaliação INT NOT NULL

);

### b)
INSERT INTO Filmes (id, nome, sinopse, data_de_lançameto, avaliação) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

### c)
INSERT INTO Filmes (id, nome, sinopse, data_de_lançameto, avaliação) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
### d)
INSERT INTO Filmes (id, nome, sinopse, data_de_lançameto, avaliação) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

### e)
INSERT INTO Filmes (id, nome, sinopse, data_de_lançameto, avaliação) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

## Exercício 6
### a)

 SELECT id, nome, avaliação  from Filmes WHERE id = "002";

### b)

SELECT * from Filmes WHERE nome = "Dona Flor e Seus Dois Maridos";

### c)
SELECT id, nome, sinopse from Filmes WHERE avaliação > 7;

## Exercício 7
### a)

 SELECT * FROM  Filmes WHERE nome LIKE "%vida%";

 ### b)

SELECT * FROM Filmes
WHERE nome LIKE "%dia%" OR sinopse LIKE "%dia%";

### c)

SELECT * FROM Filmes
WHERE data_de_lançameto < "2020-10-26";

### d)

SELECT * FROM Filmes
WHERE  data_de_lançameto < "2020-10-26" AND 
      (nome LIKE "%dia%" OR
      sinopse LIKE "%dia%") AND avaliação > 7;