import { atomWithHash } from "jotai/utils";
import { Router } from "next/router";

const searchAtom = atomWithHash("search", "", {
  subscribe: (callback) => {
    Router.events.on("routeChangeComplete", callback);
    window.addEventListener("hashchange", callback);
    return () => {
      Router.events.off("routeChangeComplete", callback);
      window.removeEventListener("hashchange", callback);
    };
  },
});

export { searchAtom };
