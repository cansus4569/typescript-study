/** 타입 호환 예제 - 인터페이스, 클래스 */
// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person1 {
  name: string;
}

// 클래스
class Person2 {
  name: string;
}

var developer: Developer;
var person1: Person1;
var person2: Person2;

developer = person1; // Error: Property 'skill' is missing in type 'Person' but required in type 'Developer'.
person1 = developer; // 호환 OK
developer = new Person2(); // Error: Type 'Person' is not assignable to type 'Developer'.

/** 타입 호환 에제 - 함수, 제네릭 */
// 함수
var add = function (a: number) {};

var sum1 = function (a: number, b: number) {};

sum1 = add; // 호환 OK
add = sum1; // Error: Type '(a: number, b: number) => void' is not assignable to type '(a: number) => void'.

// 제네릭
interface Empty<T> {
  // ...
}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2; // 호환 OK
empty2 = empty1; // 호환 OK

interface NotEmpty<T> {
  data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

notEmpty1 = notEmpty2; // Error: Type 'NotEmpty<number>' is not assignable to type 'NotEmpty<string>'.
notEmpty2 = notEmpty1; // Error: Type 'NotEmpty<string>' is not assignable to type 'NotEmpty<number>'.
