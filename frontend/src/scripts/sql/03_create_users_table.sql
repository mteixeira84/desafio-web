-- Tabela de usuarios para login (senha apenas como hash).
-- Execute depois dos scripts 01 e 02 (ou com banco teste_db ja existente).

USE teste_db;
GO

IF OBJECT_ID(N'dbo.Users', N'U') IS NOT NULL
BEGIN
    DROP TABLE dbo.Users;
END
GO

CREATE TABLE dbo.Users (
    Id UNIQUEIDENTIFIER NOT NULL
        CONSTRAINT PK_Users PRIMARY KEY,
    Username VARCHAR(100) NOT NULL
        CONSTRAINT UQ_Users_Username UNIQUE,
    PasswordHash VARCHAR(500) NOT NULL
);
GO

-- Nao insira senha em texto plano aqui.
-- Com SeedAdmin habilitado em appsettings.Development.json, a API cria o primeiro usuario ao subir.
-- Em producao, desabilite SeedAdmin e cadastre usuarios por ferramenta ou endpoint administrativo.
