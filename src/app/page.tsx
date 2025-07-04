'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "../components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="fade-in">
      {/* Header */}
      <header className="px-4 py-6 bg-[#0db8ff] text-white"
              role="banner"
              aria-label="CXO House main navigation">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="logo w-[80px] sm:w-[100px] md:w-[120px] transition-transform duration-300 hover:scale-105 -mt-2 mx-auto md:mx-0">
            <Link href="/" className="block transition-opacity duration-200 hover:opacity-80 focus-ring" aria-label="CXO House homepage">
              <Image src="/img/CXO-svg.svg" alt="CXO House logo" width={120} height={30} className="w-full h-auto -mt-8" priority />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-screen flex items-center overflow-hidden" 
        style={{ backgroundImage: "url('/img/hero-bg.webp')" }}
      >
        <div className="container mx-auto px-4">
          <div className="relative z-10 max-w-4xl px-4 sm:px-6 py-12 sm:py-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-light mb-6 text-white">
              The first private Network ONLY for CXOs run by The Queen of CX, Blake Morgan.
            </h1>
            <p className="mb-8 text-gray-200 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extralight max-w-[700px] leading-relaxed">
              CXO House is the private network for Chief Experience and Customer Officers—delivering the insight,
              connection, and strategic clarity needed to lead through change and elevate the customer experience at scale.
            </p>
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-[#ffaf02] hover:bg-[#e9a104] text-black font-bold px-8 py-4 rounded-full transition-all duration-300 mt-4 text-lg sm:text-xl md:text-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 focus-ring interactive-element group cursor-pointer border-0"
                aria-label="Request an invitation to join CXO House"
              >
                <span className="transition-transform duration-300 group-hover:tracking-wide">Request an Invitation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead from Front Line Section */}
      <section className="bg-[#0a4e65] text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image */}
          <div className="w-full lg:w-[47%]">
            <div className="group transition-transform duration-500 hover:scale-105">
              <Image 
                src="/img/blake-image.webp" 
                className="rounded-[35px] sm:rounded-[45px] lg:rounded-[55px] shadow-lg w-full h-[400px] sm:h-[450px] lg:h-[500px] xl:h-[550px] object-cover group-hover:shadow-2xl transition-shadow duration-500" 
                alt="Blake Morgan - The Queen of CX" 
                width={600} 
                height={550}
              />
            </div>
          </div>
          {/* Text */}
          <div className="w-full lg:w-[53%] lg:pl-8 xl:pl-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-6 lg:mb-10">
              Lead from the Front Line of
              <span className="italic text-yellow-400 transition-colors duration-300 hover:text-yellow-300"> Customer Experience</span>
            </h2>
            <ul className="space-y-3 sm:space-y-4 text-lg sm:text-xl font-light list-disc ml-5 leading-relaxed">
              <li className="hover:text-yellow-200 transition-colors">Actionable insights from top CX leaders</li>
              <li className="hover:text-yellow-200 transition-colors">A trusted peer network of CCOs and CXOs</li>
              <li className="hover:text-yellow-200 transition-colors">Curated sessions on strategy, innovation, and leadership</li>
              <li className="hover:text-yellow-200 transition-colors">Exclusive access to virtual and in-person roundtables</li>
              <li className="hover:text-yellow-200 transition-colors">Benchmarking and data sharing to guide smarter decisions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="bg-[#efe6dc] pb-16 sm:pb-20 z-[2]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden z-[2] -translate-y-8 sm:-translate-y-10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-12 group">
            <div className="flex flex-col md:flex-row justify-between items-stretch p-6 sm:p-8 lg:p-12 gap-6 lg:gap-8">
              <div className="w-full md:w-1/2 pr-0 md:pr-8 md:border-r md:border-r-[#b7b7b7] flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl italic font-serif mb-4 sm:mb-6 text-black group-hover:text-[#0db8ff] transition-colors duration-500">
                  Who It&apos;s For
                </h3>
                <p className="text-black text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                  Our members are C-level executives leading customer, digital, and experience strategy across
                  industries:
                </p>
              </div>
              <div className="w-full md:w-1/2 text-lg font-light text-gray-800 flex flex-col justify-center">
                <ul className="ml-0 lg:ml-8 space-y-4 sm:space-y-6">
                  <li className="group/item hover:scale-105 transition-transform duration-300">
                    <strong className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold group-hover/item:text-[#ffaf02] transition-colors duration-300">• CXO</strong><br />
                    <span className="italic text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium ml-2 sm:ml-4 lg:ml-6 xl:ml-8 group-hover/item:text-[#0db8ff] transition-colors duration-300">
                      Chief Experience Officer
                    </span>
                  </li>
                  <li className="group/item hover:scale-105 transition-transform duration-300">
                    <strong className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold group-hover/item:text-[#ffaf02] transition-colors duration-300">• CCO</strong><br />
                    <span className="italic text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium ml-2 sm:ml-4 lg:ml-6 xl:ml-8 group-hover/item:text-[#0db8ff] transition-colors duration-300">
                      Chief Customer Officer
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-black text-white text-center py-4 sm:py-6 text-lg sm:text-xl lg:text-2xl xl:text-3xl italic font-light rounded-b-2xl px-4 group-hover:bg-[#0a4e65] transition-colors duration-500">
              <p>Industries: Retail, Financial Services, Healthcare, Travel, Energy, Media</p>
            </div>
          </div>

          {/* Programs and Benefits */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif italic text-black mb-12 sm:mb-16">
              Programs and Benefits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
              {/* Peer Sessions */}
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-full h-full group-hover:text-[#0db8ff] transition-colors duration-300" id="bold" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m4.5 6.25v-4.5c0-.26.03-.51.1-.75h-2.85c-.96 0-1.75.79-1.75 1.75v4.5c0 .96.79 1.75 1.75 1.75h.37l1.28 1.7c.14.18.35.29.57.3h.03c.22 0 .42-.09.56-.26l1.5-1.71c-.93-.58-1.56-1.61-1.56-2.78z" />
                    <path d="m22.25 1h-2.85c.07.24.1.49.1.75v4.5c0 1.17-.63 2.2-1.56 2.78l1.5 1.71c.14.17.34.26.56.26h.03c.22-.01.43-.12.57-.3l1.27-1.7h.38c.96 0 1.75-.79 1.75-1.75v-4.5c0-.96-.79-1.75-1.75-1.75z" />
                    <path d="m12 10c-.009 0-.019 0-.028 0-.226-.009-.436-.119-.572-.3l-1.275-1.7h-2.375c-.965 0-1.75-.785-1.75-1.75v-4.5c0-.965.785-1.75 1.75-1.75h8.5c.965 0 1.75.785 1.75 1.75v4.5c0 .965-.785 1.75-1.75 1.75h-2.16l-1.526 1.744c-.142.163-.348.256-.564.256z" />
                    <circle cx="4" cy="15" r="2" />
                    <path d="m6.67 18.4c-1.01.76-1.67 1.98-1.67 3.35v.25h-4.25c-.41 0-.75-.34-.75-.75v-.5c0-1.52 1.23-2.75 2.75-2.75h2.5c.52 0 1.01.15 1.42.4z" />
                    <circle cx="20" cy="15" r="2" />
                    <path d="m24 20.75v.5c0 .41-.34.75-.75.75h-4.25v-.25c0-1.37-.66-2.59-1.67-3.35.41-.25.9-.4 1.42-.4h2.5c1.52 0 2.75 1.23 2.75 2.75z" />
                    <circle cx="12" cy="14.5" r="3" />
                    <path d="m14.75 19h-5.5c-1.517 0-2.75 1.233-2.75 2.75v1.5c0 .414.336.75.75.75h9.5c.414 0 .75-.336.75-.75v-1.5c0-1.517-1.233-2.75-2.75-2.75z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 font-basic group-hover:text-[#0db8ff] transition-colors duration-300">Peer Sessions</h3>
                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed group-hover:text-gray-900 transition-colors duration-300">Monthly confidential forums</p>
              </div>

              {/* Executive Roundtables */}
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-full h-full group-hover:text-[#0db8ff] transition-colors duration-300" viewBox="0 0 512.001 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m256 128.152344c-70.496094 0-127.847656 57.351562-127.847656 127.847656s57.351562 127.847656 127.847656 127.847656 127.847656-57.351562 127.847656-127.847656-57.351562-127.847656-127.847656-127.847656zm0 0" />
                    <path d="m176.65625 96.414062c13.148438-6.261718 27.125-10.890624 41.441406-13.800781 9.21875 10.890625 22.976563 17.820313 38.324219 17.820313 14.882813 0 28.261719-6.511719 37.464844-16.828125 14.238281 3.277343 28.085937 8.265625 41.105469 14.890625 2.179687 1.105468 4.5 1.632812 6.789062 1.632812 5.464844 0 10.734375-2.996094 13.378906-8.199218 3.761719-7.382813.820313-16.414063-6.5625-20.171876-13.453125-6.84375-27.660156-12.1875-42.273437-15.980468.203125-1.828125.316406-3.679688.316406-5.5625 0-27.6875-22.527344-50.214844-50.214844-50.214844-27.691406 0-50.21875 22.527344-50.21875 50.214844 0 1.433594.074219 2.851562.191407 4.253906-14.707032 3.414062-29.054688 8.386719-42.640626 14.859375-7.480468 3.5625-10.65625 12.511719-7.09375 19.992187 3.5625 7.476563 12.511719 10.652344 19.992188 7.09375zm0 0" />
                    <path d="m461.785156 206.207031c-1.433594 0-2.851562.078125-4.253906.195313-3.414062-14.710938-8.386719-29.054688-14.855469-42.644532-3.5625-7.480468-12.511719-10.660156-19.992187-7.09375-7.480469 3.558594-10.65625 12.511719-7.09375 19.992188 6.261718 13.148438 10.890625 27.125 13.796875 41.445312-10.886719 9.21875-17.816407 22.972657-17.816407 38.324219 0 14.878907 6.507813 28.257813 16.824219 37.464844-3.277343 14.238281-8.261719 28.082031-14.886719 41.101563-3.757812 7.382812-.816406 16.414062 6.566407 20.171874 2.179687 1.109376 4.5 1.632813 6.789062 1.632813 5.464844 0 10.734375-2.996094 13.382813-8.199219 6.84375-13.449218 12.183594-27.660156 15.980468-42.273437 1.824219.203125 3.679688.316406 5.558594.316406 27.6875 0 50.214844-22.527344 50.214844-50.214844 0-27.691406-22.527344-50.21875-50.214844-50.21875zm0 0" />
                    <path d="m335.34375 415.589844c-13.148438 6.261718-27.125 10.890625-41.441406 13.796875-9.21875-10.886719-22.976563-17.816407-38.324219-17.816407-14.882813 0-28.261719 6.511719-37.464844 16.828126-14.238281-3.277344-28.085937-8.265626-41.101562-14.890626-7.382813-3.757812-16.414063-.816406-20.171875 6.566407-3.757813 7.382812-.820313 16.414062 6.5625 20.167969 13.453125 6.847656 27.660156 12.1875 42.273437 15.984374-.203125 1.824219-.316406 3.679688-.316406 5.558594 0 27.6875 22.527344 50.214844 50.21875 50.214844 27.6875 0 50.214844-22.527344 50.214844-50.214844 0-1.433594-.074219-2.847656-.191407-4.25 14.707032-3.414062 29.054688-8.386718 42.640626-14.859375 7.480468-3.5625 10.65625-12.511719 7.097656-19.992187-3.566406-7.480469-12.515625-10.660156-19.996094-7.09375zm0 0" />
                    <path d="m100.433594 255.578125c0-14.878906-6.511719-28.261719-16.828125-37.464844 3.277343-14.238281 8.261719-28.085937 14.886719-41.105469 3.757812-7.382812.816406-16.414062-6.5625-20.171874-7.382813-3.753907-16.414063-.816407-20.171876 6.566406-6.847656 13.453125-12.1875 27.664062-15.980468 42.273437-1.828125-.203125-3.679688-.316406-5.5625-.316406-27.6875.003906-50.214844 22.527344-50.214844 50.21875 0 27.6875 22.527344 50.214844 50.214844 50.214844 1.433594 0 2.851562-.074219 4.253906-.191407 3.414062 14.707032 8.386719 29.054688 14.855469 42.640626 2.570312 5.398437 7.949219 8.554687 13.554687 8.554687 2.160156 0 4.355469-.46875 6.4375-1.460937 7.480469-3.558594 10.65625-12.511719 7.09375-19.992188-6.261718-13.148438-10.890625-27.125-13.796875-41.441406 10.890625-9.21875 17.820313-22.976563 17.820313-38.324219zm0 0" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 font-basic group-hover:text-[#0db8ff] transition-colors duration-300">Executive Roundtables</h3>
                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed group-hover:text-gray-900 transition-colors duration-300">Intimate CX leader discussions</p>
              </div>

              {/* Insights & Resources */}
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-full h-full group-hover:text-[#0db8ff] transition-colors duration-300" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g id="idea">
                      <path d="m10 24v2a2.0073 2.0073 0 0 0 1.07 1.77l.0082.0032a4.9789 4.9789 0 0 0 9.8436 0l.0082-.0032a2.0073 2.0073 0 0 0 1.07-1.77v-2z" />
                      <path d="m26.95 9.91a11.0022 11.0022 0 1 0 -17.35 10.04.9531.9531 0 0 1 .4.79v1.26h12v-1.26a.9677.9677 0 0 1 .41-.8 10.9553 10.9553 0 0 0 4.54-10.03zm-5.15.02-2.47 3.31a.99.99 0 0 1 -1.35.23l-4.26-2.79-1.96 2.56a.999.999 0 1 1 -1.59-1.21l2.53-3.31a.9924.9924 0 0 1 1.34-.23l4.25 2.79 1.91-2.55a1 1 0 1 1 1.6 1.2z" />
                      <path d="m3 11.9834h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z" />
                      <path d="m4.8008 5.397a.994.994 0 0 1 -.5059-.1382l-1.7241-1.0137a1 1 0 1 1 1.0137-1.7236l1.7241 1.0137a1 1 0 0 1 -.5078 1.8618z" />
                      <path d="m3.0786 19.6167a1 1 0 0 1 -.5078-1.8618l1.7241-1.0137a1 1 0 1 1 1.0137 1.7236l-1.7241 1.0137a.993.993 0 0 1 -.5059.1382z" />
                      <path d="m31 11.9834h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z" />
                      <path d="m27.1992 5.397a1 1 0 0 1 -.5078-1.8618l1.7236-1.0137a1 1 0 1 1 1.0137 1.7236l-1.7236 1.0137a.9953.9953 0 0 1 -.5059.1382z" />
                      <path d="m28.9209 19.6167a.9943.9943 0 0 1 -.5059-.1382l-1.7236-1.0137a1 1 0 1 1 1.0137-1.7236l1.7236 1.0137a1 1 0 0 1 -.5078 1.8618z" />
                    </g>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 font-basic group-hover:text-[#0db8ff] transition-colors duration-300">Insights & Resources</h3>
                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed group-hover:text-gray-900 transition-colors duration-300">Playbooks and benchmarks</p>
              </div>

              {/* Private Community */}
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-full h-full group-hover:text-[#0db8ff] transition-colors duration-300" id="Capa_1" enableBackground="new 0 0 587.773 587.773" viewBox="0 0 587.773 587.773" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <g id="Page-1_37_">
                        <g id="_x30_88---Locked-Network" transform="translate(-1)">
                          <path id="Shape_317_" d="m294.94 398.954c57.918 0 104.87-46.952 104.87-104.87s-46.952-104.87-104.87-104.87-104.87 46.952-104.87 104.87c.064 57.892 46.978 104.807 104.87 104.87zm-52.435-104.87c.055-13.285 8.449-25.103 20.974-29.531v-12.417c0-17.375 14.086-31.461 31.461-31.461s31.461 14.086 31.461 31.461v12.417c12.525 4.428 20.919 16.247 20.974 29.531v41.948c0 17.375-14.086 31.461-31.461 31.461h-41.948c-17.375 0-31.461-14.086-31.461-31.461z" />
                          <path id="Shape_316_" d="m273.966 346.519h41.948c5.792 0 10.487-4.695 10.487-10.487v-41.948c0-5.792-4.695-10.487-10.487-10.487h-41.948c-5.792 0-10.487 4.695-10.487 10.487v41.948c0 5.792 4.695 10.487 10.487 10.487zm20.974-41.948c5.792 0 10.487 4.695 10.487 10.487s-4.695 10.487-10.487 10.487-10.487-4.695-10.487-10.487 4.695-10.487 10.487-10.487z" />
                          <circle id="Oval_26_" cx="127.148" cy="105.318" r="52.435" />
                          <path id="Shape_315_" d="m305.427 252.136c0-5.792-4.695-10.487-10.487-10.487s-10.487 4.695-10.487 10.487v10.487h20.974z" />
                          <path id="Shape_314_" d="m483.706 514.311h-41.948c-27.859.072-50.784 21.946-52.162 49.771 6.498 4.686 13.43 8.738 20.701 12.102v-9.438c0-5.792 4.695-10.487 10.487-10.487s10.487 4.695 10.487 10.487v16.779c20.61 5.523 42.312 5.523 62.922 0v-16.779c0-5.792 4.695-10.487 10.487-10.487s10.487 4.695 10.487 10.487v9.438c7.269-3.347 14.201-7.382 20.701-12.05-1.351-27.845-24.283-49.749-52.162-49.823z" />
                          <path id="Shape_313_" d="m487.041 338.434 18.877-170.256c46.014-.666 82.902-38.274 82.68-84.292s-37.472-83.268-83.49-83.49c-46.018-.222-83.626 36.667-84.292 82.68l-170.256 18.877c-10.164-52.549-52.453-92.919-105.416-100.633s-105.01 18.914-129.742 66.378-16.736 105.38 19.932 144.367c6.268-23.004 23.288-41.548 45.671-49.761-24.17-19.559-33.397-52.224-23.031-81.538s38.075-48.918 69.168-48.936 58.824 19.555 69.223 48.857 1.21 61.978-22.938 81.564c17.5 6.428 31.863 19.331 40.123 36.044 8.173-6.942 17.198-12.813 26.857-17.471 8.267-16.991 12.57-35.637 12.584-54.532 0-1.164-.147-2.297-.178-3.461l170.393-18.877c7.413 30.583 31.291 54.461 61.873 61.873l-18.877 170.393c-1.154 0-2.286-.178-3.45-.178-18.896.014-37.541 4.317-54.532 12.584-12.399 25.634-33.093 46.328-58.727 58.727-8.273 16.986-12.583 35.628-12.605 54.522v.346c-49.289 4.646-114.015 10.948-171.494 17.167-8.735-28.382-31.783-50.059-60.646-57.039l18.877-170.445c1.164 0 2.276.231 3.45.231 10.617-.016 21.189-1.383 31.461-4.069v-16.905c0-5.792 4.695-10.487 10.487-10.487s10.487 4.695 10.487 10.487v9.323c.703-.325 1.416-.598 2.097-.933 4.289-8.989 9.63-17.438 15.909-25.169-7.06-21.288-26.966-35.657-49.394-35.656h-41.948c-27.859.072-50.784 21.946-52.162 49.771 6.498 4.686 13.43 8.738 20.701 12.102v-9.438c0-5.792 4.695-10.487 10.487-10.487s10.487 4.695 10.487 10.487v16.832c2.349.608 4.793.933 7.184 1.416l-18.95 170.582c-46.17.704-83.091 38.584-82.612 84.757.479 46.172 38.179 83.278 84.353 83.024s83.463-37.773 83.434-83.948c0-1.258-.126-2.475-.178-3.712 57.028-6.166 121.02-12.385 169.889-16.989 4.161 24.21 15.346 46.663 32.164 64.568 6.245-23.008 23.245-41.568 45.618-49.803-24.178-19.563-33.405-52.239-23.029-81.559s38.102-48.919 69.203-48.919 58.828 19.599 69.203 48.919c10.376 29.32 1.149 61.996-23.029 81.559 22.369 8.238 39.365 26.797 45.608 49.803 31.31-33.319 42.038-81.022 28.007-124.537s-50.604-75.967-95.48-84.72z" />
                          <circle id="Oval_25_" cx="462.732" cy="440.902" r="52.435" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 font-basic group-hover:text-[#0db8ff] transition-colors duration-300">Private Community</h3>
                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed group-hover:text-gray-900 transition-colors duration-300">Trusted space to connect and grow</p>
              </div>
            </div>
            <div className="mt-10 sm:mt-12 lg:mt-16 animate-in fade-in-50 slide-in-from-bottom delay-[1500ms]">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-[#ffaf02] hover:bg-[#e9a104] text-black font-bold px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full transition-all duration-300 text-lg sm:text-xl lg:text-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 focus-ring interactive-element group cursor-pointer border-0"
                aria-label="Explore CXO House membership opportunities"
              >
                <span className="transition-transform duration-300 group-hover:tracking-wide">Explore Membership</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Executives Section */}
      <section 
        className="bg-black text-white py-16 sm:py-20 lg:py-24 px-4 bg-cover animate-in slide-in-from-bottom duration-1000 delay-300" 
        style={{ backgroundImage: "url(/img/blackbg.webp)" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic mb-8 sm:mb-12 lg:mb-16 animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-500">
            See Some of the Attending Executives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-16 px-4 sm:px-6 lg:px-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-500 animate-in fade-in-50 slide-in-from-left delay-700 p-4">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 group-hover:shadow-2xl transition-shadow duration-500 border-4 border-yellow-200 mx-auto focus-within:ring-4 focus-within:ring-yellow-400 focus-within:ring-opacity-50 w-fit">
                <Image 
                  src="/img/suzie.png" 
                  alt="Portrait of Suzie Dieth, Vice President and Chief Experience Officer at NRG Consumer Energy" 
                  className="w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 object-cover transition-transform duration-500 group-hover:scale-110" 
                  width={240} 
                  height={240} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-yellow-400 transition-colors duration-300">Suzie Dieth</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xs mx-auto group-hover:text-gray-100 transition-colors duration-300">
                Vice President and Chief Experience Officer at NRG Consumer Energy
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-500 animate-in fade-in-50 slide-in-from-bottom delay-900 p-4">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 group-hover:shadow-2xl transition-shadow duration-500 border-4 border-yellow-200 mx-auto focus-within:ring-4 focus-within:ring-yellow-400 focus-within:ring-opacity-50 w-fit">
                <Image 
                  src="/img/jeff.png" 
                  alt="Portrait of Jeff Gelfuso, Chief Product, Experience, Design Officer at Qualtrics" 
                  className="w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 object-cover transition-transform duration-500 group-hover:scale-110" 
                  width={240} 
                  height={240} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-yellow-400 transition-colors duration-300">Jeff Gelfuso</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xs mx-auto group-hover:text-gray-100 transition-colors duration-300">
                Chief Product, Experience, Design Officer at Qualtrics
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-500 animate-in fade-in-50 slide-in-from-right delay-[1100ms] p-4">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 group-hover:shadow-2xl transition-shadow duration-500 border-4 border-yellow-200 mx-auto focus-within:ring-4 focus-within:ring-yellow-400 focus-within:ring-opacity-50 w-fit">
                <Image 
                  src="/img/valarie.png" 
                  alt="Portrait of Valarie Vest, Chief Experience Officer at Cambridge Investment Research, Inc." 
                  className="w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 object-cover transition-transform duration-500 group-hover:scale-110" 
                  width={240} 
                  height={240} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-yellow-400 transition-colors duration-300">Valarie Vest</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xs mx-auto group-hover:text-gray-100 transition-colors duration-300">
                Chief Experience Officer at Cambridge Investment Research, Inc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Blake Morgan Section */}
      <section 
        className="relative text-white py-16 sm:py-24 md:py-32 lg:py-40 bg-no-repeat bg-right-top about-bg-responsive animate-in slide-in-from-bottom duration-1000 delay-400" 
        style={{ 
          backgroundImage: "url(/img/about-bg.jpg)"
        }}
      >
        {/* Gradient Overlay - Mobile only */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-10% via-[#1b0b2b]/80 via-40% to-black to-70% md:bg-none"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Reduced white space for mobile to move text higher */}
          <div className="h-16 sm:h-24 md:h-32 lg:h-0"></div>
          
          <div className="w-full md:w-[90%] lg:w-[86%] text-center lg:text-left">
            <h4 className="italic text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white mb-2 animate-in fade-in-50 slide-in-from-left duration-1000 delay-600">About</h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold mb-6 sm:mb-8 lg:mb-10 animate-in fade-in-50 slide-in-from-left duration-1000 delay-800 hover:text-yellow-400 transition-colors">Blake Morgan</h2>
            <div className="max-w-none lg:max-w-[600px] animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-1000">
              <p className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl leading-relaxed text-white hover:text-gray-200 transition-colors duration-300">
                Blake Morgan was called &quot;The Queen of CX&quot; by Meta. She is a customer experience futurist and author of three books on customer experience. Her new book is called The 8 Laws of Customer-Focused Leadership: The New Rules for Building A Business Around Today&apos;s Customer. Blake has taught courses at Columbia University, Rutgers Executive MBA program and UC San Diego. She is an instructor for LinkedIn Learning.
              </p>
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed hover:text-gray-200 transition-colors duration-300">
                Blake is the host of The Modern Customer Podcast. She lives in the Los Angeles Area with her husband, their two children and two dogs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#efe6dc] py-16 sm:py-20 lg:py-24 text-center bg-cover bg-center px-4 animate-in slide-in-from-bottom duration-1000 delay-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic mb-4 sm:mb-6 text-black leading-tight animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-700">Join the Network of Experience Leaders</h2>
          <p className="text-black mb-6 sm:mb-8 lg:mb-10 mx-auto max-w-[600px] text-base sm:text-lg lg:text-xl leading-relaxed animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-900">
            Apply now to access the conversations, insights, and relationships shaping the future of customer experience
          </p>
          <div className="animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-1100">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-[#ffaf02] hover:bg-[#e9a104] text-black font-bold px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full transition-all duration-300 text-lg sm:text-xl lg:text-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 focus-ring interactive-element group cursor-pointer border-0"
              aria-label="Request an invitation to join the CXO House network"
            >
              <span className="transition-transform duration-300 group-hover:tracking-wide">Request an Invitation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Modal with Form */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-8 bg-gradient-to-br from-white to-gray-50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light italic text-[#0a4e65] mb-3">
              Join the CXO House Network
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              Apply to connect with top customer experience leaders
            </p>
          </div>
          
          <form 
            action="https://www.customerexperienceschool.com/forms/2149155673/form_submissions" 
            method="post" 
            className="space-y-6"
            acceptCharset="UTF-8"
          >
            <input name="utf8" type="hidden" value="✓" />
            <input type="hidden" name="authenticity_token" value="y+b+i6sFK+T/nLegqEajm95HziriPDSJwJksKCg+ijOFsE4TNox0+JdBkFvckyPisf//z5aZX1cLsHZByTp3hw==" />
            
            <div className="space-y-5">
              <div className="group">
                <label htmlFor="form_submission_name" className="block text-sm font-medium text-[#0a4e65] mb-3 tracking-wide">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="form_submission[name]"
                  id="form_submission_name"
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg shadow-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#ffaf02] focus:border-[#ffaf02] transition-all duration-300 text-gray-800 placeholder-gray-400 group-hover:border-gray-300"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="group">
                <label htmlFor="form_submission_email" className="block text-sm font-medium text-[#0a4e65] mb-3 tracking-wide">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="form_submission[email]"
                  id="form_submission_email"
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg shadow-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#ffaf02] focus:border-[#ffaf02] transition-all duration-300 text-gray-800 placeholder-gray-400 group-hover:border-gray-300"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="group">
                <label htmlFor="form_submission_custom_10" className="block text-sm font-medium text-[#0a4e65] mb-3 tracking-wide">
                  Organization *
                </label>
                <input
                  type="text"
                  name="form_submission[custom_10]"
                  id="form_submission_custom_10"
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg shadow-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#ffaf02] focus:border-[#ffaf02] transition-all duration-300 text-gray-800 placeholder-gray-400 group-hover:border-gray-300"
                  placeholder="Enter your organization"
                />
              </div>
              
              <div className="group">
                <label htmlFor="form_submission_custom_11" className="block text-sm font-medium text-[#0a4e65] mb-3 tracking-wide">
                  Title
                </label>
                <input
                  type="text"
                  name="form_submission[custom_11]"
                  id="form_submission_custom_11"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg shadow-sm bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#ffaf02] focus:border-[#ffaf02] transition-all duration-300 text-gray-800 placeholder-gray-400 group-hover:border-gray-300"
                  placeholder="Enter your title"
                />
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="w-full bg-[#ffaf02] hover:bg-[#e9a104] text-black font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#ffaf02] focus:ring-opacity-50 group"
              >
                <span className="transition-transform duration-300 group-hover:tracking-wide">
                  Request Invitation
                </span>
              </button>
            </div>
            
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              By submitting this form, you agree to be contacted about CXO House membership opportunities.
            </p>
          </form>
        </div>
      </Modal>
    </main>
  );
}
