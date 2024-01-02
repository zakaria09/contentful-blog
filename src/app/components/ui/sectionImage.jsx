import React from 'react'
import Image from "next/image";

const sectionImage = ({ reverse, bgColour, img }) => {
  return (
    <section style={{ background: bgColour }}>
      <div className="md:flex w-4/5 mx-auto py-5">
        <div className={`w-full my-auto ${reverse && "flex-row-reverse"}`}>
          <h2 className="my-6 text-3xl">MAM TOR - PEAK District</h2>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            libero expedita pariatur est consectetur. Hic optio minima
            doloribus, repellat eum ab culpa, minus soluta harum, omnis quia
            eius reiciendis voluptatem.
          </p>
        </div>
        <div className="w-full">
          <Image
            src={img}
            alt=""
            style={{ objectFit: "contain", height: "24rem" }}
          />
        </div>
      </div>
    </section>
  );
}

export default sectionImage;