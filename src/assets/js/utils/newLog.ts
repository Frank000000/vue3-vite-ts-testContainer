// describe('test suite', function () {
//   it('should expose a function', function () {
//     expect(add).to.be.a('function');
//   });

//   it('should do math', function () {
//     expect(add(1, 3)).to.equal(4);
//   });
// });

export default class marginAll {
  public addNum = (a: any, b: any) => {
    let c = a + b
    console.log('add=================', c);
  }
  public substract = (a: any, b: any) => {
    let c = b - a
    console.log('substract=================', c);
  }
}

const giveMe = (a: any, b: any) => {
  let c = a + b
  console.log('c=================', c)
}

// export default [giveMe, marginAll]
// export default marginAll