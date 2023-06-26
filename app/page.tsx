import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        id="halo"
        className="w-full px-4 h-screen flex justify-center items-center text-center flex-col"
      >
        <div className="text-2xl font-light">
          Halo, saya <br />
        </div>
        <h1 className="text-4xl font-bold block mt-3 mb-8">
          Muhamad Syarif Sya&apos;bana
        </h1>
        <div className="font-light text-sm">
          Seorang <i>Web Developer</i> asal Kota Tangerang, Indonesia.
        </div>
      </div>
      <div
        id="tentang-saya"
        className="w-full px-4 h-screen flex justify-center flex-col"
      >
        <h2 className="text-2xl font-light text-left">
          Tentang <strong className="font-bold">Saya</strong>
        </h2>
        <div className="py-8">
          <div className="font-light text-base">
            <p className="mb-2">
              Halo! Saya{" "}
              <strong className="font-medium">
                Muhamad Syarif Sya&apos;bana
              </strong>
              , berasal dari Kota Tangerang, Banten,{" "}
              <span className="text-red-500">Indonesia</span>. Saya seorang Web
              Developer dengan fokus saat ini pada Frontend Web Developer.
              Membuat antarmuka pengguna menarik dengan HTML, CSS, dan
              JavaScript adalah keahlian saya. Mari buat web yang mengagumkan
              bersama!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
