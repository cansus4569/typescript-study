# 정보 URL

- [타입스크립트 공식](https://www.typescriptlang.org/)
- [강의 핸드북](https://joshua1988.github.io/ts/intro.html)
- [강의 Github](https://github.com/joshua1988/learn-typescript)

## JS Doc 기본 문법

```js
/**
 * 
 * @typedef {object} Abcd
 * @property {string} aa
 * @return {Promise<Abcd>}
 */
```

## 타입스크립트 장점 1
- definition(정의)를 통하여 데이터의 값을 브라우저나 console.log와 같은 방식으로 확인하지 않고, 데이터의 props와 타입을 확인할 수 있다.
- 실행하고 확인하기 전에 코드상에서 대처가 가능


## 타입스크립트 장점 2
- 에러 사전 방지
- 타입에 맞는 메서드 자동 완성 제공 (개발 생산성 향상) 

## 자바스크립트를 타입스크립트처럼 코딩하는 방법
- JS Doc을 이용하여 definition 한다.
- @ts-check 를 사용한다.