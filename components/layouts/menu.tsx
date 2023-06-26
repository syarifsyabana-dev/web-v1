import Image from "next/image";
import Footer from "./footer";
import Gambar from "@/public/images/man.jpg";

export default function SideMenuLayout() {
  return (
    <aside id="menu" className="fixed -left-[100%] transition-all duration-1000 lg:left-auto top-0 flex flex-col justify-between px-4 h-[100vh] w-full lg:w-[300px] bg-stone-100 dark:bg-slate-900">
      <div className="flex flex-col justify-center items-center h-[calc(100vh-81px)]">
        <Image
          src={Gambar}
          alt="Me"
          className="w-[220px] h-[220px] object-cover rounded-full"
        />
        <div className="relative text-2xl my-4 text-center">
          <strong className="font-bold text-cyan-500">Syarif</strong>{" "}
          <span className="font-light">Sya&apos;bana</span>
          <div className="absolute h-[2px] w-[80px] bg-cyan-800 -bottom-[8px] left-[calc(50%-40px)] " />
        </div>
        <div className="font-light text-sm mb-12">Web Developer</div>
        <div className="text-center font-light text-sm">
          <ul>
            <li className="mb-2">
              <a href="#halo" className="hover:text-cyan-500 transition-all">Halo</a>
            </li>
            <li className="mb-2">
              <a className="hover:text-cyan-500 transition-all" href="#tentang-saya">Tentang Saya</a>
            </li>
            <li className="mb-2">
              <a className="hover:text-cyan-500 transition-all" href="#">Pengalaman</a>
            </li>
            <li className="mb-2">
              <a className="hover:text-cyan-500 transition-all" href="#">Portfolio</a>
            </li>
            <li className="mb-2">
              <a className="hover:text-cyan-500 transition-all" href="#">Kontak</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </aside>
  );
}
