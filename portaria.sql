
CREATE SCHEMA IF NOT EXISTS `portaria`;
USE `portaria` ;

-- -----------------------------------------------------
-- Table `lotes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portaria`.`lotes` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `ativo` TINYINT NOT NULL,
  `criado_em` DATETIME NOT NULL
);

-- -----------------------------------------------------
-- Table `boletos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portaria`.`boletos` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nome_sacado` VARCHAR(45) NULL,
  `valor` DECIMAL(5,2) NULL,
  `linha_digitavel` VARCHAR(45) NULL,
  `ativo` TINYINT NULL,
  `criado_em` DATETIME NULL,
  `id_lote` INT NOT NULL,
    FOREIGN KEY (`id_lote`) REFERENCES `portaria`.`lotes` (`id`)
 );

-- -----------------------------------------------------
-- Table `lotes_financeiro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portaria`.`lotes_financeiro` (
  `id_lote` INT NOT NULL PRIMARY KEY,
  `nome_unidade` VARCHAR(255) NOT NULL,
    FOREIGN KEY (`id_lote`) REFERENCES `portaria`.`lotes` (`id`)
);
