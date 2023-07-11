'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {redirect} from "next/navigation"
export default function() {
  const supabase = createClientComponentClient()
  const handleSignOut = async () => {
    try{
      const {error} = await supabase.auth.signOut();
      if(error) throw error;
    } catch(error){
      alert(error.error_description || error.message)
    }
    window.location.reload()
  }

  return (
    <button onClick={handleSignOut} className="bg-blue-600">
      Sign out
    </button>
  );
}