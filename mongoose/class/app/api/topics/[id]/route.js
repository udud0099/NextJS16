import connectMongoDB from "@/lib/db"
import Topic from "@/model/topic"
import { NextResponse } from "next/server"




export async function PUT(req, {params}){
    await connectMongoDB()
    const {id} = await params
    const {newTitle:title, newDes:des } = await req.json()
     await Topic.findByIdAndUpdate(id, {title, des })
    return NextResponse.json({message:"topic title updated" }, {status:200})
}