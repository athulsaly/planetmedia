"use client";

import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname, useRouter } from "next/navigation";

const useCustomRouter = () => {
  const router = useRouter();

  const push = (href: string, as?: NavigateOptions) => {
    router.push(href, as);
  };

  const replace = (href: string, as?: NavigateOptions) => {
    router.replace(href, as);
  };

  const back = () => {
    router.back();
  };

  const forward = () => {
    router.forward();
  };

  const prefetch = (href: string) => {
    router.prefetch(href);
  };

  const reload = () => {
    router.refresh();
  };

  return {
    push,
    replace,
    back,
    forward,
    prefetch,
    reload,
    pathname: usePathname(),
  };
};

export default useCustomRouter;
