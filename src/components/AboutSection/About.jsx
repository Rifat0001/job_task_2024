
import news from '../../assets/news.webp'
import './About.css'
const About = () => {
    return (
        <section className='flex md:flex-row flex-col md:mt-0 mt-[20px] md:px-[90px] mb-5  px-5 items-center '>
            <div className="left_side w-full ">
                <h1 className="md:text-4xl text-3xl font-bold">To get update subscribe now</h1>
                <p className="py-6 md:w-1/2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn bg-sky-400 border-none text-white">Subscribe Now</button>
            </div>
            <div className="right_side w-full ">
                <img className='w-full  md:p-[40px] p-[20px]' src={news} alt="" />
            </div>
        </section>
    );
};

export default About;