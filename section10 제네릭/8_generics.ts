/** 일반적인 자바스크립트로 짠 함수 */
// 해당 함수는 type을 명시하지 않아서, 모든 타입을 받을 수 있음(any)
function logText(text) {
  console.log(text);
  return text;
}
logText(10); // 숫자 10
logText('하이'); // 문자열 하이
logText(true); // 진위값 true

/** 제네릭의 기본 문법 */
function logText1<A>(text: A): A {
  console.log(text);
  return text;
}
// This Case : 타입 추론이 됨
logText1('hi'); // hi 라는 값을 통해 문자열 타입으로 추론됨
// This Case : 타입을 명시적으로 지정
logText1<string>('hi');

/** 함수 중복 선언의 장점함수 중복 선언의 장점 */
// 처리로직은 동일한데, 타입만 다를 경우, 중복 선언으로 인해 가독성이 떨어지고 코드가 길어진다.
function logText2(text: string) {
  console.log(text);
  text.split('').reverse().join('');
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}

logText2('a');
logText2(10);
const num = logNumber(10);
logText2(true);

/** 유니온 타입을 이용한 선언 방식의 문제점 */
// 파라미터(input)에 대한 문제는 해결되지만
// 리턴값에 대한 문제는 해결되지 않음
// => 타입이 string | number 이기때문에 명확하지 않음
// 그래서 string | number 타입의 공통 메서드만 사용할 수 있음
// ex) toLocalString(), toString(), valueOf() 등
function logText3(text: string | number) {
  console.log(text);
  return text;
}

const a = logText3('a');
a.split(''); // 타입이 string | number 이기 때문에, split 함수를 사용할 수 없음 => 명확하게 string 타입을 지정해주어야만 split 사용 가능
logText3(10);

/** 제네릭의 장점 */
// 중복 함수 선언을 제거하고, 타입을 명시적으로 지정할 수 있음
function logText4<T>(text: T): T {
  console.log(text);
  return text;
}
// 함수를 호출하기전에 타입 정의
const str = logText4<string>('abc');
str.split('');
const login = logText4<boolean>(true);

/** 인터페이스에 제네릭을 선언하는 방법 */
interface Dropdown {
  value: string;
  selected: boolean;
}

const obj: Dropdown = { value: 'abc', selected: false };

interface DropDown2<T> {
  value: T;
  selected: boolean;
}

const obj2: DropDown2<string> = { value: 'abc', selected: false };
const obj3: DropDown2<number> = { value: 123, selected: false };

/** 제네릭의 타입 제한 */
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}

logTextLength<string>(['hi', 'bye']);

/** 제네릭 타입 제한 2 - 정의된 타입 이용하기 */
interface LengthType {
  length: number;
}

function logTextLength1<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}

logTextLength1('abc');
logTextLength1({ length: 10 });

/** 제네릭 타입 제한 3 - keyof */
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name")