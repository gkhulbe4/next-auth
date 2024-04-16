"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

function SignoutButton() {
  return (
    <div>
      <Button
        onClick={() =>
          signOut({ callbackUrl: `${window.location.origin}/auth` })
        }
      >
        Signout
      </Button>
    </div>
  );
}

export default SignoutButton;
