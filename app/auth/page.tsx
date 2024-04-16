import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authOptions } from "@/app/lib/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SigninWithGithub from "../components/SigninWithGithub";
import SignInForm from "../components/SignInForm";
import SigninWithGoogle from "../components/SigninWithGoogle";

export default async function AuthRoute() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Please sign in </CardTitle>
          <CardDescription>
            To access the private page you have to be authenticated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <SignInForm />
            <SigninWithGithub />
            <SigninWithGoogle />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
