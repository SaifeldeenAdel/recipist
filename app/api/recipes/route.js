import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req){
	const supabase = createRouteHandlerClient({ cookies });
  let recipes, error;
  try {
    ({data : recipes, error} = await supabase.from('Recipes').select('*'));
    if(error){
      throw error;
    }

  } catch (error) {
    alert(error.description || error.message);
  }
  return NextResponse.json({recipes})
}