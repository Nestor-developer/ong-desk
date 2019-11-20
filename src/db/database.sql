CREATE DATABASE faeeC;
use faeeC;
create table fecha_formulario(
fecha date,
anio_curso integer,
anio_ingreso varchar(30)
);

/*SHOW TABLES;*/

create table Datos_Beneficiario
(
	nombre varchar(40) not null,
	apellido_p varchar(40) not null, 
	apellido_m varchar(40), 
	fecha_Nacimiento date,
	lugar_Nacimiento varchar(70),
	edad integer,
	Sexo varchar(15), 
	peso varchar(20),
	estatura varchar(20),
	grupo_Sanguíneo varchar(50), 
	diagnóstico varchar(220)
	
);

create table vive_con(
	Nombre_Completo varchar (60) not null,
	Parentesco varchar (70) not null,
	Ocupacion varchar(90),
	Fecha_nacimiento date
);

create table Dirección_beneficiario(
	Calle varchar(40) not null,
	numero_EXT varchar(60),
	numero_INT varchar(60),
	Colonia varchar (100) not null,
	CP varchar(5) not null,
	Ciudad varchar(60),
	Estado varchar(30) not null,
	Tel_casa varchar(12)

);

create table Datos_padre(
	Nombre varchar(35) not null,
	apellido_p varchar(35) not null,
	apellido_m varchar(35),
	fecha_nacimiento date,
	ocupacion varchar(100),
	direccion varchar(100) not null,
	tel_celular varchar(10),
	tel_casa varchar(12),
	email text not null unique
);

create table Datos_madre(
	Nombre varchar(35) not null,
	apellido_p varchar(35) not null,
	apellido_m varchar(35),
	fecha_nacimiento date,
	ocupacion varchar(100),
	direccion varchar(100) not null,
	tel_celular varchar(10),
	tel_casa varchar(12),
	email text unique
);

create table tutor(	
	Nombre varchar(35) not null,
	apellido_p varchar(35) not null,
	apellido_m varchar(35),
	fecha_nacimiento date,
	ocupacion varchar(100),
	direccion varchar(100) not null,
	tel_trabajo varchar(12),
	tel_celular varchar(10),
	email text unique
);

create table persona_autorizada(

	Nombre_Completo varchar (60) not null,
	parentesco varchar (70),
	direccion varchar(100) not null,
	tel_celular varchar(10),
	tel_casa varchar(10)
);

create table tratamiento_medico(
	Medicamento varchar(90),
	formula varchar(60),
	dosis varchar(60),
	horario varchar(70)
);

create table cuidados(
 	medicamentos_puedetomar varchar(300)
);
create table alergias(
	alergias varchar(300)
);

create table persona_emergencia(
	Nombre_Completo varchar (60) not null,
	Parentesco varchar (70),
	tel_casa varchar(10),
	tel_oficina varchar(12),
	tel_celular varchar(10)	
);

create table Elaborado_por(
	Nombre varchar(60),
	fecha date
);