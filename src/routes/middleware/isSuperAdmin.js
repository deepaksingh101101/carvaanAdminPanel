import { useEffect } from "react"

export const is_super_admin=()=>{

    useEffect(() => {
    let is_super_admin=localStorage.getItem("authUser");
    }, [])

    return is_super_admin;

}