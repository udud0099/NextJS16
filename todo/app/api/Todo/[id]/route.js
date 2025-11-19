import connectDB from "@/lib/database"
import Todo from "@/model/Todo.model"
import { NextResponse } from "next/server"


export async function GET(req,{params}){
    const {id} = await params;
    await connectDB();
    const todo = await Todo.findById(id);
    return NextResponse.json({todo:todo});
}