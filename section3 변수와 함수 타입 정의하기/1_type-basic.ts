/** JS 문자열 선언 */
// var str = 'hello';

/** TS 문자열 선언 */
let str: string = 'hello';

/** TS 숫자 */
let num: number = 10;

/** TS 배열 */
let arr: Array<number> = [1, 2, 3];
let items: number[] = [1, 2, 3];

let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];

/** TS 튜플 */
// 튜플 : 배열에 각각 인덱스에 어떤 타입이 정리되어 있다.
//  => 모든 인덱스에 타입이 정리되어 있는 배열
let address: [string, number] = ['gangnam', 100];

/** TS 객체 */
let obj: object = {};
// let person: object = {
//   name: 'capt',
//   age: 100,
// };
let person: { name: string; age: number } = {
    name: 'thor',
    age: 1000
};

/** TS 진위값 */
let show: boolean = true;
