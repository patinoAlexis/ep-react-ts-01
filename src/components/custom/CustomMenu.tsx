import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils.ts";

export const CustomMenu = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) => {
    return path === pathname;
  };
  return (
    <NavigationMenu className="my-4">
      <NavigationMenuList className="flex">
        {/*Home*/}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(isActive("/") && "bg-slate-200 rounded-md", "p-2")}
          >
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/*  Search*/}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              isActive("/search") && "bg-slate-200 rounded-md",
              "p-2",
            )}
          >
            <Link to="/search">Search heroes</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
