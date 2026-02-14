// --------------------
// ①ロード時ランダムふわっ
// --------------------
function randomLoadAnime(){
    var randomElm = $(".box");         // 親
    // .children() ... 取得した要素の直下の 子要素を全部取得
    // .toArray() ... jQueryオブジェクト → 普通の配列に変換
    var randomElmChild = randomElm.children().toArray(); 

    // function addRandom() { ... } ← 処理の箱
    //  addRandom(); ← 箱を開けて処理開始
    function addRandom(){
        if(randomElmChild.length === 0) return;
        // 0〜残りの数−1 の間でランダムに1つ選ぶ
        var rnd = Math.floor(Math.random() * randomElmChild.length);
        $(randomElmChild[rnd]).addClass("fadeUp"); 
        // 同じ要素に再度アニメーションを付けないようにする
        randomElmChild.splice(rnd, 1);             
        setTimeout(addRandom, 500);               // 次の要素を0.5秒後に実行
    }
    // 最後に最初の1回を呼ぶ → 「処理をスタートさせるスイッチ」
    addRandom();
}

// --------------------
// ②スクロール時順番ふわっ
// --------------------
function delayScrollAnime() {
    var time = 0.2;
    var value = time;

    // .each() ... 「複数要素に対して順番に処理をする」
    $('.delayScroll').each(function () {
        var parent = this;
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var childs = $(this).children();

        if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
            $(childs).each(function () {
                if (!$(this).hasClass("fadeUp")) {
                    $(parent).addClass("play");
                    $(this).css("animation-delay", value + "s");
                    $(this).addClass("fadeUp");
                    value += time;

                    var index = $(childs).index(this);
                    if((childs.length-1) == index){
                        $(parent).removeClass("play");
                    }
                }
            })
        } else {
            // 要素が画面から外れたら素の .fadeUp を削除 → 再び非表示に
            // 遅延時間 value をリセット
            $(childs).removeClass("fadeUp");
            value = time;
        }
    })
}


// イベント
$(window).on('load', function(){
    randomLoadAnime();   // ロード時ランダムアニメ
    delayScrollAnime();  // スクロール用アニメ
});

$(window).scroll(function(){
    delayScrollAnime();  // スクロール用アニメ
});
