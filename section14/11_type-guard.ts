interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  // 유니온 타입 - 공통된 속성만 접근 가능
  return { name: 'Tony', age: 33, skill: 'Iron Making' };
}

var tony = introduce();
console.log(tony.name); // 공통된 속성
console.log(tony.skill); // Developer에만 있는 속성

// 타입 단언을 활용한 접근 방식 (as)
if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

// 타입 가드 정의 (is)
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
