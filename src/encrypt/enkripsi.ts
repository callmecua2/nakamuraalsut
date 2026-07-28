import bcrypt from 'bcryptjs'

const SALT_ROUND = 12;

export async function hashPassword(password : string) :Promise<string> {
    return bcrypt.hash(password, SALT_ROUND)
}

export async function comparePassword(password : string, hashed : string) : Promise<boolean> {
   return bcrypt.compare(password, hashed) 
}

// function hashPassword(password : string) {
//     console.log(bcrypt.hashSync(password, SALT_ROUND))
// }

// function comparePassword(password : string, hashed : string) {
//     console.log(bcrypt.compareSync(password, hashed))
// }

const id : string = "$2b$12$NLNZNY1HGn8IzNvxoU6lq.MlI2xUQpL.CQL5FVIlHpwrZn0m6Dc4K"
const realId : string = "nakamuraalsut"

const pw : string = "$2b$12$wOVqo.44hg8okWJoV8UWe.wl.1GDmpQSM9YZnP7shrn10F0eYNxHK"
const realPw : string = "S@kti2025"

// function comparePassword(password : string, hashed : string) {
//     console.log(bcrypt.compareSync(password, hashed))
// }






// hashPassword("nakamuraalsut")
// hashPassword("S@kti2025")

comparePassword(realId, id)
comparePassword(realPw, pw)