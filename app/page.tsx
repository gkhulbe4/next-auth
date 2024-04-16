import { authOptions } from "@/app/lib/utils/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Hello from the public route</h1>
      <h1 className="font-bold">
        {session
          ? "You are logged in"
          : "Please log in to see something special"}
      </h1>
    </div>
  );
}
