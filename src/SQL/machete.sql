---- Crear tabla

CREATE TABLE Notas (
	Id INT PRIMARY KEY IDENTITY(1,1),
	Titulo NVARCHAR(255) NOT NULL,
    Descripcion NVARCHAR(500),
	Completada BIT NOT NULL DEFAULT 0,
	Creada DATETIME DEFAULT GETDATE()
)

---- Insertamos algunas tareas

INSERT INTO Notas (Titulo, Descripcion, Completada)
VALUES ('Empezar tp integrador', 'Buscar algunas ideas y como hacer para implementar el back en angular con la arquitectura de capas', 0);

INSERT INTO Notas (Titulo, Descripcion, Completada)
VALUES ('Terminar presentacion de Nube', 'Agregar algunas paginas al canva', 1);


--- Consultas

SELECT * FROM Notas

SELECT 
    Id,
    Titulo,
    Descripcion,
    CASE 
        WHEN Completada = 0 THEN 'No completada'
        ELSE 'Ya completada'
    END AS Estado,
    CONVERT(NVARCHAR(10), Creada, 120) AS FechaCreada -- Formato 'YYYY-MM-DD'
FROM 
    Notas;

