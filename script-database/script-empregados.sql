CREATE table empregados(
	codigo uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	nome VARCHAR(255) NOT NULL,
	cargo VARCHAR(255) NOT NULL,
	salario NUMERIC(5,2),
	inicio_Contrato DATE NOT NULL,
	final_Contrato DATE NOT NULL,
	registro INTEGER NOT NULL,
	meta_Id INTEGER NOT NULL

)

/** EXECUTAR CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
