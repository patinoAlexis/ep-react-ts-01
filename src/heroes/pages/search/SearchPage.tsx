import { CustomHeader } from "@/components/custom/CustomHeader.tsx";
import { HeroStats } from "@/heroes/components/HeroStats.tsx";
import { SearchControls } from "@/heroes/pages/search/ui/SearchControl.tsx";
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs.tsx";

export const SearchPage = () => {
  return (
    <>
      <CustomHeader
        title="Search of Super's"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />
      <CustomBreadCrumbs></CustomBreadCrumbs>

      <HeroStats />
      {/*  Filter and search*/}
      <SearchControls />
    </>
  );
};

export default SearchPage;
