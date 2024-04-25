import videoBg from '../../assets/vdo.mp4'
import './Hero.css'

const Main = () => {
    return (
        <div className='main z-20'>
            <video className='video_part' src={videoBg} autoPlay loop muted />

            <div className="content">
                <div className="md:px-[60px] px-5  md:min-h-[500px] items-start flex  flex-col justify-center">
                    <h1 className="md:text-8xl text-4xl font-bold">Box Office News!</h1>
                    <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-sky-400 border-none text-white">Get Started</button>

                </div>
            </div>
        </div>
    )
}

export default Main