"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { Button } from "@/components/ui/button";
import { logoutAction } from "@/actions/auth-actions";

import { useAppDispatch } from "@/store";
import { clearUser } from "@/store/user/userSlice";

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const handleClick = async () => {
    await logoutAction();
    dispatch(clearUser());
    signOut({
      callbackUrl: "/login",
    });
  };

  return <Button onClick={handleClick}>Logout</Button>;
};

export default LogoutButton;
