import { withRouter } from "next/router";
import { getConfig } from "@builtjs/theme";
import Page from "../lib/page";

export default withRouter(Page);

export async function getStaticProps() {
  const config = await getConfig("blog");
  return {
    props: { config },
  };
}
