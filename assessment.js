'use strict';

const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');


assessmentButton.onclick = function(){
  const userName = userNameInput.value;
  if(userName.length === 0){
    return;
  }
while(resultDivided.firstChild){
  resultDivided.removeChild(resultDivided.firstChild);
}
const header = document.createElement('h3');
header.innerHTML = '診断結果';
resultDivided.appendChild(header);

const paraguraph = document.createElement('p');
const result = assessment(userName);
paraguraph.innerHTML = result;
resultDivided.appendChild(paraguraph);

};


const answars = [
  '{userName}のいいところは才能あるところ',
  '{userName}のいいところは元気なところ',
  '{userName}のいいところはやさしいところ', 
  '{userName}のいいところは強いところ',
  '{userName}のいいところは金持ちなところ'
];



/**
 * 名前の文字列を渡すと診断結果を表示する関数
 * @param {string} userName 
 * @returns {string} 診断結果
 */

function assessment(userName){
 let sumOfCharCode = 0;
 for(let i = 0; i < userName.length; i++){
  sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
 }

 const index = sumOfCharCode % answars.length;
 let result = answars[index];

 result = result.replaceAll('{userName}',userName);
 return result;
};

