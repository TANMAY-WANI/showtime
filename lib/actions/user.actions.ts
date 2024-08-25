"use server";

import { auth } from "@clerk/nextjs/server";

export const handleUser = ()=>{
    const {userId} = auth()



    console.log("User logged in");  
}