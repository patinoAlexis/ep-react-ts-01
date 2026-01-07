import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomHeader } from "@/components/custom/CustomHeader.tsx";
import { HeroStats } from "@/heroes/components/HeroStats.tsx";
import { SearchControls } from "@/heroes/pages/search/ui/SearchControl.tsx";
import { HeroGrid } from "@/heroes/components/HeroGrid.tsx";
import { useState } from "react";
import { CustomPagination } from "@/components/custom/CustomPagination.tsx";
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs.tsx";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");
  return (
    <>
      <>
        {/* Header */}
        <CustomHeader
          title="Super's Universe"
          description="Discover, explore, and manage your favorite superheroes and villains"
        />
        <CustomBreadCrumbs></CustomBreadCrumbs>

        {/* Stats Dashboard */}
        <HeroStats />
        {/* Controls */}
        <SearchControls />
        {/* Advanced Filters */}

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger onClick={() => setActiveTab("all")} value="all">
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              onClick={() => setActiveTab("favorites")}
              className="flex items-center gap-2"
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("villains")}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            Todos los personajes
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            Todos los favoritos
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            heroes
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            villanos
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Character Grid */}

        {/* Pagination */}
        <CustomPagination totalPages={3} />
      </>
    </>
  );
};
