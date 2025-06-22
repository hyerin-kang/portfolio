import { Academy } from "./components/Academy";
import { Career } from "./components/Career";
import { Education } from "./components/Education";
import { Profile } from "./components/Profile";

export default function HistoryPage() {
  return (
    <div className="flex flex-col gap-10">
      <Profile />
      <Career />
      <Education />
      <Academy />
    </div>
  );
}
