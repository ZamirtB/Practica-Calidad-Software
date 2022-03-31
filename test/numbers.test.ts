import { sum } from"../src/sum";

test("test sum 5+5 (10) be greater than 5", ()=>{
    //Probar
    expect(sum(5,5)).toBeGreaterThan(5);
});

test("test sum 5+5 (10) be greater than 10", ()=>{
    //Probar
    expect(sum(5,5)).toBeGreaterThanOrEqual(10);
});

// test("test sum 2+1 < 4", ()=>{
//     //Probar
//     expect(sum(2,1)).toBeGreaterThan(3);
// });