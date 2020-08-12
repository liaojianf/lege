/*
Navicat MySQL Data Transfer

Source Server         : MySQL
Source Server Version : 80017
Source Host           : localhost:3306
Source Database       : haolian

Target Server Type    : MYSQL
Target Server Version : 80017
File Encoding         : 65001

Date: 2020-06-17 22:22:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', '943875378', '6492725');
INSERT INTO `admin` VALUES ('11', 'cvb', 'cvb');
INSERT INTO `admin` VALUES ('27', 'uuuu', 'uuuu');
INSERT INTO `admin` VALUES ('28', 'ert', 'ert');
INSERT INTO `admin` VALUES ('29', 'ert', 'ert');
INSERT INTO `admin` VALUES ('30', 'ert', 'ert');
INSERT INTO `admin` VALUES ('31', 'ert', 'ert');
INSERT INTO `admin` VALUES ('32', 'ert', 'ert');
INSERT INTO `admin` VALUES ('33', 'ukl', 'ukl');
INSERT INTO `admin` VALUES ('34', 'wdf', 'wdf');
INSERT INTO `admin` VALUES ('35', 'ilil', 'ilil');
INSERT INTO `admin` VALUES ('36', 'fghfgh', 'fghfgh');
INSERT INTO `admin` VALUES ('37', '7878', '7878');
INSERT INTO `admin` VALUES ('38', '567567', '567567');
INSERT INTO `admin` VALUES ('39', 'dfg', 'dfg');
INSERT INTO `admin` VALUES ('40', 'erer', 'erer');
INSERT INTO `admin` VALUES ('41', 'ggg', 'ggg');
INSERT INTO `admin` VALUES ('42', 'ttt', 'ttt');
INSERT INTO `admin` VALUES ('43', 'ttt', 'ttt');
INSERT INTO `admin` VALUES ('44', 'ttt', 'ttt');

-- ----------------------------
-- Table structure for information
-- ----------------------------
DROP TABLE IF EXISTS `information`;
CREATE TABLE `information` (
  `admin_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sex` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `recommend` int(11) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `major` varchar(20) DEFAULT NULL,
  `QQ` varchar(20) DEFAULT NULL,
  `WeChat` varchar(20) DEFAULT NULL,
  `yhukou` varchar(255) DEFAULT NULL,
  `xzhudi` varchar(255) DEFAULT NULL,
  `credential` varchar(255) DEFAULT NULL,
  `school` varchar(255) DEFAULT NULL,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `employ` varchar(255) DEFAULT NULL,
  `employment` varchar(255) DEFAULT NULL,
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `admin_information` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of information
-- ----------------------------
INSERT INTO `information` VALUES ('1', '廖剑锋', '男', '170', '100', '1998-8-22', '13229852791', '943875378@qq.com', '软件专业', '943875378', 'A943875378', '廉江', '珠海', '大专', '广科', '943875378', '/easyui/2.jpg', '全职', '财务');
INSERT INTO `information` VALUES ('11', '廖剑锋1', '男', '170', '805', '1998-8-22', '132298527911', '943878378@qq.com', '软件', null, 'A943875378', '广东廉江', '广东珠海', '计算机高级证书', '广科', 'cvb', '/easyui/3.jpg', '全职', '财务');
INSERT INTO `information` VALUES ('27', '廖剑锋', '男', '170', '110', '1998-8-22', '13229852791', '943875378@qq.com', '软件专业', null, '', '广东省廉江市', '广东省珠海市斗门区', 'java高级证', '清华', 'uuuu', '/easyui/6.jpg', '兼职', '软件开发');
INSERT INTO `information` VALUES ('33', '廖剑锋', '--请选择性别--', '999', '100', '', '13229852791', '', '软件专业', '943875378', '', '广东省廉江市', '广东省珠海市斗门区', 'java高级证书', '北大', 'ukl', '/easyui/2.jpg', '兼职', '财务');
INSERT INTO `information` VALUES ('33', '廖剑锋', '--请选择性别--', '999', '100', '', '13229852791', '', '软件专业', '943875378', '', '广东省廉江市', '广东省珠海市斗门区', 'java高级证书', '北大', 'ukl', '/easyui/2.jpg', '兼职', '财务');
INSERT INTO `information` VALUES ('36', '廖剑锋', '--请选择性别--', null, '120', '', '', '', '', null, '', '', '', '', '--请选择学校--', 'fghfgh', '/easyui/1.jpg', '', '');
INSERT INTO `information` VALUES ('37', '廖剑锋', '--请选择性别--', null, null, '', '', '', '', '', '', '', '', '', '--请选择学校--', '7878', '/easyui/1.jpg', null, null);

-- ----------------------------
-- Table structure for informations
-- ----------------------------
DROP TABLE IF EXISTS `informations`;
CREATE TABLE `informations` (
  `minzu` varchar(255) DEFAULT NULL,
  `marriage` varchar(255) DEFAULT NULL,
  `gouyu` varchar(255) DEFAULT NULL,
  `yueyu` varchar(255) DEFAULT NULL,
  `waiyu` varchar(255) DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `salary` varchar(255) DEFAULT NULL,
  `station` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `profession` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `money` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of informations
-- ----------------------------
INSERT INTO `informations` VALUES ('汉', '未婚', '精通', '精通', '精通', '943875378', '软件开发', '15K-20K', '总经理', '广东深圳', 'java', '项目负责人', null, null);
INSERT INTO `informations` VALUES ('汉', '未婚', '精通', '精通', '英语', 'cvb', '软件开发', '15K-20K', '总经理', '广东深圳', 'java', '项目负责人', '   当你负重前行\r\n  依然能挺直腰杆\r\n就会发生是你盘生活\r\n  而不是生活盘你', '-25172');
INSERT INTO `informations` VALUES ('汉', '未婚', '精通', '很好', '不太行', 'uuuu', '软件开发', '15k-20k', '管理员', '广州', '软件开发', '后台开发', '不主动，不拒绝，不负责', '99927');
INSERT INTO `informations` VALUES (null, null, null, null, null, 'ert', null, null, null, null, null, null, null, null);
INSERT INTO `informations` VALUES (null, null, null, null, null, 'ert', null, null, null, null, null, null, null, null);
INSERT INTO `informations` VALUES (null, null, null, null, null, 'ert', null, null, null, null, null, null, null, null);
INSERT INTO `informations` VALUES (null, null, null, null, null, 'ert', null, null, null, null, null, null, null, null);
INSERT INTO `informations` VALUES (null, null, null, null, null, 'ert', null, null, null, null, null, null, null, null);
INSERT INTO `informations` VALUES (null, null, null, null, null, 'ukl', null, null, null, null, null, null, null, null);
INSERT INTO `informations` VALUES (null, null, null, null, null, 'wdf', null, null, null, null, null, null, null, null);
INSERT INTO `informations` VALUES (null, null, null, null, null, 'ilil', null, null, null, null, null, null, null, null);
INSERT INTO `informations` VALUES ('', '', '', '', '', 'fghfgh', '', '', '', '', '', '', '', '99911');
INSERT INTO `informations` VALUES (null, null, null, null, null, '7878', null, null, null, null, null, null, null, null);
INSERT INTO `informations` VALUES (null, null, null, null, null, '567567', null, null, null, null, null, null, null, null);
INSERT INTO `informations` VALUES (null, null, null, null, null, 'dfg', null, null, null, null, null, null, null, null);
INSERT INTO `informations` VALUES (null, null, null, null, null, 'erer', null, null, null, null, null, null, null, null);
INSERT INTO `informations` VALUES (null, null, null, null, null, 'ggg', null, null, null, null, null, null, null, null);
INSERT INTO `informations` VALUES (null, null, null, null, null, 'ttt', null, null, null, null, null, null, null, null);
INSERT INTO `informations` VALUES (null, null, null, null, null, 'ttt', null, null, null, null, null, null, null, null);
INSERT INTO `informations` VALUES (null, null, null, null, null, 'ttt', null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `cargo` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `num` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES ('鞋子', '2000', '11');
INSERT INTO `shop` VALUES ('袜子', '50', '43');
INSERT INTO `shop` VALUES ('裤子', '366', '48');
INSERT INTO `shop` VALUES ('底裤', '199', '17');
INSERT INTO `shop` VALUES ('内衣', '488', '61');
INSERT INTO `shop` VALUES ('衬衫', '188', '43');
INSERT INTO `shop` VALUES ('夹克', '499', '26');
INSERT INTO `shop` VALUES ('披风', '788', '56');
INSERT INTO `shop` VALUES ('帽子', '688', '57');
INSERT INTO `shop` VALUES ('香烟', '12', '53');
INSERT INTO `shop` VALUES ('汉堡', '10', '44');
INSERT INTO `shop` VALUES ('薯条', '6', '73');
INSERT INTO `shop` VALUES ('面包', '4', '44');
INSERT INTO `shop` VALUES ('魔力挺', '299', '92');
INSERT INTO `shop` VALUES ('键盘', '266', '75');
INSERT INTO `shop` VALUES ('鼠标', '99', '18');
INSERT INTO `shop` VALUES ('狗胖', '1', '97');

-- ----------------------------
-- Table structure for shoppingcar
-- ----------------------------
DROP TABLE IF EXISTS `shoppingcar`;
CREATE TABLE `shoppingcar` (
  `cargo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoppingcar
-- ----------------------------
INSERT INTO `shoppingcar` VALUES ('鞋子', '1', '2000');

-- ----------------------------
-- Table structure for warehouse
-- ----------------------------
DROP TABLE IF EXISTS `warehouse`;
CREATE TABLE `warehouse` (
  `name` varchar(255) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of warehouse
-- ----------------------------
INSERT INTO `warehouse` VALUES ('袜子', '1', 'cvb');
INSERT INTO `warehouse` VALUES ('裤子', '1', 'cvb');
INSERT INTO `warehouse` VALUES ('底裤', '1', 'cvb');
INSERT INTO `warehouse` VALUES ('香烟', '1', 'cvb');

-- ----------------------------
-- Table structure for work
-- ----------------------------
DROP TABLE IF EXISTS `work`;
CREATE TABLE `work` (
  `workname` varchar(255) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of work
-- ----------------------------
INSERT INTO `work` VALUES ('肯德基服务员', '10');
INSERT INTO `work` VALUES ('针线活', '12');
INSERT INTO `work` VALUES ('搬砖', '20');
INSERT INTO `work` VALUES ('打字', '15');
INSERT INTO `work` VALUES ('送外卖', '10');
INSERT INTO `work` VALUES ('派传单', '12');
INSERT INTO `work` VALUES ('扫地', '16');
INSERT INTO `work` VALUES ('支付行业代理', '28');
INSERT INTO `work` VALUES ('急聘开发商内渠专员', '25');
INSERT INTO `work` VALUES ('POS机门店经理', '18');
INSERT INTO `work` VALUES ('简单商户认证', '21');
INSERT INTO `work` VALUES ('周六周日促销员', '14');
INSERT INTO `work` VALUES ('品茶活动工作人员', '18');
INSERT INTO `work` VALUES ('高薪网络推广员', '19');
