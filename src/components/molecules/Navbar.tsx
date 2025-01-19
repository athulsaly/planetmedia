import Link from "next/link";

import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "../atoms/MaxWidthWrapper";
import { buttonVariants } from "../ui/button";
import toast from "react-hot-toast";

const Navbar = () => {
  const handleLogout = () => () => {
    toast.success("Logged out successfully");
    localStorage.removeItem(process.env.NEXT_PUBLIC_TOKEN!);
  };

  return (
    <nav className="sticky z-[40] h-14 inset-x-0 top-0 width-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            href="/dashboard"
            className="flex z-40 font-semibold items-baseline"
          >
            <span className="text-primary text-3xl font-bold">Super</span>
            <span className="text-xl">store</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            <Link
              href="/"
              onClick={handleLogout()}
              className={buttonVariants({ size: "sm", variant: "ghost" })}
            >
              Sign out
            </Link>
            <Link
              href="/dashboard"
              className={buttonVariants({ size: "sm", variant: "ghost" })}
            >
              Dashboard
            </Link>
            <Link
              href="/advertisement"
              className={buttonVariants({ size: "sm", variant: "ghost" })}
            >
              Advertisements
            </Link>
            <Link
              href="/advertisement/create"
              className={buttonVariants({
                size: "sm",
                className: "hidden sm:flex items-center gap-1",
              })}
            >
              Create Advertisement <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
