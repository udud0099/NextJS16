import connectMongoDB from "@/lib/db"
import Topic from "@/model/topic"
import { NextResponse } from "next/server"




export async function POST(req){
    const {title, des} = await req.json()
    await connectMongoDB()
    await Topic.create({title, des})
    return NextResponse.json({message:"Topic create"}, {status:201})
}