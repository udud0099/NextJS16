import connectDB from "@/lib/database"
import Todo from "@/model/Todo.model"
import { NextResponse } from "next/server"


export async function POST(req, res){
    const {title, des} = await req.json()
    await connectDB()

    const todo = await Todo.create({title, des})
    return NextResponse.json({
        message: "Todo created successfully", 
        todo:todo
    })
}

export async function GET(){
    await connectDB()
    const todos = await Todo.find()
    return NextResponse.json(todos)
}

export async function DELETE(req){
    const id = req.nextUrl.searchParams.get("id")
    await connectDB()
    await Todo.findByIdAndDelete(id)

    return NextResponse.json({
        message: "Todo deleted successfully"
    })
}


export async function PUT(req){
    const {id, title, des} = await req.json()
    await connectDB()
    const updatedTodo = await Todo.findByIdAndUpdate(
        id,{
            title, des
        },{new:true}
    )

     return NextResponse.json({
        message: "Todo update successfully", todo:updatedTodo
    })
}