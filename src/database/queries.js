export default{
    getNotas:`USE NOTAS SELECT * FROM Notas`,
    getNotasJoin:`USE NOTAS
    SELECT 
        n.Id,
        n.Titulo,
        n.Descripcion,
        CASE 
            WHEN n.Completada = 0 THEN 'No completada'
            ELSE 'Ya completada'
        END AS Estado,
        CONVERT(NVARCHAR(10), n.Creada, 120) AS FechaCreada -- Formato 'YYYY-MM-DD'
    FROM 
        Notas n`,
    agregarNotas:`USE NOTAS INSERT INTO Notas
    (titulo,
    descripcion,
    completada,
    creada) 
    VALUES (
    @titulo,
    @descripcion,
    @completada,
    @creada);`
}