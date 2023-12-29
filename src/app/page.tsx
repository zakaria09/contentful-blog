import Image from 'next/image';
import styles from './styles/Home.module.css';
import image from "../../public/IMG_1554.JPG";

export default function Home() {
  return (
    <main>
      <div className={styles.bg_image}>
        <div className="h-screen flex items-center justify-center z-50 text-white	">
          <div className={`p-24 inset-0 ${styles.legend}`}>
            <div className="flex justify-between gap-5">
              <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal my-auto">
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
      <h1>Hello</h1>
    </main>
  );
}
