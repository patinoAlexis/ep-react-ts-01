import { Card, CardContent, CardHeader } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Brain, Eye, Gauge, Heart, Shield, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress.tsx";
import { HeroGridCard } from "@/heroes/components/HeroGridCard.tsx";

export const HeroGrid = () => {
  const dcBadge = (
    <Badge className="absolute top-3 right-3 text-xs bg-blue-600 text-white">
      DC
    </Badge>
  );
  const heroAlignmentBadge = (
    <Badge className="text-xs bg-green-100 text-green-800 border-green-200">
      Hero
    </Badge>
  );
  // const antiHeroAlignmentBadge = (
  //   <Badge className="text-xs bg-yellow-100 text-yellow-800 border-yellow-200">
  //     Anti-Hero
  //   </Badge>
  // );
  // const marvelBadge = (
  //   <Badge className="absolute top-3 right-3 text-xs bg-red-600 text-white">
  //     Marvel
  //   </Badge>
  // );
  // const marvelBadge = <Badge className="absolute top-3 right-3 text-xs bg-red-600 text-white"></Badge>
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {/* Hero Card 1 - Superman */}
      <HeroGridCard
        universeBadge={dcBadge}
        alignmentBadge={heroAlignmentBadge}
        headerData={{
          superHeroName: "Superman",
          personName: "Clark Kent",
          teamBadge: "Justice League",
        }}
      ></HeroGridCard>

      {/*/!* Hero Card 2 - Batman *!/*/}
      {/*<HeroGridCard*/}
      {/*  universeBadge={dcBadge}*/}
      {/*  alignmentBadge={heroAlignmentBadge}*/}
      {/*  headerData={{*/}
      {/*    superHeroName: "Batman",*/}
      {/*    personName: "Bruce Wayne",*/}
      {/*    teamBadge: "Justice League",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <p className="text-sm text-gray-600 line-clamp-2">*/}
      {/*    The Dark Knight of Gotham City, using fear as a weapon against crime*/}
      {/*    and corruption.*/}
      {/*  </p>*/}

      {/*  <div className="grid grid-cols-2 gap-3">*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Zap className="h-3 w-3 text-orange-500" />*/}
      {/*        <span className="text-xs font-medium">Strength</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={60} className="h-2" />*/}
      {/*    </div>*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Brain className="h-3 w-3 text-blue-500" />*/}
      {/*        <span className="text-xs font-medium">Intelligence</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={100} className="h-2" />*/}
      {/*    </div>*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Gauge className="h-3 w-3 text-green-500" />*/}
      {/*        <span className="text-xs font-medium">Speed</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={60} className="h-2" />*/}
      {/*    </div>*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Shield className="h-3 w-3 text-purple-500" />*/}
      {/*        <span className="text-xs font-medium">Durability</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={70} className="h-2" />*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="space-y-2">*/}
      {/*    <h4 className="font-medium text-sm">Powers:</h4>*/}
      {/*    <div className="flex flex-wrap gap-1">*/}
      {/*      <Badge variant="outline" className="text-xs">*/}
      {/*        Martial Arts*/}
      {/*      </Badge>*/}
      {/*      <Badge variant="outline" className="text-xs">*/}
      {/*        Detective Skills*/}
      {/*      </Badge>*/}
      {/*      <Badge variant="outline" className="text-xs bg-gray-100">*/}
      {/*        +3 more*/}
      {/*      </Badge>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="text-xs text-gray-500 pt-2 border-t">*/}
      {/*    First appeared: 1939*/}
      {/*  </div>*/}
      {/*</HeroGridCard>*/}

      {/*/!* Hero Card 3 - Wonder Woman *!/*/}
      {/*<HeroGridCard*/}
      {/*  universeBadge={dcBadge}*/}
      {/*  alignmentBadge={heroAlignmentBadge}*/}
      {/*  headerData={{*/}
      {/*    superHeroName: "Wonder Woman",*/}
      {/*    personName: "Diana Prince",*/}
      {/*    teamBadge: "Justice League",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <p className="text-sm text-gray-600 line-clamp-2">*/}
      {/*    Amazonian princess and warrior, champion of truth, justice, and*/}
      {/*    equality.*/}
      {/*  </p>*/}

      {/*  <div className="grid grid-cols-2 gap-3">*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Zap className="h-3 w-3 text-orange-500" />*/}
      {/*        <span className="text-xs font-medium">Strength</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={90} className="h-2" />*/}
      {/*    </div>*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Brain className="h-3 w-3 text-blue-500" />*/}
      {/*        <span className="text-xs font-medium">Intelligence</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={80} className="h-2" />*/}
      {/*    </div>*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Gauge className="h-3 w-3 text-green-500" />*/}
      {/*        <span className="text-xs font-medium">Speed</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={80} className="h-2" />*/}
      {/*    </div>*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Shield className="h-3 w-3 text-purple-500" />*/}
      {/*        <span className="text-xs font-medium">Durability</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={90} className="h-2" />*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="space-y-2">*/}
      {/*    <h4 className="font-medium text-sm">Powers:</h4>*/}
      {/*    <div className="flex flex-wrap gap-1">*/}
      {/*      <Badge variant="outline" className="text-xs">*/}
      {/*        Super Strength*/}
      {/*      </Badge>*/}
      {/*      <Badge variant="outline" className="text-xs">*/}
      {/*        Flight*/}
      {/*      </Badge>*/}
      {/*      <Badge variant="outline" className="text-xs bg-gray-100">*/}
      {/*        +4 more*/}
      {/*      </Badge>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="text-xs text-gray-500 pt-2 border-t">*/}
      {/*    First appeared: 1941*/}
      {/*  </div>*/}
      {/*</HeroGridCard>*/}

      {/*/!* Hero Card 4 - Spider-Man *!/*/}
      {/*<HeroGridCard*/}
      {/*  universeBadge={marvelBadge}*/}
      {/*  alignmentBadge={heroAlignmentBadge}*/}
      {/*  headerData={{*/}
      {/*    superHeroName: "Spider-Man",*/}
      {/*    personName: "Peter Parker",*/}
      {/*    teamBadge: "Avengers",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <p className="text-sm text-gray-600 line-clamp-2">*/}
      {/*    Your friendly neighborhood Spider-Man, with great power comes great*/}
      {/*    responsibility.*/}
      {/*  </p>*/}

      {/*  <div className="grid grid-cols-2 gap-3">*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Zap className="h-3 w-3 text-orange-500" />*/}
      {/*        <span className="text-xs font-medium">Strength</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={70} className="h-2" />*/}
      {/*    </div>*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Brain className="h-3 w-3 text-blue-500" />*/}
      {/*        <span className="text-xs font-medium">Intelligence</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={90} className="h-2" />*/}
      {/*    </div>*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Gauge className="h-3 w-3 text-green-500" />*/}
      {/*        <span className="text-xs font-medium">Speed</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={70} className="h-2" />*/}
      {/*    </div>*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Shield className="h-3 w-3 text-purple-500" />*/}
      {/*        <span className="text-xs font-medium">Durability</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={70} className="h-2" />*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="space-y-2">*/}
      {/*    <h4 className="font-medium text-sm">Powers:</h4>*/}
      {/*    <div className="flex flex-wrap gap-1">*/}
      {/*      <Badge variant="outline" className="text-xs">*/}
      {/*        Wall Crawling*/}
      {/*      </Badge>*/}
      {/*      <Badge variant="outline" className="text-xs">*/}
      {/*        Spider Sense*/}
      {/*      </Badge>*/}
      {/*      <Badge variant="outline" className="text-xs bg-gray-100">*/}
      {/*        +3 more*/}
      {/*      </Badge>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="text-xs text-gray-500 pt-2 border-t">*/}
      {/*    First appeared: 1962*/}
      {/*  </div>*/}
      {/*</HeroGridCard>*/}

      {/*/!* Hero Card 5 - Iron Man *!/*/}
      {/*<HeroGridCard*/}
      {/*  universeBadge={marvelBadge}*/}
      {/*  alignmentBadge={heroAlignmentBadge}*/}
      {/*  headerData={{*/}
      {/*    superHeroName: "Iron Man",*/}
      {/*    personName: "Tony Stark",*/}
      {/*    teamBadge: "Avengers",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <p className="text-sm text-gray-600 line-clamp-2">*/}
      {/*    Billionaire genius inventor who uses his technology to protect the*/}
      {/*    world.*/}
      {/*  </p>*/}

      {/*  <div className="grid grid-cols-2 gap-3">*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Zap className="h-3 w-3 text-orange-500" />*/}
      {/*        <span className="text-xs font-medium">Strength</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={80} className="h-2" />*/}
      {/*    </div>*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Brain className="h-3 w-3 text-blue-500" />*/}
      {/*        <span className="text-xs font-medium">Intelligence</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={100} className="h-2" />*/}
      {/*    </div>*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Gauge className="h-3 w-3 text-green-500" />*/}
      {/*        <span className="text-xs font-medium">Speed</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={70} className="h-2" />*/}
      {/*    </div>*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Shield className="h-3 w-3 text-purple-500" />*/}
      {/*        <span className="text-xs font-medium">Durability</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={80} className="h-2" />*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="space-y-2">*/}
      {/*    <h4 className="font-medium text-sm">Powers:</h4>*/}
      {/*    <div className="flex flex-wrap gap-1">*/}
      {/*      <Badge variant="outline" className="text-xs">*/}
      {/*        Powered Armor*/}
      {/*      </Badge>*/}
      {/*      <Badge variant="outline" className="text-xs">*/}
      {/*        Genius Intellect*/}
      {/*      </Badge>*/}
      {/*      <Badge variant="outline" className="text-xs bg-gray-100">*/}
      {/*        +3 more*/}
      {/*      </Badge>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="text-xs text-gray-500 pt-2 border-t">*/}
      {/*    First appeared: 1963*/}
      {/*  </div>*/}
      {/*</HeroGridCard>*/}

      {/*/!* Hero Card 6 - Deadpool *!/*/}
      {/*<HeroGridCard*/}
      {/*  universeBadge={marvelBadge}*/}
      {/*  alignmentBadge={antiHeroAlignmentBadge}*/}
      {/*  headerData={{*/}
      {/*    superHeroName: "Deadpool",*/}
      {/*    personName: "Wade Wilso",*/}
      {/*    teamBadge: "X-Force",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <p className="text-sm text-gray-600 line-clamp-2">*/}
      {/*    The Merc with a Mouth, an unpredictable anti-hero with accelerated*/}
      {/*    healing powers.*/}
      {/*  </p>*/}

      {/*  <div className="grid grid-cols-2 gap-3">*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Zap className="h-3 w-3 text-orange-500" />*/}
      {/*        <span className="text-xs font-medium">Strength</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={60} className="h-2" />*/}
      {/*    </div>*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Brain className="h-3 w-3 text-blue-500" />*/}
      {/*        <span className="text-xs font-medium">Intelligence</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={70} className="h-2" />*/}
      {/*    </div>*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Gauge className="h-3 w-3 text-green-500" />*/}
      {/*        <span className="text-xs font-medium">Speed</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={70} className="h-2" />*/}
      {/*    </div>*/}
      {/*    <div className="space-y-1">*/}
      {/*      <div className="flex items-center gap-1">*/}
      {/*        <Shield className="h-3 w-3 text-purple-500" />*/}
      {/*        <span className="text-xs font-medium">Durability</span>*/}
      {/*      </div>*/}
      {/*      <Progress value={90} className="h-2" />*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="space-y-2">*/}
      {/*    <h4 className="font-medium text-sm">Powers:</h4>*/}
      {/*    <div className="flex flex-wrap gap-1">*/}
      {/*      <Badge variant="outline" className="text-xs">*/}
      {/*        Healing Factor*/}
      {/*      </Badge>*/}
      {/*      <Badge variant="outline" className="text-xs">*/}
      {/*        Martial Arts*/}
      {/*      </Badge>*/}
      {/*      <Badge variant="outline" className="text-xs bg-gray-100">*/}
      {/*        +3 more*/}
      {/*      </Badge>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="text-xs text-gray-500 pt-2 border-t">*/}
      {/*    First appeared: 1991*/}
      {/*  </div>*/}
      {/*</HeroGridCard>*/}
    </div>
  );
};
