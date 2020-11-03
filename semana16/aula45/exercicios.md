## Exercício 1

### a)

ALTER TABLE Actor DROP COLUMN salary;
= Altere a tabela Actor e remova a coluna salary

### b)

ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
= Altere a tabela Actor campo gender para sex VARCHAR(6);

### c)

ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
= Altere a tabela Actor campo gender para gender VARCHAR(255);

### d)

ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
= Altere a tabela Actor campo gender para gender VARCHAR(100);

## Exercício 2

### a)

UPDATE Actor
SET 
    name = "Moacyr Franco"
    data_de_nascimento = "1968-11-20"
WHERE id = "003"

### b)

UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

### c)

UPDATE Actor
SET nome = "JULIANA PAES NASCIMENTO"
    salário = 800000
    data_de_nascimento = "1979-03-27"
    genero = "f";
WHERE id = "005"

### d)

UPDATE Actor
SET nome = "JULIANA PAES NASCIMENTO"
    salário = 800000
    data_de_nascimento = "1979-03-27"
    genero = "f";
WHERE id = "020"
15:25:03	UPDATE Ator SET nome = "JULIANA PAES NASCIMENTO",     salário = 800000,     data_de_nascimento = "1979-03-27",     genero = "f" WHERE id = "020"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.015 sec
Não retornou erro, apenas não executou o comando.


## Exercício 3

### a)

DELETE FROM Ator WHERE nome = "Fernanda Montenegro";

### b)

DELETE FROM Ator WHERE genero = "male" AND salário > 1000000;

## Exercício 4

### a)

SELECT MAX(salário) FROM Ator;

### b)

SELECT MIN(salário) FROM Ator WHERE genero = "female";

### c)

SELECT COUNT(*) FROM Ator WHERE genero = "female";

### d)

SELECT SUM(salário) FROM Ator ;

## Exercício 5

### a)

SELECT COUNT(*), genero
FROM Ator
GROUP BY genero;
==> retorna a quantidade de atores na tabela agrupados por gênero (x = male e y = female)

### b)

SELECT id, nome FROM Ator
ORDER BY nome DESC;

### c)

SELECT (*) FROM Ator ORDER BY salário ASC;

### d)

SELECT (*) FROM Ator ORDER BY salário ASC LIMIT 3;

### e)

SELECT AVG(salário), genero FROM Ator GROUP BY genero;

## Exercício 6

### a)

ALTER TABLE Filmes ADD data_limite DATE;

### b)

ALTER TABLE Filmes CHANGE avaliação avaliação FLOAT NOT NULL;

### c)

ALTER TABLE Filmes CHANGE avaliação avaliação FLOAT NOT NULL;

### d)

UPDATE Filmes
SET
	data_limite = "2020-12-31"
WHERE id = "001" ;

UPDATE Filmes
SET
	data_limite = "2020-07-31"
WHERE id = "002" ;

### e)

UPDATE Movie
SET
	sinopse = "FILME INCRIVEL"
WHERE id = "001";

==> Nada acontece, simplismente ele não faz nenhuma alteração.

## Exercício 7

### a)

SELECT COUNT (*) 
FROM Filmes
WHERE avaliação > 7.5;

### b)

SELECT AVG(avaliação)
FROM filmes;

### c)

SELECT COUNT(*) FROM Filmes WHERE data_limite > CURDATE();

### d)

SELECT COUNT(*) FROM Filmes WHERE data_de_lançamento < CURDATE();

### e)

SELECT MAX(avaliação) FROM Filmes;

### f)

SELECT MIN(avaliação) FROM Filmes;

## Exercício 8

### a)

SELECT * FROM Filmes ORDER BY nome;

### b)

SELECT * FROM Filmes ORDER BY nome LIMIT 5;

### c)

SELECT * FROM Filmes 
WHERE data_de_lançamento < CURDATE() 
ORDER BY data_de_lançamento DESC 
LIMIT 3;

### d)

SELECT * FROM Filmes 
ORDER BY avaliação DESC 
LIMIT 3;