document.getElementById( 'canvas' ).addEventListener( 'click', function( event ) {
    // クリック
	var clickX = event.pageX ;
	var clickY = event.pageY ;

	// 要素の位置を取得
	var clientRect = this.getBoundingClientRect() ;
	var positionX = clientRect.left + window.pageXOffset ;
	var positionY = clientRect.top + window.pageYOffset ;

	// 要素内におけるクリック位置を計算
	var x = clickX - positionX ;
	var y = clickY - positionY ;
    
    console.log('onclick x[%d] y[%d]', x, y);

    for(var r = 0; r < ROW_NUM; r++){
        for(var c = 0; c < COL_NUM; c++){
            var cell = cells[r][c];
            if(cell.isInside(x, y) == true){
                if(cellmap[r][c] == 0){
                    // 範囲外
                    break;
                }
                cellClick(cell);
                break;
            }
        }
    }
});

function OnBtnClick(){
    console.log('OnBtnClick');
    init();
    initCellMap();
};