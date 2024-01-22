import Image from 'next/image';
import styles from './styles/Home.module.css';
import image from '../../public/IMG_1554.JPG';
import image2 from '../../public/IMG_1495.jpg';
import image3 from '../../public/IMG_7529.JPG';
import Panel from './components/ui/panel';

export default function Home() {
  return (
    <main>
      <div className={styles.bg_image}>
        <div className="h-full z-20 text-white	">
          <div className={`sm:p-16 p-8 inset-0 ${styles.legend}`}>
            <div className="flex gap-5">
              <Image
                src={image}
                height={50}
                width={50}
                alt=""
                style={{
                  objectFit: "cover",
                  minHeight: "5rem",
                  minWidth: "5rem",
                  borderRadius: "100%",
                }}
              />
              <h1 className=" text-3xl md:text-5xl antialiased font-bold leading-tight tracking-normal my-auto drop-shadow-lg">
                Somali Hikers
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="sm:px-8 mt-9">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl my-24">
                  <h2 className="text-4xl font-bold tracking-tight">
                    Our Mission
                  </h2>
                  <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Is to get Somali&apos;s to enjoy the great outdoors and out
                    of the cities.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="sm:px-8 md:pb-32">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="grid md:grid-cols-3 gap-2">
              <Panel
                title="Guided Hikes"
                content="Our Hikes are there are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words which
                    dont look even slightly believable."
                icon="person-hiking"
              />
              <Panel
                title="Guided Hikes"
                content="Our Hikes are there are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words which
                    dont look even slightly believable."
                icon="mountain"
              />
              <Panel
                title="Connect with Nature"
                content="Our Hikes are there are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words which
                    dont look even slightly believable."
                icon="tree"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="sm:px-8 md:pb-32">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <h1 className={`text-5xl font-bold flex justify-center items-center ${styles.box}`}>Upcoming Hikes</h1>
          </div>
        </div>
      </section>
      {/* <ContentSection img={image3} reverse={false} bgColour='#dddddd' />
      <ContentSection img={image2} reverse={true} bgColour='#ffffff' /> */}
    </main>
  );
}
