// プログレスバーを作って bar という変数に入れる
var bar = new ProgressBar.Line(splash_text, {
	strokeWidth: 0,//進捗ゲージの太さ
	duration: 1000,//時間指定(1000＝1秒)
	trailWidth: 0,//線の太さ
	// →線は見せず数字だけ表示させたいため

	// ProgressBar.js がJSでスタイルも指定できる仕様のため
	// JSに指定　実務ではCSSの方が◎
	text: {//テキストのみためを直接指定
		style: {
			position:'absolute',
			left:'50%',
			top:'50%',
			padding:'0',
			margin:'0',
			transform:'translate(-50%,-50%)',
			'font-size':'1.2rem',
			color:'#fff',
		},
		autoStyleContainer: false //ProgressBar.js が勝手に付けるCSSを 無効化する
	},
	step: function(state, bar) {
		// bar.value...現在の進捗
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});



//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定 1.0 なら100%まで描画
	$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
}); 
