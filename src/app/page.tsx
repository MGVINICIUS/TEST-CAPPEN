import { Celebration } from "@/components/Celebration";
import MaxWidthWrapper from "@/components/MaxWidth";
import { NavBar } from "@/components/NavBar";
import SmoothScrolling from "@/components/SmoothScrolling";
import { TrajectoryPage } from "@/components/TrajectoryPage";
import { VideoFullPage } from "@/components/VideoFullPage";

export default function Home() {
  return (
    <SmoothScrolling>
        <NavBar />
        <section id="home" className="sticky top-0">
          <VideoFullPage />
        </section>
        <section id="sobre" className="bg-secondary relative">
          <MaxWidthWrapper>
            <TrajectoryPage />
          </MaxWidthWrapper>
        </section>
        <section id="historia" className="bg-tertiary relative lg:h-screen w-full">
          <div className="w-full lg:bg-background object-cover bg-background-mobile pt-[70vh] lg:pt-0 bg-right-top bg-cover bg-no-repeat lg:bg-[length:100vw_100vh]">
          <MaxWidthWrapper className="p-0 flex items-start">
            <Celebration />
          </MaxWidthWrapper>
          </div>
        </section>
    </SmoothScrolling>
  );
}
