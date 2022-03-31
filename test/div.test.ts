import { div } from"../src/div";

test("Test div function 10/2 equals 5", ()=>{
    //Probar
    expect (div(10,2)).toBe(5);
});

test("Test div function 10/0 gives error", ()=>{
    //Probar
    expect (div(10,0)).toBe(Infinity);
});