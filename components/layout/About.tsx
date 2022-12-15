import Image from 'next/image';
import about from '../../public/mobile.jpg';
const About: React.FC = (props) => {
	return (
		<div className=' z-10 container dark:bg-slate-800 dark:text-white max-w-6xl mx-auto px-6 my-44 '>
			<div className='flex flex-col md:flex-row   gap-32 '>
				<div className='  relative    '>
					<Image
						className=' rounded-xl max-w-xl '
						src={about}
						alt=''
					/>
					<div className='  header-text  absolute top-0  left-5 opacity-60 '>
						<h1 className=' text-4xl '>About As</h1>
					</div>
				</div>
				<div className=' flex flex-col gap-10 justify-center max-w-xl '>
					<h1 className=' font-Orbitron uppercase text-3xl '>
						{' '}
						it touch your soul
					</h1>
					<p className='text-2xl font-Josefin  '>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Consequuntur dolorum assumenda veniam maiores aut praesentium vero
						adipisci totam ex ducimus minus soluta mollitia, eius consequatur
						sapiente cum quo iste delectus!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
