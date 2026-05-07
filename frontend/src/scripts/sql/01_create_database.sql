-- Cria o banco teste_db no SQL Server Express (ou qualquer instancia local).
-- Execute no SSMS conectado como administrador ou com permissao para criar banco.

IF DB_ID(N'teste_db') IS NULL
BEGIN
    CREATE DATABASE teste_db;
END
GO
