CREATE table empregados(
	codigo uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	nome VARCHAR(255) NOT NULL,
	cargo VARCHAR(255) NOT NULL,
	salario NUMERIC(7,2) NOT NULL,/**salario com 5 digitos e 2 decimis*/
	inicio_Contrato DATE NOT NULL,
	final_Contrato DATE,
	registro INTEGER NOT NULL,
	meta_Id INTEGER NOT NULL

)

/** EXECUTAR CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
