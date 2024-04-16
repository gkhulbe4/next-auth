import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import SignoutButton from "./SignoutButton";
import { Button } from "@/components/ui/button";
import { authOptions } from "../lib/utils/auth";

async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <div className="space-x-3">
      {session ? (
        <SignoutButton />
      ) : (
        <Button>
          <Link href={"auth"}>Signin</Link>
        </Button>
      )}
    </div>
  );
}

export default Header;
