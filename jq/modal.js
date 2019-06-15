(function($) {

//センタリングを実行する関数
$.fn.centeringModalSyncer=function () {

    //画面(ウィンドウ)の幅、高さを取得
    var w = $( '#canvas' ).width() ;
    var h = $( '#canvas' ).height() ;

    // コンテンツ(#modal-content)の幅、高さを取得
    var cw = $( '#modal-content' ).outerWidth();
    var ch = $( '#modal-content' ).outerHeight();

    //センタリングを実行する
    $( '#modal-content' ).css( {'left': ((w - cw)/2) + 'px','top': ((h - ch)/2) + 'px'} ) ;
};

$.fn.gameClear=function(){
    console.log('game gameClear');
    //キーボード操作などにより、オーバーレイが多重起動するのを防止する
    $(this).blur() ;	//ボタンからフォーカスを外す
    
    //新しくモーダルウィンドウを起動しない
    if($('#modal-overlay')[0]) return false ;

    //オーバーレイ用のHTMLコードを、[body]内の最後に生成する
    $('body').append('<div id="modal-overlay"></div>');

    //[$modal-overlay]をフェードインさせる
    $('#modal-overlay').show();

    $(document).centeringModalSyncer();

    //[$modal-content]をフェードインさせる
    $('#modal-content').show();
};
})(jQuery);

$(function(){
$(document).on('click','#modal-overlay,#modal-content',
    function(){
        console.log('click');
        $('#modal-content,#modal-overlay').fadeOut('slow',
            function(){
                //フェードアウト後、[#modal-overlay]をHTML(DOM)上から削除
                console.log('fadeOut');
                $('#modal-overlay').remove();
            }
        );    
    }
);
});