"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { Button } from "@/components/ui/button";
import { logoutAction } from "@/actions/auth-actions";

const LogoutButton = () => {
  const handleClick = async () => {
    await logoutAction();
    signOut({
      callbackUrl: "/login",
    });

    console.log("Logout");
  };

  return <Button onClick={handleClick}>Logout</Button>;
};

export default LogoutButton;
