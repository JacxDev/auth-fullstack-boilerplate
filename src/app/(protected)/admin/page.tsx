import { auth } from "@/auth";
import React from "react";

const AdminPage = async () => {
  const session = await auth();

  if (session?.user.role !== "admin") {
    return <div>Invalid role</div>
  } 
  
  return <div>page</div>;
};

export default AdminPage;
