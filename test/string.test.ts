const anything = "UNAC";
const anything1 = "UnAc";
test("UNAC contains UN", ()=>{
    //Probar
    expect(anything).toMatch(/UN/);
});

test("UNAC does not contains a P", ()=>{
    //Probar
    expect(anything).not.toMatch(/P/);
});

test("UNAC does not contains a a", ()=>{
    //Probar
    expect(anything1).not.toMatch(/a/);
});

test("UNAC does not contains a a", ()=>{
    //Probar
    expect(anything1).not.toMatch(/a/);
});