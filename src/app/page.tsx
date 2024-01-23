import Image from 'next/image';
import styles from './styles/Home.module.css';
import Panel from './components/ui/panel';
import {client} from './lib/contentful/client';
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/tiktok";
import "react-social-icons/twitter";
import "react-social-icons/linkedin";
import "react-social-icons/instagram";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Somali Hiker',
  description: 'Welcome to Somali Hikers',
};

const getServices = async () => {
  return await client.getEntries({content_type: 'services'});
};

export default async function Home() {
  const services = await getServices();

  console.log(services.items[0].fields.icon.icon);

  return (
    <main>
      <div className={styles.bg_image}>
        <div className="h-full z-20 text-white	">
          <div className={`sm:p-16 p-8 inset-0 ${styles.legend}`}>
            <div className="flex gap-5">
              <Image
                src={"/logo.JPG"}
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
                  <div className="mt-6 flex gap-6">
                    <SocialIcon url="https://twitter.com/somalihikers" />
                    <SocialIcon url="https://www.tiktok.com/@somali.hikers" />
                    <SocialIcon url="https://www.instagram.com/somalihikers" />
                    <SocialIcon url="https://www.linkedin.com/company/somalihikers/" />
                  </div>
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
              {services.items.map(
                (service: {
                  fields: { title: string; content: string };
                  sys: { id: string };
                }) => (
                  <Panel
                    key={service.sys.id}
                    title={service.fields.title}
                    content={service.fields.content}
                    icon={(service as any).fields.icon.icon}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
