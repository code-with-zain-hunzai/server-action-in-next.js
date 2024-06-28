"use server"
import fs from 'fs/promises'

export const submitAction = async (e) => {
    "use server"
    console.log(e.get("name"), e.get("password"))
    let a = await fs.writeFile("zain.txt", `Name is ${e.get("name")} and password is ${e.get("password")}`)
    console.log(a)
}