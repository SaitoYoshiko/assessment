'use strict'
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementByID('rtweet-area');


/**@param {HTMLElement} element 
*指定した子要素を全て削除
*/
function removeAllChildren(element){
    while (element.firstChild){//子要素が有る限り処理を実行
        element.removeChild(element.firstChild);
    }
}
assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0 ) {
        return;
    }
    
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText ='診断結果'
    resultDivided.appendChild(header);
    
    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
    
    //ツイートエリア
    removeAllChildren(tweetDivided);
    const anchor = document.cretateElement('a');
    const  hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
        + encordeURIComponent('あなたのいいところ')
        + '&rel_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'Tweet #あなたのいいところ';
    tweetDivided.appendChild(anchor);
    
    //widgets.js
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);
    
};

cosnt answers = [
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
    '{userName}のいいところは自制心です。やばいと思った時にしっかり衝動を抑えられる{userName}が皆に評価されています。'
    ];
    
    
/**名前の文字列から診断結果を返す関数
*@param {String} userName ユーザ名
*@result{String} result
*/
function assessment(userName) {
    //全文字のコードを番号にして合計を出す
    let sumOfCharCode =  0;
    for (let i = 0; i < userName.length; i++) {
        sumOfCharCode = sumOfCharCode + userName.charcodeAt(i);
    }
    
    
    //名前の合計数を回答の数で割って添字を求める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    
    result = result.replace(/{userName}/g, userName);
    return result;
    
}

//テスト
console.assert (
    assessment('太郎') === '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '診断結果の文章内で置き換えられた名前が一致していません');
    
console.assert(
    assessment('太郎') === assessment('太郎'),
    '同じ名前が入力された時に同じ診断結果を出力する処理が正しくありません);
    
    
    
    
    
    
    
    
