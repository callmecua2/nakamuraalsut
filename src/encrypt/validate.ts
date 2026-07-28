const userNameEnv = import.meta.env.REAL_USERNAME;
    const hashedPasswordEnv = import.meta.env.PASSWORD;
    const tokenEnv = import.meta.env.TOKEN;

function test() {
    console.log(userNameEnv, hashedPasswordEnv, tokenEnv)
}