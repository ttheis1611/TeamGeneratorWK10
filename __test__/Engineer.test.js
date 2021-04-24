const Engineer = require('../lib/Engineer.js');

test("Create GitHub test", () => {
    const valTest = "GitHubUser";
    const hub = new Engineer("Foo", 1, "email@email.com", valTest);
    expect(hub.github).toBe(valTest);
});

test("getRole() test", () => {
    const val = "Engineer";
    const role = new Engineer("Foo", 1, "email@email.com", "GitHubUser", val);
    expect(role.getRole()).toBe(val);
});

test("Get GitHub username with getGitHub() test", () => {
    const val = "riprock";
    const hub = new Engineer("Foo", 1, "email@email.com", val);
    expect(hub.getGithub()).toBe(val);
});