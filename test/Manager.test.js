const Manager = require("../src/Model/Manager");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", "test@test.com", testValue);
    expect(e._roomNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", "test@test.com", testValue);
    expect(e.getRoomNumber()).toBe(testValue);
});
