
CREATE table usuarios(
	
	codigo uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	id_usuario SERIAL NOT NULL,
	nome VARCHAR(255) NOT NULL,
	cargo VARCHAR(255) NOT NULL,
	salario NUMERIC(7,2) NOT NULL,/**salario com 5 digitos e 2 decimis*/
	inicio_contrato DATE NOT NULL,
	final_contrato DATE,
	registro INTEGER NOT NULL,
	meta_id INTEGER NOT NULL,
	meta_ativa BOOLEAN NOT NULL DEFAULT false,
	tipo_usuario_id VARCHAR(255) NOT NULL DEFAULT 'usr',
	usuario_ativo BOOLEAN NOT NULL DEFAULT false

)

/** EXECUTAR CREATE EXTENSION IF NOT EXISTS "uuid-ossp"*/

CREATE table metas(
	codigo_meta uuid NOT NULL DEFAULT uuid_generate_v4(),
	id_meta VARCHAR(255) NOT NULL,
	valor_meta NUMERIC(7,2) NOT NULL,
	meta_ativa BOOLEAN NOT NULL DEFAULT true

)

CREATE table lojas(
	codigo_loja uuid NOT NULL DEFAULT uuid_generate_v4(),
	id_loja SERIAL NOT NULL,
	nome_loja VARCHAR(255) NOT NULL,
	codigo_rcky INTEGER NOT NULL,
	loja_ativa BOOLEAN NOT NULL DEFAULT true

)

CREATE table tipos_usuarios(
	codigo_tipo_usuario uuid NOT NULL DEFAULT uuid_generate_v4(),
	id_tipo_usuario  VARCHAR(255) NOT NULL,
	nome_tipo_usuario VARCHAR(255) NOT NULL,
	tipo_usuario_ativo BOOLEAN NOT NULL DEFAULT true

)

CREATE table formas_pagamentos(
	codigo_forma_pagamento uuid NOT NULL DEFAULT uuid_generate_v4(),
	id_forma_pagamento SERIAL NOT NULL,
	nome_forma_pagamento VARCHAR(255) NOT NULL,
	tipo_forma_pagamento VARCHAR(255) NOT NULL,
	forma_pagamento_ativo BOOLEAN NOT NULL DEFAULT true

)

CREATE table lojas_vinculadas(
	id_usuario NUMERIC NOT NULL,/**Varchar pra ser vetor co mais de 1 loja*/
	id_loja VARCHAR(255) NOT NULL,
	codigo_rcky VARCHAR(255) NOT NULL,
	multipla_loja BOOLEAN NOT NULL DEFAULT false/** seta true caso esteja em mais lojas**/
	
)

CREATE table vendas(
	
	codigo_venda uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	id_usuario SERIAL NOT NULL,
	registro_usuario INTEGER NOT NULL,
	id_venda SERIAL NOT NULL,
	id_loja VARCHAR(255) NOT NULL,
	codigo_rcky INTEGER NOT NULL,
	data_venda DATE NOT NULL,
	mes_venda INTEGER,
	ano_venda INTEGER
	

)

CREATE table venda_individual(
	
	codigo_vi uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	id_vi SERIAL NOT NULL,
	id_loja INTEGER,
	codigo_rcky INTEGER NOT NULL,
	id_usuario_vi INTEGER NOT NULL,
	data_vi DATE NOT NULL,
	valor_vi NUMERIC(9,2) NOT NULL,
	total_vi NUMERIC(9,2) NOT NULL,
	total_credito_vi NUMERIC(9,2),
	total_debito_vi NUMERIC(9,2),
	total_dinheiro_vi NUMERIC(9,2),
	total_demais_vi NUMERIC(9,2)
	
)