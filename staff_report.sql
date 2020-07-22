--  DB

-- CREATE DATABASE staff_report;

--  `m_user`テーブル

CREATE TABLE IF NOT EXISTS `m_user` (
 `id` smallint NOT NULL,
 `name` varchar(50) character set utf8 default NULL,
 `role_id` smallint NOT NULL,
PRIMARY KEY(id)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--  `m_user`サンプルデータ

INSERT INTO m_user (id,name,role_id)
values (1,'田中',3)
,(2,'佐藤',1)
,(3,'高橋',2)
,(4,'鈴木',2);

--  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

--  `m_access_authority`テーブル

CREATE TABLE IF NOT EXISTS `m_access_authority` (
  `id` smallint AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(50) character set utf8 default NULL
  ) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--  `m_access_authority`サンプルデータ

INSERT INTO m_access_authority (name)
VALUES ('スタッフリスト編集')
,('スタッフリスト閲覧')
,('スタッフリスト削除');

--  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

--  `m_role`テーブル

CREATE TABLE IF NOT EXISTS `m_role` (
`id` smallint AUTO_INCREMENT PRIMARY KEY,
`name` varchar(50) character set utf8 default NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--  `m_role`サンプルデータ

INSERT INTO m_role (name)
VALUES('管理者')
,('一般')
,('システム管理者');

--  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

--  `m_role_detail`テーブル

CREATE TABLE IF NOT EXISTS `m_role_detail` (
 `role_id` smallint NOT NULL,
 `role_detail_id` smallint AUTO_INCREMENT,
 `access_id` smallint NOT NULL,
PRIMARY KEY(role_id, role_detail_id)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--  `m_role_detail`サンプルデータ

INSERT INTO `m_role_detail` (`role_id`,`access_id`)
values (1,1)
,(1,2)
,(2,2)
,(3,1)
,(3,2)
,(3,3);

--  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

--  m_employment_system（雇用形態）テーブル

CREATE TABLE IF NOT EXISTS `m_employment_system` (
 `id`smallint AUTO_INCREMENT,primary key(id),
 `name`varchar(50) character set utf8 default NULL
 );
 
--  m_employment_system（雇用形態）サンプルデータ

INSERT INTO m_employment_system(id,name)
VALUES (1,"ディレクター")
,(2,"プログラマー")
,(3,"システムエンジニア")
,(4,"ネットワークエンジニア")
,(5,"ユーザーサポート")
,(6,"CAD業務")
,(7,"DTP業務")
,(8,"設計・開発");

--  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

-- t_career(経歴テーブル)テーブル

CREATE TABLE IF NOT EXISTS `t_career` (
  `id` int(3) AUTO_INCREMENT
  ,PRIMARY KEY(id),
  `staff_id` int(3) default NULL,
  `matter_id` int(3) default NULL,
  `skill_id` smallint,
  `start_date` date default NULL,
  `end_date` date default NULL,
  `entry_at` datetime default NULL,
  `update_at` datetime default NULL,
  `update_by` varchar(50) character set utf8 default NULL);

-- t_career table（経歴テーブル）サンプルデータ

INSERT INTO `t_career` (`staff_id`,`matter_id`,`skill_id`,`start_date`,
`end_date`,`entry_at`,`update_at`, `update_by`)
VALUES(1,23,6,'2019/6/6','2019/9/24','2019/4/12','2019/8/4','木原'),
(2,4,1,'2019/6/6','2019/9/24','2019/4/12','2019/8/4','鈴木'),
(3,2,2,'2019/6/8','2019/8/24','2019/4/17','2019/8/4','白井'),
(4,1,4,'2019/5/7','2019/9/24','2019/4/15','2019/8/4','近藤'),
(5,11,3,'2019/6/1','2020/4/24','2019/4/13','2019/7/4','鈴木'),
(6,25,6,'2019/7/3','2020/3/24','2019/4/11','2019/7/4','佐藤'),
(7,33,5,'2019/6/4','2019/9/24','2019/4/19','2019/7/4','田中'),
(8,8,2,'2019/8/5','2019/11/24','2019/4/12','2019/8/4','田中'),
(9,9,1,'2019/5/2','2019/9/24','2019/4/14','2019/8/4','鈴木'),
(10,21,1,'2019/4/3','2019/9/24','2019/4/12','2019/9/4','白井'),
(11,5,6,'2019/3/2','2019/9/24','2019/4/11','2019/9/4','白井'),
(12,6,2,'2019/5/9','2019/9/24','2019/4/16','2019/9/4','鈴木'),
(13,10,3,'2019/6/14','2019/9/24','2019/4/15','2019/9/4','近藤'),
(14,23,6,'2019/6/3','2019/9/13','2019/4/25','2019/8/7','西野'),
(15,30,6,'2019/8/5','2019/2/24','2019/7/12','2019/8/4','飯田'),
(16,23,6,'2019/6/6','2019/9/24','2019/4/12','2019/8/4','木原'),
(17,4,1,'2019/6/6','2019/9/24','2019/4/12','2019/8/4','鈴木'),
(18,2,2,'2019/6/8','2019/8/24','2019/4/17','2019/8/4','白井'),
(19,1,4,'2019/5/7','2019/9/24','2019/4/15','2019/8/4','近藤'),
(20,11,3,'2019/6/1','2020/4/24','2019/4/13','2019/7/4','鈴木'),
(21,25,6,'2019/7/3','2020/3/24','2019/4/11','2019/7/4','佐藤'),
(22,33,5,'2019/6/4','2019/9/24','2019/4/19','2019/7/4','田中'),
(23,8,2,'2019/8/5','2019/11/24','2019/4/12','2019/8/4','田中'),
(24,9,1,'2019/5/2','2019/9/24','2019/4/14','2019/8/4','鈴木'),
(25,21,1,'2019/4/3','2019/9/24','2019/4/12','2019/9/4','白井'),
(26,5,6,'2019/3/2','2019/9/24','2019/4/11','2019/9/4','白井'),
(27,6,2,'2019/5/9','2019/9/24','2019/4/16','2019/9/4','鈴木'),
(28,10,3,'2019/6/14','2019/9/24','2019/4/15','2019/9/4','近藤'),
(29,23,6,'2019/6/3','2019/9/13','2019/4/25','2019/8/7','西野'),
(30,30,6,'2019/8/5','2019/2/24','2019/7/12','2019/8/4','飯田');

--  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

-- `m_staff`テーブル

CREATE TABLE `m_staff` (
  `id` int(11) NOT NULL PRIMARY KEY,
  `name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `gender` varchar(3) CHARACTER SET utf8 DEFAULT NULL,
  `position` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `joining_day` date DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `age` smallint(3) DEFAULT NULL,
  `school_career` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `near_station` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `company_id` smallint(6) DEFAULT NULL,
  `area_id` smallint(6) DEFAULT NULL,
  `occupation_id` smallint(6) DEFAULT NULL,
  `employment_system_id` smallint(6) DEFAULT NULL,
  `entry_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `update_by` varchar(50) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- `m_staff`サンプルデータ

INSERT INTO `m_staff` (`id`, `name`, `gender`, `position`, `joining_day`, `birthday`, `age`, `school_career`, `phone_number`, `near_station`, `company_id`, `area_id`, `occupation_id`, `employment_system_id`, `entry_at`, `update_at`, `update_by`) VALUES
(1, '佐藤テスト', '男', '社長', '1998-04-01', '1960-06-23', 60, '○○大学', '080-○○○○-○○○○', '○○駅', 1, 4, 1, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(2, '後藤テスト', '男', '課長', '2000-04-01', '1965-10-11', 55, '○○大学', '090-○○○○-○○○○', '○○駅', 1, 9, 2, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(3, '菊池テスト', '男', '部長', '2004-04-01', '1968-04-09', 52, '○○大学', '080-○○○○-○○○○', '○○駅', 1, 7, 3, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(4, '磯野テスト', '女', 'プロデューサー', '2010-04-01', '1975-08-12', 45, '○○大学', '090-○○○○-○○○○', '○○駅', 1, 3, 4, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(5, '鈴木テスト', '男', 'プロデューサー', '2018-04-01', '1985-08-25', 35, '○○大学', '080-○○○○-○○○○', '○○駅', 2, 5, 4, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(6, '高橋テスト', '女', 'プロデューサー', '2015-04-01', '1988-11-03', 32, '○○大学', '090-○○○○-○○○○', '○○駅', 2, 2, 4, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(7, '田中テスト', '女', 'プロデューサー', '2015-04-01', '1991-05-29', 29, '○○大学', '080-○○○○-○○○○', '○○駅', 2, 6, 4, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(8, '伊藤テスト', '男', 'プログラマー', '1998-04-01', '2015-12-24', 29, '○○大学', '090-○○○○-○○○○', '○○駅', 3, 10, 5, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(9, '渡邉テスト', '男', 'プログラマー', '1998-04-01', '2016-01-15', 28, '○○大学', '080-○○○○-○○○○', '○○駅', 3, 8, 5, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(10, '中村テスト', '女', 'プログラマー', '1998-04-01', '2018-06-23', 25, '○○大学', '090-○○○○-○○○○', '○○駅', 3, 12, 2, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(11, '中野テスト', '男', 'プログラマー', '1998-04-01', '1960-06-23', 60, '○○大学', '080-○○○○-○○○○', '○○駅', 1, 4, 5, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(12, '田村テスト', '男', 'プログラマー', '2000-04-01', '1965-10-11', 55, '○○大学', '090-○○○○-○○○○', '○○駅', 1, 9, 5, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(13, '石田テスト', '男', 'プログラマー', '2004-04-01', '1968-04-09', 52, '○○大学', '080-○○○○-○○○○', '○○駅', 1, 7, 5, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(14, '安達テスト', '女', 'プログラマー', '2010-04-01', '1975-08-12', 45, '○○大学', '090-○○○○-○○○○', '○○駅', 1, 3, 5, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(15, '井上テスト', '男', 'プログラマー', '2018-04-01', '1985-08-25', 35, '○○大学', '080-○○○○-○○○○', '○○駅', 2, 5, 5, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(16, 'テスト佐藤', '女', 'プログラマー', '2015-04-01', '1988-11-03', 32, '○○大学', '090-○○○○-○○○○', '○○駅', 2, 2, 5, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(17, 'テスト後藤', '女', 'リードプログラマー', '2015-04-01', '1991-05-29', 29, '○○大学', '080-○○○○-○○○○', '○○駅', 2, 6, 6, 3, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(18, 'テスト菊池', '男', 'リードプログラマ', '1998-04-01', '2015-12-24', 29, '○○大学', '090-○○○○-○○○○', '○○駅', 3, 10, 6, 3, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(19, 'テスト磯野', '男', 'リードプログラマ', '1998-04-01', '2016-01-15', 28, '○○大学', '080-○○○○-○○○○', '○○駅', 3, 8, 6, 3, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(20, 'テスト鈴木', '女', 'リードプログラマ', '1998-04-01', '2018-06-23', 25, '○○大学', '090-○○○○-○○○○', '○○駅', 3, 12, 6, 3, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(21, 'テスト高橋', '男', 'リードプログラマ', '1998-04-01', '1960-06-23', 60, '○○大学', '080-○○○○-○○○○', '○○駅', 1, 4, 6, 3, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(22, 'テスト田中', '男', '営業', '2000-04-01', '1965-10-11', 55, '○○大学', '090-○○○○-○○○○', '○○駅', 1, 9, 7, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(23, 'テスト伊藤', '男', '営業', '2004-04-01', '1968-04-09', 52, '○○大学', '080-○○○○-○○○○', '○○駅', 1, 7, 7, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(24, 'テスト渡邉', '女', '営業', '2010-04-01', '1975-08-12', 45, '○○大学', '090-○○○○-○○○○', '○○駅', 1, 3, 7, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(25, 'テスト中村', '男', '営業', '2018-04-01', '1985-08-25', 35, '○○大学', '080-○○○○-○○○○', '○○駅', 2, 5, 7, 1, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(26, 'テスト中野', '女', '営業', '2015-04-01', '1988-11-03', 32, '○○大学', '090-○○○○-○○○○', '○○駅', 2, 2, 7, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(27, 'テスト田村', '女', '営業', '2015-04-01', '1991-05-29', 29, '○○大学', '080-○○○○-○○○○', '○○駅', 2, 6, 7, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(28, 'テスト石田', '男', '営業', '1998-04-01', '2015-12-24', 29, '○○大学', '090-○○○○-○○○○', '○○駅', 3, 10, 7, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(29, 'テスト安達', '男', '営業', '1998-04-01', '2016-01-15', 28, '○○大学', '080-○○○○-○○○○', '○○駅', 3, 8, 7, 2, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤'),
(30, 'テスト井上', '女', '営業', '1998-04-01', '2018-06-23', 25, '○○大学', '090-○○○○-○○○○', '○○駅', 3, 12, 7, 3, '2018-07-14 00:00:00', '2020-05-10 00:00:00', '佐藤');

--  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

-- `m_skill`テーブル

CREATE TABLE IF NOT EXISTS `m_skill`(
`id` smallint NOT NULL,PRIMARY KEY(id),
`name` varchar(50) character set utf8 default null
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- `m_skill`サンプルデータ

insert 
into m_skill(id,name)
values
(1,'Java')
,(2,'C言語')
,(3,'C#')
,(4,'C++')
,(5,'MySQL')
,(6,'Ruby')
,(7,'Oracle')
,(8,'Python')
,(9,'JavaScript')
,(10,'PHP');

--  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

-- `m_license`テーブル

CREATE TABLE IF NOT EXISTS `m_license`(
`id` smallint not null,PRIMARY KEY(id),
`name` varchar(50) character set utf8 default null
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- `m_license`サンプルデータ

insert
into m_license(id,name)
values
(1,'ITパスポート')
,(2,'基本情報技術者')
,(3,'応用情報技術者')
,(4,'システムアーキテクト')
,(5,'ネットワークスペシャリスト')
,(6,'情報処理安全保障支援士')
,(7,'データスペシャリスト')
,(8,'エンベデッドスペシャリスト')
,(9,'AWS認定試験')
,(10,'オラクルマスター');

--  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

-- t_licence_holderテーブル

CREATE TABLE IF NOT EXISTS t_license_holder ( 
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
  , day DATE DEFAULT NULL
  , staff_id INT DEFAULT NULL
  , license_id SMALLINT DEFAULT NULL 
  , entry_at DATETIME DEFAULT NULL
  , update_at DATETIME DEFAULT NULL
  , update_by VARCHAR (50) CHARACTER SET utf8 DEFAULT NULL
)ENGINE = MyISAM DEFAULT CHARSET = latin1;

-- t_license_holderサンプルデータ

INSERT 
INTO t_license_holder( 
  id
  , DAY
  , staff_id
  , license_id
  , entry_at
  , update_at
  , update_by
) 
VALUES (1, '2020-04-01', 1, 1001, now(), now(), '山田太郎')
, (2, '2016-02-08', 2, 1002, now(), now(), '高橋花子')
, (3, '2009-07-16', 3, 1003, now(), now(), '白石誠')
, (4, '2018-11-13', 4, 1004, now(), now(), '田中悟')
, (5, '2005-09-29', 5, 1005, now(), now(), '栗田部太陽')
, (6, '1963-12-18', 6, 1006, now(), now(), 'ブラッド・ピット')
, (7, '2019-02-14', 7, 1007, now(), now(), '星井千代子')
, (8, '2019-06-26', 8, 1008, now(), now(), '水田真理子')
, (9, '1997-10-02', 9, 1009, now(), now(), '雲藤海')
, (10, '2017-05-17', 10, 1010, now(), now(), '金田日和');

--  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

-- t_staff_skillテーブル

CREATE TABLE if not exists t_staff_skill(
staff_skill_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
staff_id INT default NULL,
skill_id SMALLINT default NULL,
experience VARCHAR(50) character set utf8 default NULL,
level SMALLINT(2) default NULL,
assessment SMALLINT(3) default NULL,
entry_at DATETIME default NULL,
update_at DATETIME default NULL,
update_by VARCHAR(50) character set utf8 default NULL
)
ENGINE = MyISAM DEFAULT CHARSET = latin1;

-- t_staff_skillサンプルデータ

INSERT INTO t_staff_skill(staff_skill_id,staff_id,skill_id,experience,level,assessment,entry_at,update_at,update_by)
VALUES (101,10,1,"1年以上",4,6,NOW(),NOW(),"石田太郎")
,(102,2,2,"3年以上",8,7,NOW(),NOW(),"佐々木直樹")
,(103,3,3,"1年未満",3,4,NOW(),NOW(),"中村裕子")
,(104,4,4,"1年以上",5,5,NOW(),NOW(),"小島哲也")
,(105,5,5,"3年以上",7,6,NOW(),NOW(),"山田尚子")
,(106,6,2,"1年未満",2,3,NOW(),NOW(),"佐々木直樹")
,(107,7,4,"1年以上",4,5,NOW(),NOW(),"小島哲也")
,(108,8,1,"3年以上",9,10,NOW(),NOW(),"中村裕子")
,(109,9,3,"1年以上",4,4,NOW(),NOW(),"石田太郎")
,(110,10,5,"1年未満",3,2,NOW(),NOW(),"佐々木直樹")
,(111,11,1,"3年以上",10,10,NOW(),NOW(),"山田尚子")
,(112,12,4,"1年以上",5,3,NOW(),NOW(),"小島哲也")
,(113,13,2,"1年未満",3,3,NOW(),NOW(),"石田太郎")
,(114,14,3,"3年以上",10,9,NOW(),NOW(),"中村裕子")
,(115,15,2,"1年以上",6,7,NOW(),NOW(),"佐々木直樹");

--  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

-- m_occupationテーブル

CREATE TABLE IF NOT EXISTS m_occupation ( 
  id SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) character set utf8 default NULL
  ) ENGINE = MyISAM DEFAULT CHARSET = latin1;

-- m_occupationサンプルデータ

insert into m_occupation(name)
values ("SE")
,("PG")
,("営業")
,("インフラSE")
,("サポート")
,("総務");

--  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

-- `m_area`テーブル

CREATE TABLE IF NOT EXISTS `m_area` ( 
	`id` SMALLINT AUTO_INCREMENT
	, PRIMARY KEY (id)
	, `name` VARCHAR (50) CHARACTER SET utf8 DEFAULT NULL
)  ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- `m_area`サンプルデータ

INSERT INTO m_area(name) 
VALUES 	('北海道'),
		('東北'),
		('関東'),
		('中部'),
		('近畿'),
		('中国'),
		('九州');

--  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

-- `m_company`テーブル

CREATE TABLE IF NOT EXISTS `m_company` (
	`id` SMALLINT AUTO_INCREMENT
	, PRIMARY KEY (id)
	, `name` VARCHAR (50) CHARACTER SET utf8 DEFAULT NULL
	, `company_abbreviation` VARCHAR (5) CHARACTER SET utf8 DEFAULT NULL
)  ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- `m_conpany`サンプルデータ

INSERT INTO m_company(`name` , `company_abbreviation`)
VALUES	('データウェアネットワーク株式会社' , 'DWN'),
		('サン株式会社' , 'SAN'),
		('フォース株式会社' , 'FOR'),
		('株式会社ノア' , 'NOAH'),
		('株式会社サンシャイン' , 'SSH'),
		('株式会社シエロ' , 'CIE'),
		('ドラゴン株式会社' , 'DRA'),
		('アールビィシィ株式会社' , 'RBC'),
		('メッツソフトウェア株式会社' , 'METS');

--  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

-- `m_matter`(案件)テーブル
CREATE TABLE IF NOT EXISTS `m_matter` (
	`id` INT AUTO_INCREMENT , PRIMARY KEY (id)
	, `name` VARCHAR(50) CHARACTER SET utf8 DEFAULT NULL
	, `customer_id` SMALLINT(3) DEFAULT NULL
	, `unit_cost` VARCHAR(20) CHARACTER SET utf8 DEFAULT NULL
	, `workplace` VARCHAR(10) CHARACTER SET utf8 DEFAULT NULL
	, `number_of_persons` SMALLINT(3) DEFAULT NULL
	, `matter_start` DATE DEFAULT NULL
	, `matter_end` DATE DEFAULT NULL
	, `occupation_id` SMALLINT DEFAULT NULL
	, `staff_skill_id1` SMALLINT DEFAULT NULL
	, `staff_skill_id2` SMALLINT DEFAULT NULL
	, `staff_skill_id3` SMALLINT DEFAULT NULL
	, `skill_level_column` VARCHAR(50) CHARACTER SET utf8 DEFAULT NULL
	, `business_content` VARCHAR(200) CHARACTER SET utf8 DEFAULT NULL
	, `note` VARCHAR(200) CHARACTER SET utf8 DEFAULT NULL
	, `user_id` INT(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- `m_matter`テーブルサンプルデータ

INSERT INTO m_matter (name,customer_id,unit_cost,workplace,number_of_persons,matter_start,matter_end,occupation_id,staff_skill_id1,staff_skill_id2,staff_skill_id3,skill_level_column,business_content,note,user_id) 
VALUES  ('金融システム開発プロジェクト',1,'350,000~400,000','渋谷',2,'2020-06-01','2020-08-31',1,1,2,4,'レベル問わず','【プロジェクト概要】\n業務効率化を目的とした既存勘定系システムの改修と追加機能の導入および運用。\n【業務内容】\nテスト設計\n単体テスト、結合テスト','特になし',1)
		,('ゲーム開発プロジェクト',2,'380,000~420,000','新宿',3,'2020-07-10','2020-09-10',2,5,null,null,'C#レベル3','【プロジェクト概要】\n次世代ゲーム機に対応した体感型ゲームの開発\n【業務内容】\nプログラムコーディング','高度な技術が求められます。',1)
		,('ホームページのリデザイン',3,'280,000~330,000','神保町',2,'2020-06-20','2020-07-31',3,1,3,null,'javascriptレベル3','【プロジェクト概要】\n自社サイト｢crew.co｣において、ウェブサイトまたはアプリの構築に興味を持つ人々のために、プロセスを知るためのインタラクティブなガイドを提供する。\n【業務内容】\n単体テスト、結合テスト',null,2)
		,('ABC開発プロジェクト',2,'350,000~400,000','神田',1,'2020-07-01','2020-08-10',1,2,3,null,null,'ABC開発の案件です。','コミュニケーション能力が求められる現場です。',3)
		,('テスト開発プロジェクト',4,'350,000~390,000','新宿',3,'2020-07-01','2020-09-30',3,4,5,6,null,'テスト設計、単体テスト',null,4)
		,('DE開発プロジェクト',1,'400,000~460,000','池袋',1,'2020-08-10','2021-03-31',4,2,4,null,null,'営業支援システムの設計、開発、導入、テスト','長期の案件です。',2)
		,('契約書管理システム開発',5,'250,000~310,000','恵比寿',4,'2020-09-01','2020-11-30',5,3,6,7,'Java レベル2','ユーザーインターフェース設計、保守メンテナンス',null,3)
		,('営業支援システム開発',6,'300,000~340,000','大手町',2,'2020-09-20','2020-12-20',2,1,6,7,'java レベル4','営業支援システムの設計、開発、導入、テスト',null,5)
		,('販売管理システム開発',7,'290,000~350,000','渋谷',2,'2020-10-01','2020-12-20',1,8,null,null,null,'プログラムコーディング',null,6)
		,('売上管理システムの統合',3,'420,000~480,000','神保町',1,'2020-08-20','2020-10-31',4,1,5,null,'C++ レベル3','スケジュール管理、進捗管理、プログラムコーディング',null,1)
		,('生産管理システムの開発',8,'310,000~360,000','新宿',3,'2020-10-10','2020-11-30',6,2,4,null,null,'設計段階での顧客折衝、テスト設計、管理',null,7)
		,('FG開発プロジェクト',9,'240,000~280,000','渋谷',2,'2020-09-01','2021-01-31',7,4,8,9,null,'Javaによるシステム開発','Javaの開発経験が１年以上必要です。',8)
		,('HIJ開発プロジェクト',10,'300,000~340,000','池袋',3,'2020-10-01','2021-01-31',8,3,7,10,null,'Rubyを使ったシステム開発',null,9)
		,('自動車会社向け生産管理システム開発',11,'330,000~400,000','九段下',10,'2020-11-01','2021-03-31',5,3,5,9,'C言語 レベル3','基本設計～詳細設計',null,8)
		,('商品管理システム',12,'270,000~300,000','赤坂',2,'2020-10-10','2020-11-30',6,1,2,3,null,'バグチェック','Java、C++',10)
		,('原価計算システム',13,'250,000~300,000','新橋',3,'2020-08-01','2020-12-20',1,4,6,9,null,'プログラムコーディング','C++',5)
		,('エンタテインメントサイト構築',14,'350,000~410,000','霞ヶ関',4,'2020-09-10','2020-11-30',3,5,8,null,null,'設計・プログラミング・バグチェック','Java、HTML',4)
		,('給与計算システム',15,'280,000~300,000','有楽町',2,'2020-10-01','2020-12-10',4,7,11,null,'C++ レベル3','詳細設計、プログラミング','VB、C++、SQL',11)
		,('税関事務処理システム',10,'430,000~500,000','丸の内',5,'2020-09-01','2021-03-31',1,3,7,8,'Java レベル5','基本設計～詳細設計、プログラミング',null,12)
		,('市場取引システム',6,'400,000~450,000','飯田橋',2,'2020-09-01','2020-12-10',2,2,6,12,'C++ レベル4','設計・プログラミング使用者教育','Java、XML',13);

--  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

-- `m_customer`(顧客)テーブル
CREATE TABLE IF NOT EXISTS `m_customer` ( 
  `id` SMALLINT AUTO_INCREMENT , PRIMARY KEY (id)
  	, `name` VARCHAR(50) CHARACTER SET utf8 DEFAULT NULL
    , `customer_abbreviation` VARCHAR(5) CHARACTER SET utf8 DEFAULT NULL
    , `sales_name` VARCHAR(50) CHARACTER SET utf8 DEFAULT NULL
    , `representative_name` VARCHAR(50) CHARACTER SET utf8 DEFAULT NULL
    , `home_city` VARCHAR(50) CHARACTER SET utf8 DEFAULT NULL
    , `phone_number` VARCHAR(20) CHARACTER SET utf8 DEFAULT NULL
    , `charge_name` VARCHAR(50) CHARACTER SET utf8 DEFAULT NULL
    , `last_trading_day` DATE DEFAULT NULL
    , `billing_date` DATE DEFAULT NULL
    , `payment_terms` VARCHAR (100) CHARACTER SET utf8 DEFAULT NULL
) ENGINE = MyISAM DEFAULT CHARSET = latin1; 

-- `m_customer`サンプルデータ
INSERT INTO m_customer(name,customer_abbreviation,sales_name,representative_name,home_city,phone_number,charge_name,last_trading_day,billing_date,payment_terms)
VALUES 	('株式会社ABC','ABC','田中','鈴木','東京都中央区','03-1011-XXXX','山田','2020-03-27','2020-04-30','30日サイト')
		, ('DEF食品株式会社','DEF','佐山','藤原','埼玉県さいたま市','03-1022-XXXX','佐藤','2020-03-27','2020-04-30','30日サイト')
		, ('GH電気株式会社','GH','春田','斉藤','神奈川県横浜市','03-1033-XXXX','渡辺','2020-06-26','2020-08-31','60日サイト')
		, ('IJK商事','IJK','井上','佐々木','東京都千代田区','03-1044-XXXX','斉藤','2020-03-27','2020-04-30','30日サイト')
		, ('LMN商店株式会社','LMN','田中','神木','宮城県仙台市','03-1055-XXXX','飯山','2020-04-30','2020-06-30','60日サイト')
		, ('OP商店株式会社','OP','井上','高橋','大阪府大阪市','03-1066-XXXX','江口','2020-03-27','2020-04-30','30日サイト')
		, ('QR株式会社','QR','杉田','鈴木','広島県広島市','03-1077-XXXX','島崎','2020-04-30','2020-06-30','30日サイト')
		, ('ST事務所','ST','太田','前野','東京都江東区','03-1088-XXXX','渡辺','2020-03-27','2020-04-30','30日サイト')
		, ('株式会社UV','UV','杉田','中村','愛知県名古屋市','03-1099-XXXX','佐藤','2020-07-17','2020-09-30','60日サイト')
		, ('WXグループ株式会社','WX','小島','飯塚','栃木県宇都宮市','03-1111-XXXX','富山','2020-09-25','2020-11-30','60日サイト')
		, ('YZ電気株式会社acd','YZ','佐山','田村','東京都港区','03-1222-XXXX','江口','2020-06-26','2020-07-31','30日サイト')
		, ('DB株式会社','DB','小島','岩田','京都府京都市','03-1333-XXXX','飯山','2020-03-27','2020-04-30','30日サイト')
		, ('YNZ株式会社','YNZ','春田','清水','北海道札幌市','03-1444-XXXX','島崎','2020-03-27','2020-04-30','30日サイト')
		, ('CaC商事','CaC','佐山','浅野','福岡県福岡市','03-1555-XXXX','富山','2020-03-27','2020-04-30','30日サイト'); 

-- 顧客番号
-- 顧客名,顧客略称,担当営業,代表者,本店所在地,電話番号,担当者,最終取引日時,請求締日,支払サイト
