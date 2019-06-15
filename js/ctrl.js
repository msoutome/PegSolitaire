function chkClear(){
    var cnt = 0;
    for(var r=0; r < ROW_NUM; r++){
        for(var c=0; c < COL_NUM; c++){
            if(cellmap[r][c]==1){
                cnt++;
            }
        }
    }
    if(cnt==1){
        return true;
    }

    return false;
}

function swap(from, to){
    console.log('swap');

    // 移動元、先の中間マスの判定
    var midCell = null;
    if( from.Row == to.Row && from.Col+2 == to.Col){
        if(cellmap[from.Row][from.Col+1] == 1){
            midCell = cells[from.Row][from.Col+1];
        }
    }
    if( from.Row == to.Row && from.Col-2 == to.Col){
        if(cellmap[from.Row][from.Col-1] == 1){
            midCell = cells[from.Row][from.Col-1];
        }
    }
    if( from.Col == to.Col && from.Row+2 == to.Row){
        if(cellmap[from.Row+1][from.Col] == 1){
            midCell = cells[from.Row+1][from.Col];
        }
    }
    if( from.Col == to.Col && from.Row-2 == to.Row){
        if(cellmap[from.Row-1][from.Col] == 1){
            midCell = cells[from.Row-1][from.Col];
        }
    }
    if(midCell == null){
        // 移動不可（中間マス無し）
        return;
    }

    // 先
    to.copy(from);
    to.draw();

    // 元
    from.clear();

    // 中間
    midCell.clear();

    // クリア判定
    if(chkClear()){
        $(function(){
            $(document).gameClear();
        });
    }

    console.log('cellmap[%d][%d]=[%d]',from.Row,from.Col,cellmap[from.Row][from.Col]);
    console.log('initcellmap[%d][%d]=[%d]',from.Row,from.Col,initcellmap[from.Row][from.Col]);
};

function cellClick(cell){
    console.log('cellClick [%d][%d] drawflg[%d],selectflg[%d]', cell.Row, cell.Col,cell.drawflg,cell.selectflg);
    if(cell.drawflg == 1){
        // 選択操作
        if(cell.selectflg == 0){
            // 選択中を消す
            if(selectedCell != null){
                selectedCell.draw();
            }
            // 選択
            cell.select();
        }else{
            // 選択解除
            cell.draw();
        }
    }else{
        // 空きセル以外はNG
        if(cellmap[cell.Row][cell.Col] != 2){
            return;
        }
        // 選択セル無しはNG
        if(selectedCell == null){
            return;
        }
        // セル入れ替え
        swap(selectedCell, cell);
    }
};