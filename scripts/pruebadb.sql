-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pruebadb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pruebadb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pruebadb` DEFAULT CHARACTER SET utf8mb3 ;
USE `pruebadb` ;

-- -----------------------------------------------------
-- Table `pruebadb`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pruebadb`.`client` (
  `idclient` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idclient`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pruebadb`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pruebadb`.`product` (
  `idproduct` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` DOUBLE NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idproduct`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pruebadb`.`shopping_cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pruebadb`.`shopping_cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `client_idclient` INT NOT NULL,
  `product_idproduct` INT NOT NULL,
  `shopping_date` DATE NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_shopping_cart_client_idx` (`client_idclient` ASC) VISIBLE,
  INDEX `fk_shopping_cart_product_idx` (`product_idproduct` ASC) VISIBLE,
  CONSTRAINT `fk_shopping_cart_client`
    FOREIGN KEY (`client_idclient`)
    REFERENCES `pruebadb`.`client` (`idclient`),
  CONSTRAINT `fk_shopping_cart_product`
    FOREIGN KEY (`product_idproduct`)
    REFERENCES `pruebadb`.`product` (`idproduct`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
