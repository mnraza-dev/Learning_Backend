import { NextResponse } from "next/server"

export const GET = () => {
    
    return NextResponse.json({
        avatarUrl: "https://banner2.cleanpng.com/cb4/icd/pol/atee9zif2.webp",
        username: "MN Raza",
        password: "123456"
    })
}