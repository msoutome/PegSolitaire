// constructor
Cell = function(row, col){
    this.Row=row;
    this.Col=col;

    this.w=COL_W;
    this.h=ROW_H;
    this.x=col*this.w+(col+1)*LW;//canvasの枠線を考慮
    this.y=row*this.h+(row+1)*LW;//canvasの枠線を考慮
    this.dx=this.x;
    this.dy=this.y;
    this.dw=this.w;
    this.dh=this.h;

    this.drawflg = 0;
    this.selectflg = 0;

    console.log('Cell constructor');
};

Cell.prototype.copy = function(org){
    this.drawflg = org.drawflg;
    this.selectflg = org.selectflg;
};

Cell.prototype.isInside = function(x, y){
    var retflg;
    if( this.x<=x && x < this.x+this.w && 
        this.y<=y && y < this.y+this.h){
        retflg = true;
    }else{
        retflg = false;
    }
    return retflg;   
};

Cell.prototype.clear = function(){
    console.log('clear [%d][%d]',this.Row, this.Col);

    clearCell( this.dx, this.dy, this.dw, this.dh );
    this.drawflg = 0;
    cellmap[this.Row][this.Col] = 2;

    this.selectflg = 0;
    if(selectedCell == this){
        selectedCell = null;
    }
};

Cell.prototype.draw = function(){
    console.log('draw [%d][%d]',this.Row, this.Col);

    drawCell( this.dx, this.dy, this.dw, this.dh );
    this.drawflg = 1;
    cellmap[this.Row][this.Col] = 1;

    this.selectflg = 0;
    if(selectedCell == this){
        selectedCell = null;
    }
};

Cell.prototype.ignore = function(){
    console.log('ignore [%d][%d]',this.Row, this.Col);
    ignoreCell( this.dx, this.dy, this.dw, this.dh );
};

Cell.prototype.select = function(){
    console.log('select [%d][%d]',this.Row, this.Col);

    selectCell( this.dx, this.dy, this.dw, this.dh );
    this.drawflg = 1;
    cellmap[this.Row][this.Col] = 1;

    this.selectflg = 1;
    selectedCell = this;
};