create database amicitia;
use amicitia;

create table tb_Medicos (
	id_med int primary key auto_increment,
    nome_med varChar(20) not null,
    crm_med int not null,
    desc_med text not null,
    img_med varChar(200)
);

create table tb_Blog (
	id_blog int primary key auto_increment,
    foto_blog varChar(200),
    titulo_blog varChar(200) not null,
    resumo_blog varChar(1000) not null,
    desc_blog text not null,
    font_blog varChar(35) not null
);