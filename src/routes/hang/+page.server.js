import { redirect } from "@sveltejs/kit";

export const load = async ({ url }) => {
  console.log("url", url);
  const params = url.searchParams;
  const code = params.get("code");
  if (code) {
    throw redirect(302, `/hang/${code}`);
  }
};
