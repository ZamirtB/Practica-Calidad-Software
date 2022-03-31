const n = null;
const number = 0;
const notTrue = false
const notFalse = true

test("test n to be null", ()=>{
    //Probar
    expect (n).toBeNull();
});

test("test n to be null", ()=>{
    //Probar
    expect (n).toBeDefined();
});

test("test notTrue to be false", ()=>{
    //Probar
    expect (notTrue).toBeFalsy();
});

test("test notFalse to be true", ()=>{
    //Probar
    expect (notFalse).toBeTruthy();
});