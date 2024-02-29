import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-semibold text-white">
          NextAuth V5
        </h1>
        <p className="text-muted-foreground text-lg">
          Next.js role based authentication app
        </p>
        <div>
          <LoginButton>
            <Button>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
