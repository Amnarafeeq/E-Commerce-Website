import HeroSection from "./components/hero-section";
import TodayDeals from "./components/today-deals";
import SearchItems from "./components/searched-item";
import FurniturePage from "./components/furniture";
import ReviewPage from "./components/review";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TodayDeals />
      <SearchItems />
      <FurniturePage />
      <ReviewPage />
    </div>
  );
}
