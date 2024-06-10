import PlayIcon from './../assets/play-icon.png';
import MovieCarousel from './MovieCarousel';

export default function MainBanner({setPath}) {
    return(
        <>
            <div className='bg-movie-main-background min-h-screen bg-cover flex content-center p-6'>
                <div className='w-25 flex-1/2 content-center'>
                    <p className='text-5xl text-white font-bold'>Video Title</p>
                    <p className='text-white mt-4'>2022 | 2H 23m</p>
                    <p className='text-white mt-4 text-wrap w-1/4 line-clamp-4'>
                        Soda and Gembira are two best friends who have a lot in common. 
                        Their friendship begins to fall apart when they meet Jennie, a beautiful woman who is also an environmental activist. 
                        They were both interested and tried to win Jennie's heart. 
                        However, Jennie did not choose one of the two and decided to remain friends.
                    </p>
                    <button type="button" className="flex gap-2 text-black bg-[#FFB400] focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center mt-2">
                        
                        <img src={PlayIcon} className='h-5'/>
                        Play
                    </button>
                </div>
            </div>  
            <MovieCarousel />
            <MovieCarousel />
        </>
    )
}