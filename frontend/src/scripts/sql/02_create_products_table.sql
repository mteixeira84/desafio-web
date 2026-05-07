-- Cria a tabela de produtos em teste_db.
-- Execute depois do script 01_create_database.sql.

USE teste_db;
GO

IF OBJECT_ID(N'dbo.Products', N'U') IS NOT NULL
BEGIN
    DROP TABLE dbo.Products;
END
GO

CREATE TABLE dbo.Products (
    Id UNIQUEIDENTIFIER NOT NULL
        CONSTRAINT PK_Products PRIMARY KEY,
    Name VARCHAR(200) NOT NULL,
    Price DECIMAL(18, 2) NOT NULL,
    Category VARCHAR(150) NOT NULL
);
GO

-- Dado inicial opcional (comente se nao quiser)
INSERT INTO dbo.Products (Id, Name, Price, Category)
VALUES (
    NEWID(),
    'Mouse Gamer',
    149.90,
    'Perifericos'
);
GO
