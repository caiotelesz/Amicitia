create database amicitia;
use amicitia;

-- create table tb_Login (
-- 	id_adm int primary key auto_increment,
--     login_adm varChar(25) not null,
--     senha_adm varChar(20) not null
-- );


-- insert into tb_Login (login_adm, senha_adm)
-- values ('admin', '1234');

-- select * from tb_Login;

-- drop table tb_Login; NÃO SEI SE SERÁ PRECISO

create table tb_Medicos (
	id_med int primary key auto_increment,
    nome_med varChar(20) not null,
    crm_med int not null,
    desc_med text not null,
    img_med varChar(200)
);

insert into tb_Medicos (nome_med, crm_med, desc_med, img_med)
values ('Marce2lo', '99432', 'desc4rição do med', 'imagem direcionada');

select * from tb_Medicos;

create table tb_Blog (
	id_blog int primary key auto_increment,
    foto_blog varChar(200),
    titulo_blog varChar(200) not null,
    resumo_blog varChar(1000) not null,
    desc_blog text not null,
    font_blog varChar(35) not null
);

insert into tb_Blog (foto_blog, titulo_blog, resumo_blog, desc_blog, font_blog)
values ('imagem direcionada', 'titulo do bsslog', 'resumoss do blog', 'descrição dao blog', 'font do blog');

select * from tb_Blog;