import { password } from "bun";
import { comparePassword, hashPassword } from "./src/encrypt/enkripsi.ts";
// import { hashPassword } from "./src/encrypt/enkripsi";

// const pw : string = "$2b$12$wOVqo.44hg8okWJoV8UWe.wl.1GDmpQSM9YZnP7shrn10F0eYNxHK"
// const realPw : string = "S@kti2025"

// const compare = await comparePassword(realPw, pw)

// console.log(compare)

const dataPassword = "S@kti2025"


async function hashing(password: string) {
    const data = await hashPassword(password)
    console.log(data)
}

const hashed = "$2b$12$wOVqo.44hg8okWJoV8UWe.wl.1GDmpQSM9YZnP7shrn10F0eYNxHK"

// async function compare(password: string) {
//     const data = await comparePassword(password, hashed)
//     console.log(data)
// }

// hashing(dataPassword)

// compare(dataPassword)

const compare = await comparePassword(dataPassword, hashed)
console.log(compare)