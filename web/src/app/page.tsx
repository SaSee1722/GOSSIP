import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import HomeClient from "./home-client"; // We'll move the client part here

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    // If logged in, go to the dashboard (which we'll handle with a specialized route or just use the same page with different layout)
    // For now, let's treat the root as the landing page, and redirect logged-in users to /chat or just render the dashboard layout if we structure it that way.
    // Let's create a dedicated /chat route to be safe, or just render the client component.
    // Actually, based on standard patterns, let's have '/' check auth.
  }

  return <HomeClient user={user} />;
}
