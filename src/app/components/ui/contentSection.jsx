import Image from 'next/image';

const ContentSection = ({ reverse, bgColour, img }) => {
  return (
    <section style={{ background: bgColour }}>
    <div className="w-4/5 mx-auto py-5">
      <div className={`md:flex md:justify-around ${reverse && "flex-row-reverse"}`}>
        <div className={`w-full mx-4 mb-auto`}>
          <h2 className="text-3xl">MAM TOR - PEAK District</h2>
          <p className="my-6 border-4 border-dashed border-red-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            libero expedita pariatur est consectetur. Hic optio minima
            doloribus, repellat eum ab culpa, minus soluta harum, omnis quia
            eius reiciendis voluptatem.
          </p>
        </div>
        <div className="w-full mx-4">
          <Image
            src={img}
            alt=""
            style={{ objectFit: "cover", maxHeight: '26rem' }}
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContentSection;