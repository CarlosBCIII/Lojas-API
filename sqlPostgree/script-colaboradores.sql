/**CREATE EXTENSION pgcrypto;
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;

*/

CREATE  table if not exists users_logins(
	codigo_login uuid NOT NULL DEFAULT uuid_generate_v4(),
	id_login SERIAL,
	mail_login TEXT NOT NULL UNIQUE,
	password_login TEXT NOT NULL,
	lembrar_login VARCHAR (255),
	id_usuario_login INTEGER NOT NULL
);

CREATE  table if not exists usuarios(
	
	codigo uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	id_usuario SERIAL NOT NULL,
	nome VARCHAR(255) NOT NULL,
	id_cargo INTEGER NOT NULL DEFAULT 1,
	salario NUMERIC(9,2) NOT NULL,/**salario com 5 digitos e 2 decimis*/
	inicio_contrato DATE NOT NULL,
	final_contrato DATE,
	meta_id VARCHAR(255) NOT NULL DEFAULT to_char(CURRENT_DATE, 'mmyy'),
	meta_ativa BOOLEAN NOT NULL DEFAULT false,
	tipo_usuario_id VARCHAR(255) NOT NULL DEFAULT 'usr',
	usuario_ativo BOOLEAN NOT NULL DEFAULT false

);

/** EXECUTAR CREATE EXTENSION IF NOT EXISTS "uuid-ossp" para poder gerar uuid default*/
CREATE  table if not exists tipos_usuarios(
	codigo_tipo_usuario uuid NOT NULL DEFAULT uuid_generate_v4(),
	id_tipo_usuario  VARCHAR(255) NOT NULL,
	nome_tipo_usuario VARCHAR(255) NOT NULL,
	tipo_usuario_ativo BOOLEAN NOT NULL DEFAULT true

);

CREATE  table if not exists cargos(
	codigo_cargo uuid NOT NULL DEFAULT uuid_generate_v4(),
	id_cargo SERIAL NOT NULL,
	nome_cargo TEXT NOT NULL,
	cargo_ativo BOOLEAN NOT NULL DEFAULT true

);

CREATE  table if not exists metas(
	codigo_meta uuid NOT NULL DEFAULT uuid_generate_v4(),
	id_meta VARCHAR(255) NOT NULL,
	valor_meta NUMERIC(9,2) NOT NULL,
	valor_x_super INTEGER NOT NULL, /** Valor multiplicador das metas*/
	valor_super NUMERIC(9,2) NOT NULL,
	valor_x_desafio INTEGER NOT NULL,
	valor_desafio NUMERIC(9,2) NOT NULL,
	meta_ativa BOOLEAN NOT NULL DEFAULT true

);

/** VINCULAR CADASTRO DE META A TODOS COLABORADORES QUANDO INSERIR */

CREATE table if not exists lojas(
	codigo_loja uuid NOT NULL DEFAULT uuid_generate_v4(),
	id_loja SERIAL NOT NULL,
	nome_loja VARCHAR(255) NOT NULL,
	codigo_rcky INTEGER NOT NULL,
	loja_ativa BOOLEAN NOT NULL DEFAULT true

);


CREATE  table if not exists formas_pagamentos(
	codigo_forma_pagamento uuid NOT NULL DEFAULT uuid_generate_v4(),
	id_forma_pagamento SERIAL NOT NULL,
	nome_forma_pagamento VARCHAR(255) NOT NULL,
	tipo_forma_pagamento VARCHAR(255) NOT NULL,
	forma_pagamento_ativo BOOLEAN NOT NULL DEFAULT true

);

CREATE  table if not exists lojas_vinculadas(
	id_usuario INTEGER NOT NULL,/**Varchar pra ser vetor co mais de 1 loja*/
	id_loja INTEGER ARRAY NOT NULL,
	codigo_rcky INTEGER ARRAY NOT NULL,
	multipla_loja BOOLEAN NOT NULL DEFAULT false/** seta true caso esteja em mais lojas**/
	
);

CREATE  table if not exists caixa(
	
	codigo_caixa uuid NOT NULL DEFAULT uuid_generate_v4(),
	id_caixa SERIAL NOT NULL,
	id_loja INTEGER NOT NULL,
	codigo_rcky INTEGER NOT NULL,
	id_usuario INTEGER NOT NULL,
	data_caixa DATE NOT NULL,
	mes_caixa INTEGER,
	ano_caixa INTEGER,
	id_forma_pagamento_caixa INTEGER NOT NULL,
	total_caixa NUMERIC(9,2) NOT NULL DEFAULT 0
	
);

CREATE  table if not exists venda_individual(
	
	codigo_vi uuid NOT NULL DEFAULT uuid_generate_v4(),
	id_vi SERIAL NOT NULL,
	id_loja INTEGER,
	codigo_rcky INTEGER NOT NULL,
	id_usuario_vi INTEGER NOT NULL,
	data_vi DATE NOT NULL,
	total_vi NUMERIC(9,2) NOT NULL DEFAULT 0,
	total_credito_vi NUMERIC(9,2) DEFAULT 0,
	total_debito_vi NUMERIC(9,2) DEFAULT 0,
	total_dinheiro_vi NUMERIC(9,2) DEFAULT 0,
	total_demais_vi NUMERIC(9,2) DEFAULT 0
	
);
