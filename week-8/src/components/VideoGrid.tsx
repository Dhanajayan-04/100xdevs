import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "DC : Official Trailer Tamil | Lokesh Kanagaraj",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Sun TV ✔",
    views: "17M views",
    timestamp: "2 months ago"
},{
    title: "DC : Official Trailer Tamil | Lokesh Kanagaraj",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Sun TV ✔",
    views: "17M views",
    timestamp: "2 months ago"
},{
    title: "DC : Official Trailer Tamil | Lokesh Kanagaraj",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Sun TV ✔",
    views: "17M views",
    timestamp: "2 months ago"
}, {
    title: "DC : Official Trailer Tamil | Lokesh Kanagaraj",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Sun TV ✔",
    views: "17M views",
    timestamp: "2 months ago"
},{
    title: "DC : Official Trailer Tamil | Lokesh Kanagaraj",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Sun TV ✔",
    views: "17M views",
    timestamp: "2 months ago"
},{
    title: "DC : Official Trailer Tamil | Lokesh Kanagaraj",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Sun TV ✔",
    views: "17M views",
    timestamp: "2 months ago"
},{
    title: "DC : Official Trailer Tamil | Lokesh Kanagaraj",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Sun TV ✔",
    views: "17M views",
    timestamp: "2 months ago"
},{
    title: "DC : Official Trailer Tamil | Lokesh Kanagaraj",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Sun TV ✔",
    views: "17M views",
    timestamp: "2 months ago"
},{
    title: "DC : Official Trailer Tamil | Lokesh Kanagaraj",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Sun TV ✔",
    views: "17M views",
    timestamp: "2 months ago"
}]

export function VideoGrid() {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
                  title={video.title}
                  image={video.image}
                  thumbImage={video.thumbImage}
                  author={video.author}
                  views={video.views}
                  timestamp={video.timestamp}
            ></VideoCard>
        </div>)}
    </div>
}