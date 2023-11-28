import { NextResponse } from "next/server"
import { prisma } from "../../../config/prisma";

export const POST = async(req)=>{
    try {
        const body = await req.json();
        console.log("body",body);
        const response = await prisma.bills.create({
            data: {
              name: body?.name,
              units: body?.units,
              address:body?.address,
              phone: body?.phone,
            },
          })
          console.log("response",response)
      return  NextResponse.json({message:"Succesffuly Bill created"})
    } catch (error) {
      console.error("Error:", error); // Log the error for debugging purposes
      return NextResponse.json({ message: "Something went wrong", error: error.message }); // Send back the error message
  }

}
