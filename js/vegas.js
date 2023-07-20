$(function() {
    $('.mainimg-tate').vegas({
        slides: [
            { src: './images/tate_1.jpg' },	
        ],
		transition: 'blur',			//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		animation: 'kenburns',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
		delay: 6000,				//次の画像を表示するまでの時間
		animationDuration: 10000,	//アニメーション間の引き継ぎタイミング。
		timer: false,				//プログレスバーを非表示に。
    });
});

$(function() {
    $('.mainimg-yoko').vegas({
        slides: [
            { src: './images/tate_1.jpg' },	
        ],
		transition: 'blur',	
		animation: 'kenburns',
		delay: 6000,
		animationDuration: 10000,
		timer: false,
    });
});
