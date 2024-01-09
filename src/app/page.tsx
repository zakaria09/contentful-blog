import Image from 'next/image';
import styles from './styles/Home.module.css';
import image from '../../public/IMG_1554.JPG';
import image2 from '../../public/Castlon-Man-Tor-Circular-8-scaled-1-1.webp';
import Avatar from './components/ui/avatar';
import ContentSection from './components/ui/contentSection';

export default function Home() {
  return (
    <main>
      <div className={styles.bg_image}>
        <div className='h-screen flex items-center justify-center z-50 text-white	'>
          <div className={`p-24 inset-0 ${styles.legend}`}>
            <div className='flex justify-between gap-5'>
              <h1 className='block font-sans text-4xl md:text-5xl antialiased font-semibold leading-tight tracking-normal my-auto drop-shadow-md'>
                Somali Hikers
              </h1>
              <Image
                src={image}
                height={50}
                width={50}
                alt=''
                style={{
                  objectFit: 'cover',
                  minHeight: '5rem',
                  minWidth: '5rem',
                  borderRadius: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className='sm:px-8 mt-9'>
          <div className='mx-auto w-full max-w-7xl lg:px-8'>
            <div className='relative px-4 sm:px-8 lg:px-12'>
              <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                <div className='max-w-2xl my-24'>
                  <h2 className='text-4xl font-bold tracking-tight'>
                    Our Mission
                  </h2>
                  <h1 className='text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                    Is to get Somali&apos;s to enjoy the great outdoors and out
                    of the cities.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContentSection img={image2} reverse={false} bgColour='#dddddd' />
      <ContentSection img={image2} reverse={true} bgColour='#ffffff' />
    </main>
  );
}
