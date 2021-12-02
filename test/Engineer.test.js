const Engineer = require("../src/Model/Engineer");

test("Can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", "test@test.com", testValue);
    expect(e._github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo","test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});