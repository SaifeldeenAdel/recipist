import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'
export async function GET(req){
	const supabase = createRouteHandlerClient({ cookies });
  let recipes, error;
  try {
    ({data : recipes, error} = await supabase.from('recipes').select('*').order('created_at', { ascending: false }));
    console.log(recipes, error.message);
    
    
    if(error){
      throw error;
    }

  } catch (error) {
    console.log(error.description || error.message);
  }
  return NextResponse.json({ recipes: recipes ?? [] });
}