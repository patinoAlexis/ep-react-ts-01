import { Button } from "@/components/ui/button.tsx";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  totalPages: number;
};

export const CustomPagination = ({ totalPages }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [disableNext, setDisabledNext] = useState(false);
  const [disablePrevious, setDisabledPrevious] = useState(false);
  useEffect(() => {
    if (currentPage === totalPages) {
      setDisabledNext(true);
    } else if (!disableNext) {
      setDisabledNext(false);
    }
    if (currentPage === 1) {
      setDisabledPrevious(true);
    } else if (!disablePrevious) {
      setDisabledPrevious(false);
    }
  }, [currentPage]);

  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        <Button variant="outline" size="sm" disabled={disablePrevious}>
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((_, index) => (
          <Button
            key={index}
            variant={currentPage === index + 1 ? "default" : "outline"}
            size="sm"
          >
            {index + 1}
          </Button>
        ))}
        {/*<Button variant="ghost" size="sm" disabled>*/}
        {/*  <MoreHorizontal className="h-4 w-4" />*/}
        {/*</Button>*/}

        <Button variant="outline" size="sm" disabled={disableNext}>
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};
