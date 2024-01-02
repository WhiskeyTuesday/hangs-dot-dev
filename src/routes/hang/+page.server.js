import { redirect } from "@sveltejs/kit";

export const load = async ({ url }) => {
  console.log("url", url);
  const params = url.searchParams;
  const code = params.get("code");
  // TODO check if code is valid and redirect to /hang/:code
  // TODO if code is not valid, 404?
  if (code) {
    throw redirect(302, `/hang/${code}`);
  }
};
