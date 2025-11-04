// src/routes/login/login.action.ts
import { redirect } from "react-router-dom";

export async function loginAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  // Fake login
  if (email === "user@example.com" && password === "password") {
    localStorage.setItem("isLoggedIn", "true");
    const redirectTo = formData.get("redirect") || "/dashboard";
    throw redirect(redirectTo as string);
  }

  return { error: "Invalid credentials" };
}