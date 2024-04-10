/** 숫자형 이넘 : auto-increment */
enum Shoes {
  Nike,
  Adidas,
  Sth,
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0

/** 문자형 이넘 */
enum Shoes2 {
  Nike = '나이키',
  Adidas = '아디다스',
}

var myShoes2 = Shoes2.Nike;
console.log(myShoes2); // '나이키'

/** 이넘 활용 사례 */
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다.');
  }
  if (answer ===  Answer.No) {
    console.log('오답입니다.');
  }
}

askQuestion(Answer.Yes);
askQuestion('Yes'); // error
// askQuestion('yes');
// askQuestion('에스');
// askQuestion('y');
