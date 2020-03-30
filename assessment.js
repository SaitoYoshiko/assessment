'use strict'
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElenmentById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById)('tweet-area');

/**
* 選択した要素の子要素を削除
* @param {HTMLElement} element HTML要素
*/
function removeAllChildren(element) {
    while (element.firstChild) {
       element.removeChild(element.firstChild);
    }
}



assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if ( userName.length === 0) {  //子要素が空の場合
        return ;
    }
    
    //result-area
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);
   
    const paragraph = document.createElement('p');
    const result = assessment('userName');
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
    
    
    //tweet‐area
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
        + encodeURIComponent('あなたのいいところ')
        + '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.classNama = 'twitter-hashtag-button';
    anchor.setAttribute('date-text', result);
    anchor.innerText = 'Tweet #あなたのいいところ';
    tweetDivided.appendChild(anchor);
    
    
    //widgets.jsの設定
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);
};
    

const answers = [
    '{userName}のいいところは声です。{userName}の特徴的な声は皆を引きつけ、心に残ります。',
    '{userName}のいいところは眼差しです。{userName}に見つめられた人は気になって仕方がないでしょう。',
    '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{userName}の厳しさがもの事をいつも成功に導きます。',
    '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
    '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{userName}の洞察に多くの人が助けられます。',
    '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
    '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
    '{userName}のいいところは思いやりです。{userName}に気にかけてもらった多くの人が感謝しています。',
    '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
    '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
    '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
    '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
    '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
    '{userName}のいいところは自制心です。やばいと思った時にしっかり衝動を抑えられる{userName}が皆に評価されています。',
    '{userName}のいいところは優しさです。{userName}の優しい雰囲気や立ち居振る舞いに多くの人が癒されています。'
];


/*
* 名前の文字列を受け取り診断結果を返す関数
* @param {String} userName ユーザ名
* @return {String} 診断結果
*/

function assessment (userName) {
    //全文のコードを数値で返却し、合計を返す
    let sumOfcharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
    }
    
    //文字コードの番号を合計して回答の合計数で割って添字を求める
    const index = sumOfcharCode % answers.length;
    let result = answers[index];
    
    result = result.replace(/{userName}/g.userName);
    return result;
}
    
 //テストコード
 console.assert (
     assessment('太郎') === '太郎のいいところは決断力で。太郎がする決断にいつも助けられる人がいます。',
     '診断結果のuserNameに入力された文字列に置き換える処理が正しくありません。'
 );
 console.assert (
     assessment('太郎') === assessment('太郎'),
     '入力が同じ文字列であれば、同じ診断結果が出力される処理が正しくありません。'
 );
    
    
    
    
