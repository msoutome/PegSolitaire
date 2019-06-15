
function createCells(){
    cells = new Array(ROW_NUM);
    for(var r=0; r < ROW_NUM; r++){
        cells[r] = new Array(COL_NUM);
        for(var c=0; c < COL_NUM; c++){
            var newCell = new Cell(r,c);
            cells[r][c] = newCell;
        }
    }
};

function initCellMap(){
    for(var r=0; r < ROW_NUM; r++){
        for(var c=0; c < COL_NUM; c++){
            cellmap[r][c] = initcellmap[r][c];
            console.log('cellmap[%d][%d]=[%d]',r,c,cellmap[r][c]);
            var cell = cells[r][c];
            if(cellmap[r][c] == 1){
                cell.draw();
            }else 
            if(cellmap[r][c] == 2){
                cell.clear();
            }
            else 
            if(cellmap[r][c] == 0){
                cell.ignore();
            }            
        }
    }
    selectedCell=null;
 };

function init(){
    console.log('init');

    drawCanvas();

    createCells();

    loadCellImg();
};
