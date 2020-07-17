// ヴァネロピの要素1
// vane11ope_one + conjunction + vane11ope_two + 'ヴァネロピ'
let vane11ope_one = ['最強', '闇', '光', '混沌', '夜', '無職', '太陽', '昼',
                     '堕天使', 'OSS', '闇社会', 'ツイキャス', '夕暮れ',
                     '(๑•ૅㅁ•๑)', '性欲', '執着', '人類', 'メモ帳', 'ボディ・サスペンション',
                     '連続殺人犯', '明朝体', '無抵抗', 'SMプレイ', 'ログインボーナス', 'お月見団子',
                     '東京オリンピック', '脱落', '原子力', '登竜門', 'サメプロ', '金の卵', '近視眼',
                     'ボケ防止', '母親', '豆腐メンタル', 'メンヘラ', 'コンテナ', 'アンドーナツ', '四面楚歌',
                     'なりすまし', '回し蹴り', 'ビンタ', '(๑•̥ૅㅁ•̥๑)', '(๑>◡<๑)', '٩(๑❛ᴗ❛๑)۶', '受験', '思考停止',
                     '物乞い', '期末テスト', 'お釈迦様', '不良番長', 'バナナセーキ', '少年法', '体育教師', '水泳', 'ジャスミン茶',
                     'radare', 'ヴァネロピ', '破壊王', '全て', 'この世', '宇宙', ''
                    ];
let conjunction = ['の', 'は', 'を', 'が', 'と', ''];
let vane11ope_two = ['帝王', '王様', '覇者', '犬', '神', 'プロ', '王', 'ちゅっ😘💓', ''];


function vane11ope_maker(){
    let output_html = document.getElementById('result');

    output_html.innerHTML = vane11ope_one[getRandomInt(vane11ope_one.length - 1)];
    output_html.innerHTML += conjunction[getRandomInt(conjunction.length - 1)];
    output_html.innerHTML += vane11ope_two[getRandomInt(vane11ope_two.length - 1)] + ' ヴァネロピ';

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}