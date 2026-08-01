
export function VideoCard() {
    return <div>
        <img src="/photo.jpg" className="rounded-xl"></img>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className="rounded-full w-12 h-12" src="/thumb.jpg"></img>
            </div>
            <div className="col-span-11 pl-2">
                <div>
                    DC : Official Trailer Tamil |
                    Lokesh Kanagaraj
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                    Sun TV ✔
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                    17M views . 2 months ago 
                </div>
            </div>
        </div>
    </div>
}