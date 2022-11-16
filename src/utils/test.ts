// export const testJS = () => {
//   // for (const pramObj in window) {
//   //   console.log('key==',pramObj);
//   // }
//   // for (const el of [2, 3, 5, 6]) {
//   //   console.log(el);
//   // }

//   // let num = 0
//   // for (let i = 1; i < 10; i++) {
//   //   if (i % 5 == 0) {
//   //     // continue
//   //     break
//   //   }
//   //   num++
//   // }
//   // console.log('num==', num);

//   // const numbers = [6, 8, 1, 3, 9];
//   // console.log(Math.max(...numbers)); // 9
//   // console.log(Math.min(...numbers)); // 1 

//   // 用js添加引用值属性
//   // let person = new Object()
//   // person.name = 'jinjin'
//   // console.log('person==', person);

//   // 用ts添加引用值属性
//   // interface Person {
//   //   readonly id: number;
//   //   name:string;
//   //   age?:number;
//   //   [propName:string]:any
//   // }
//   // let tom: Person = {
//   //   id: 123,
//   //   name:'jinjin',
//   //   sex:'girl'
//   // }
//   // console.log('tom==',tom);

//   //js只要是new，就是创建对象
//   // let name=new String('matt')
//   // name.age=12
//   // console.log('name==',name);
//   //ts 声明对象
//   // interface Name{
//   //   [key:string]:any
//   // }
//   // let name:Name={
//   //   age:12,
//   //   sex:'girl',
//   // }
//   // console.log('name==',name);


//   console.log('this is test.js');
// }

export const testJs = (val: any): val is boolean => {
  return val
}