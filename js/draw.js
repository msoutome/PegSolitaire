var canvas;
var ctx;
var cellimg;

function drawCanvas(){
    canvas = document.getElementById( 'canvas' );  // キャンバス
    canvas.width = (COL_W+LW)*COL_NUM+LW;
    canvas.height = (ROW_H+LW)*ROW_NUM+LW;
    ctx = canvas.getContext( '2d' ); // コンテクスト
    ctx.save();
    ctx.clearRect( 0, 0, canvas.width, canvas.height);  // 一度キャンバスを真っさらにする
    ctx.fillStyle = COLOR_IGNORE;
    ctx.fillRect( 0, 0, canvas.width, canvas.height);
    
    // 線の色
    ctx.strokeStyle = COLOR_LINE;
    ctx.lineWidth = LW;

    // 横線
    for(var r=0; r < ROW_NUM+1; r++){
        var fromX=0;
        var fromY=r*(ROW_H+LW)+MG;
        var toX=canvas.width;
        var toY=fromY;
        ctx.beginPath();       
        ctx.moveTo(fromX,fromY);
        ctx.lineTo(toX,toY); 
        console.log('lintTo[%d][%d] → [%d][%d]',fromX,fromY,toX,toY);
        ctx.stroke();
    }

    // 縦線
    for(var c=0; c < COL_NUM+1; c++){
        var fromX=c*(COL_W+LW)+MG;
        var fromY=0;
        var toX=fromX;
        var toY=canvas.height;
        ctx.beginPath();       
        ctx.moveTo(fromX,fromY);
        ctx.lineTo(toX,toY); 
        console.log('lintTo[%d][%d] → [%d][%d]',fromX,fromY,toX,toY);
        ctx.stroke();
    }

    ctx.restore();

};

function loadCellImg(){
    cellimg = new Image();
    cellimg.onload = function() {
        console.log('読み込み完了');
        initCellMap();
    };
    cellimg.src = 'img/cell.png';
};

function clearCell( x, y, w, h){
    ctx.clearRect( x, y, w, h);  
    ctx.fillStyle = COLOR_CANVAS;
    ctx.fillRect( x, y, w, h);
}

function ignoreCell( x, y, w, h){
    ctx.clearRect( x, y, w, h);
    ctx.fillStyle = COLOR_IGNORE;
    ctx.fillRect( x, y, w, h);
}

function fillCell( x, y, w, h){
    ctx.clearRect( x, y, w, h);
    ctx.fillStyle = COLOR_SELECT;
    ctx.fillRect( x, y, w, h);
}

// x, yの部分へマスを描画する処理
function drawCell( x, y ,w, h) {
    clearCell(x, y, w, h);
    ctx.drawImage(cellimg, x, y, w, h);
};

// x, yの部分へマスを描画する処理
function selectCell( x, y ,w, h) {
    fillCell(x, y, w, h);    
    ctx.drawImage(cellimg, x, y, w, h);
};
