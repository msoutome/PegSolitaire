var COL_NUM = 7, ROW_NUM = 7; // マス数
var COL_W = 79, ROW_H = 79;
var LW=2;//線の太さ
var MG=LW/2;//セル描画のマージン
var COLOR_CANVAS='#F0E68C';
var COLOR_LINE='#222222';
var COLOR_SELECT='#ff7c5c';
var COLOR_IGNORE='#7FFF00';
var initcellmap = [
	[0,0,1,1,1,0,0],
	[0,0,1,1,1,0,0],
	[1,1,1,1,1,1,1],
	[1,1,1,2,1,1,1],
	[1,1,1,1,1,1,1],
	[0,0,1,1,1,0,0],
	[0,0,1,1,1,0,0],
];
var cellmap = [
	[0,0,1,1,1,0,0],
	[0,0,1,1,1,0,0],
	[1,1,1,1,1,1,1],
	[1,1,1,2,1,1,1],
	[1,1,1,1,1,1,1],
	[0,0,1,1,1,0,0],
	[0,0,1,1,1,0,0],
];
var cells=null;
var selectedCell=null;