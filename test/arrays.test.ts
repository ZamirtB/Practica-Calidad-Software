const array = ["value1","value2","value3"];

test("const arrey contain value1", ()=>{
    //Probar
    expect(array).toContain("value1");
});

test("const arrey contain value2", ()=>{
    //Probar
    expect(array).toContain("value2");
});

test("const arrey not contain UNAC", ()=>{
    //Probar
    expect(array).not.toContain("UNAC");
});

