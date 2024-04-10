// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

/** Union Type ( | 연산자 ) */ 

// 3개의 타입중 하나가 될 수 있다라고 정의
var seho: string | number | boolean;

function logMessage(value: string | number) {
  // 유니온 타입의 장점
  // 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
  if (typeof value === 'number') {
    value.toLocaleString();
  } else if (typeof value === 'string') {
    value.toString();
  } else {
    // string도 number 도 아닌 경우 에러 처리 가능
    throw new TypeError('value must be string or number');
  }
}
logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

/** 유니온 타입의 특징 : 공통 속성만 접근 가능 */
function askSomeone1(someone: Developer | Person) {
  someone.name;
  //   someone.skill; // error
  //   someone.age; // error
}

/** ( & 연산자 ) Intersection Type */
var seho: string | number | boolean;
var capt: string & number & boolean; // type: never

function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}

/** 유니온 타입과 인터섹션 타입의 차이점 */
function askSomeone3(someone: Developer | Person) {}
askSomeone3({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone3({ name: '캡틴', age: 100 });

function askSomeone4(someone: Developer & Person) { // 합집합 개념 / 새로운 타입을 만들게 됨
    someone.name;
    someone.skill;
    someone.age;
}
askSomeone4({ name: '디벨로퍼', skill: '웹 개발' }); // error : age 도 필요함
askSomeone4({ name: '캡틴', age: 100 }); // error : skill 도 필요함
askSomeone4({ name: '캡틴', age: 100, skill: '웹 개발'}); // 
