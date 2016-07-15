CREATE TABLE DayEntry (
  id     INT PRIMARY KEY AUTO_INCREMENT,
  DateD Date NOT NULL,
  WakeUp  VARCHAR(10),
  SleepAt  VARCHAR(10)
);


CREATE TABLE TreningEntry (
  id     INT PRIMARY KEY AUTO_INCREMENT,
  DayEntryID Date NOT NULL,
  Description  VARCHAR(200),
  CategoryID  INT,
  SubcategoryID  INT,
  Duration DECIMAL,
    Power INT
);

-------------------------------------------------------------------------------
DROP TABLE IF EXISTS `trenerdb`.`category`;
CREATE TABLE  `trenerdb`.`category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `trenerdb`.`dayentry`;
CREATE TABLE  `trenerdb`.`dayentry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `DateD` date NOT NULL,
  `WakeUp` varchar(10) DEFAULT NULL,
  `SleepAt` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;



DROP TABLE IF EXISTS `trenerdb`.`subcategory`;
CREATE TABLE  `trenerdb`.`subcategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `CategoryID` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;



DROP TABLE IF EXISTS `trenerdb`.`treningentry`;
CREATE TABLE  `trenerdb`.`treningentry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `DayEntryID` int(10) unsigned NOT NULL,
  `Description` varchar(200) DEFAULT NULL,
  `CategoryID` int(11) DEFAULT NULL,
  `SubcategoryID` int(11) DEFAULT NULL,
  `Duration` decimal(10,0) DEFAULT NULL,
  `Power` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;