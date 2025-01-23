import { NextRequest, NextResponse } from "next/server";
export async function POST(req:NextRequest){
    const body = await req.json()

    try{
        if(body.email == "admin@gmail.com" && body.password == "123"){
            return NextResponse.json({
                redirecturl:'/admin'
            })
        }else{
            return NextResponse.json({
                redirecturl:'/'
            })
        }
    }
    catch (error) {
       
        return NextResponse.json(
          {
            error: "An unexpected error occurred.",
          },
          { status: 500 } 
        );
      }
    }