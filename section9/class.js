/** ES6 이전에 프로토타입 기반을 이용한 방식 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person('캡틴', 100);

/** 클래스 ES2015 (ES6) */
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성되었습니다.');
    this.name = name;
    this.age = age;
  }
}

var seho = new Person('세호', 30); // 생성되었습니다.
console.log(seho); // Person { name: '세호', age: 30}

/** JS 프로토타입 */
var user = { name: 'capt', age: 100 };
// var admin = { name: 'capt', age: 100, role: 'admin' }; // name, age 중첩
var admin = {};
admin.__proto__ = user; // 상속 받음
console.log(admin.name); // capt
console.log(admin.age); // 100

admin.role = 'admin';
console.log(admin); // { role: 'admin' }  // __proto__ 상속받은 것은 출력되지 않음

/** 자바스크립트 프로토타입의 활용 사례 */ 
var obj = { a: 10 };
Object.keys(obj); // [ 'a' ]

obj.hasOwnProperty('a'); // true
console.log(obj); // { a: 10 } // __proto__: Object

// Built-in Javascript API 또는 Javascript Native API  라고 부름