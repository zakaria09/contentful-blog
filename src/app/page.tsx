import Image from 'next/image';
import styles from './styles/Home.module.css';
import image from "../../public/IMG_1554.JPG";
import image2 from "../../public/IMG_7529.JPG";

export default function Home() {
  return (
    <main>
      <div className={styles.bg_image}>
        <div className="h-screen flex items-center justify-center z-50 text-white	">
          <div className={`p-24 inset-0 ${styles.legend}`}>
            <div className="flex justify-between gap-5">
              <h1 className="block font-sans text-4xl md:text-5xl antialiased font-semibold leading-tight tracking-normal my-auto">
                Somali Hikers
              </h1>
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
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="sm:px-8 mt-9">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Our Mission
                  </h2>
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Is to get Somali&apos;s to enjoy the great outdoors and out
                    of the cities.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#dddddd" }}>
        <div className="md:flex w-4/5 mx-auto py-5">
          <div className="w-full">
            <h2 className="my-6">MAM TOR - PEAK District</h2>
            <p className="my-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              libero expedita pariatur est consectetur. Hic optio minima
              doloribus, repellat eum ab culpa, minus soluta harum, omnis quia
              eius reiciendis voluptatem. he
            </p>
          </div>
          <div className="w-full">
            <Image
              src={image2}
              alt=""
              style={{ objectFit: "contain", height: "24rem" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
