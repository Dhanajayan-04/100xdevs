
import { AppBar } from "@/components/Appbar";
import {VideoCard} from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";

export default function Home() {
  return (
    <div>
      <AppBar />
      <VideoGrid />
    </div>
  );
}
