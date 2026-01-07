import { SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb.tsx";
import { Link, useLocation } from "react-router";
//todo make option that when given a prop, use those values instead of creating the own values
export const CustomBreadCrumbs = () => {
  const { pathname } = useLocation();
  const pathNameArray = pathname.split("/");
  const options = pathNameArray
    .slice(1)
    .map((item, id) => {
      if (!item) {
        return undefined;
      }
      return {
        name: `${item[0]?.toUpperCase()}${item?.slice(1)}`,
        href: pathname.split("/").slice(0, id).join("/"),
      };
    })
    .filter((el) => !!el);
  return (
    <Breadcrumb className="my-3 ml-2">
      <BreadcrumbList className="flex">
        <BreadcrumbItem>
          {options.length > 0 ? (
            <BreadcrumbLink
              asChild
              className="transition ease-in-out duration-300 hover:bg-indigo-200 rounded-md p-2 "
            >
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>Home</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {options.map((item, id) => (
          <>
            <BreadcrumbSeparator key={`${id}-separator`}>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem key={`${id}-item`}>
              {options.length === id + 1 ? (
                <BreadcrumbPage className="bg-indigo-200 rounded-md p-2">
                  {item.name}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  asChild
                  className="transition ease-in-out duration-300 hover:bg-indigo-200 rounded-md p-2"
                >
                  <Link to={item.href}>
                    {item.name} {id}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
