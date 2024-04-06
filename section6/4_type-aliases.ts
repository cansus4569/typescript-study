// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
  name: string;
  age: number;
};

var seho: Person = {
  name: '세호',
  age: 30,
};

/** 타입 별칭 */
type MyString = string;
const str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
// function getTodo(todo: { id: string; title: string; done: boolean }) {} 
function getTodo(todo: Todo) {} // 타입 별칭을 사용하면 코드의 가독성이 높아진다.
