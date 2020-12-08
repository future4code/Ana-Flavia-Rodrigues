## Exercício 1

### a)

Chave estrangeira é o campo que estabelece relacionamento entre duas tabelas

### b)

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    9,
		"004"
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Gostei muito!",
    10,
		"003"
);


INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
		"003",
    "Ótimo filme!",
    10,
		"002"
);

### c)

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jackson-ana-oliveira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))	0.031 sec

Para existir uma avaliação é necessário existir um filme. A chave estrangeira (FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`)) faz essa restrição

### d)

ALTER TABLE Filmes DROP COLUMN avaliação;

### e)

	DELETE FROM Filmes WHERE id = "003"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jackson-ana-oliveira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))	0.031 sec

    Como as tabelas são relacionadas, não é possivel deletar um elemento que tenha relação com a aoutra tabela

## Exercício 2

### a)

Essa tabela iré permitir a relação entre as outras duas tabelas, que até então , não possuiam ligação nenhuma

### b)

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
        "001"
)..

### c)
SELECT f.id as filmes_id, r.rate as rating 
FROM Filmes f
JOIN Rating r ON f.id = r.movie_id;

SELECT * FROM Filmes 
JOIN Rating 
ON Filmes.id = Rating.movie_id;