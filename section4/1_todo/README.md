# 타입 정의하기 실습

## 1. 풀이 보기 전 생각
- todos는 배열이지만 배열의 값은 object 이다.
```js
const todos: object[]
```
- 이렇게 정의했더니, `todo.done` 에서 에러가 발생함...
- 객체안의 `key:value` 에 대해서도 명확하게 정의가 필요했다.
- 최초 C언어 개발할 땐, struct 로 구조체를 작성하는 법이 필요로 했다.
- 문듯 interface 로 객체안의 데이터도 정의를 해야겠다고 생각
 -> 무의식적으로 interface 가 생각이 났음.

### 해결하지 못한 부분...

```js
// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(todo1: Todo, todo2: Todo): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  addTodo(todo1);
  addTodo(todo2);
}
addTwoTodoItems();
```

- 실습에서 addTwoTodoItems 함수에는 파라미터가 없다... 근데 어떻게 할일 2개를 추가할까...?
- 이부분은 addTwoTodoItems 안에 코드만 작성하고 마무리 지었다.

## 2. 풀이 보기 후 생각

### todo.done 오류 해결은...?
- 객체 안의 데이터를 구체적으로 타입을 정의함.
```js
let todoItems: { id: number; title: string; done: boolean }[];
```
- interface 개념은 추후에 배우기에 길게 정의하는 형식으로 풀이된거 같다.


### 해결하지 못한 부분 풀이에서는 어떻게 해결했는가?
- 풀이에서는 addTwoTodoItems 함수안에 변수를 선언하여, 추가하였다...
- 즉, 파라미터를 받지않고 함수 내부에서 데이터를 생성하여 추가하였다. OTL