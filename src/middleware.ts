import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;

  // Proteksi halaman /admin dan seluruh sub-route di bawahnya (/admin/edit, dll.)
  if (pathname.startsWith("/admin/edit")) {
    const authToken = context.cookies.get("auth_login")?.value;
    const validToken = import.meta.env.TOKEN;

    // Jika cookie tidak ada ATAU isinya tidak sesuai dengan token env
    if (!authToken || !validToken || authToken !== validToken) {
      return context.redirect("/admin");
    }
  }

  return next();
});