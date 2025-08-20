import Image from "next/image";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <header className="py-2 bg-[#0db8ff] text-white animate-in slide-in-from-top duration-700">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="logo w-[60px] sm:w-[80px] md:w-[100px] landscape-logo transition-transform duration-300 hover:scale-105 mx-auto md:mx-0">
            <Link href="/" className="block transition-opacity duration-200 hover:opacity-80" aria-label="CXO House homepage">
              <Image src="/img/CXO-svg.svg" alt="CXO House logo" width={120} height={30} className="w-full h-auto" />
            </Link>
          </div>
        </div>
      </header>

      {/* Thank You Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-fixed min-h-screen landscape-hero flex items-center overflow-hidden" 
        style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}
      >
        <div className="container mx-auto px-1">
          <div 
            className="absolute inset-0 bg-opacity-60 bg-cover animate-pulse-slow" 
            style={{ backgroundImage: "url('/img/overlay.png')" }}
          ></div>
          <div className="relative z-10 max-w-4xl mx-auto px-1 sm:px-6 py-12 sm:py-16 landscape-hero-content landscape-content-wrapper landscape-override-spacing text-center">
            {/* Thank You Icon */}
            <div className="mb-8 sm:mb-12 landscape-icon-container animate-in fade-in-50 duration-1000 delay-300">
              <div className="w-24 h-24 sm:w-32 sm:h-32 landscape-icon mx-auto mb-6 bg-[#ffaf02] rounded-full flex items-center justify-center animate-bounce-slow group hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-black transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl landscape-title font-light mb-6 text-white leading-[1.1] animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-500">
              <div className="landscape-line-1">The first private Network ONLY</div>
              <div className="landscape-line-2">
                for CXOs run by <span className="italic font-normal" style={{fontFamily:"'Brush Script MT', 'Lucida Handwriting', cursive"}}>Blake Morgan</span>
              </div>
              
              {/* Default non-landscape layout */}
              <span className="non-landscape-text">
                The first private<br />
                Network ONLY<br />
                for CXOs run by<br />
                <span className="italic font-normal" style={{fontFamily:"'Brush Script MT', 'Lucida Handwriting', cursive"}}>Blake Morgan</span>
              </span>
            </h1>
            
            <p className="mb-8 landscape-subtitle text-gray-200 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extralight max-w-[800px] mx-auto leading-relaxed animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-700">
              Your invitation request has been successfully submitted. Blake will review your application and get back to you within 3-5 business days.
            </p>

            {/* What Happens Next Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 landscape-card mb-8 max-w-3xl mx-auto animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-900 hover:bg-white/15 transition-colors">
              <h2 className="text-2xl sm:text-3xl landscape-card-title font-semibold text-white mb-6">What Happens Next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 landscape-grid-3 gap-6 text-left">
                <div className="flex flex-col items-center md:items-start text-center md:text-left group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 landscape-step-icon bg-[#ffaf02] rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-400 transition-colors duration-300 group-hover:shadow-lg">
                    <span className="text-black font-bold text-lg landscape-step-number">1</span>
                  </div>
                  <h3 className="text-lg landscape-step-title font-semibold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300">Review</h3>
                  <p className="text-gray-300 text-sm landscape-step-text group-hover:text-gray-200 transition-colors duration-300">Blake reviews your application</p>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 landscape-step-icon bg-[#ffaf02] rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-400 transition-colors duration-300 group-hover:shadow-lg">
                    <span className="text-black font-bold text-lg landscape-step-number">2</span>
                  </div>
                  <h3 className="text-lg landscape-step-title font-semibold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300">Contact</h3>
                  <p className="text-gray-300 text-sm landscape-step-text group-hover:text-gray-200 transition-colors duration-300">Blake will reach out to you</p>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 landscape-step-icon bg-[#ffaf02] rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-400 transition-colors duration-300 group-hover:shadow-lg">
                    <span className="text-black font-bold text-lg landscape-step-number">3</span>
                  </div>
                  <h3 className="text-lg landscape-step-title font-semibold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300">Welcome</h3>
                  <p className="text-gray-300 text-sm landscape-step-text group-hover:text-gray-200 transition-colors duration-300">Join the CXO House community</p>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <div className="flex justify-center items-center animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-1100">
              <a 
                href="mailto:blake@cxohouse.com" 
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 landscape-button rounded-full transition-all duration-300 text-lg sm:text-xl hover:scale-105 active:scale-95"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="bg-[#efe6dc] py-16 sm:py-20 lg:py-24 landscape-bottom-section animate-in slide-in-from-bottom duration-1000 delay-300">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl landscape-bottom-title font-serif italic text-black mb-8 animate-in fade-in-50 duration-1000 delay-500">
            While You Wait
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 landscape-grid-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 landscape-bottom-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-in fade-in-50 slide-in-from-left delay-700">
              <div className="w-16 h-16 landscape-bottom-icon bg-[#0db8ff] rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-3">
                <svg className="w-8 h-8 text-white transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl landscape-bottom-card-title font-bold text-black mb-3 transition-colors duration-300 hover:text-[#0db8ff]">Check Your Email</h3>
              <p className="text-gray-700 landscape-bottom-card-text transition-colors duration-300 hover:text-gray-900">
                You&apos;ll receive a confirmation email shortly with additional information about the CXO House community.
              </p>
            </div>
            
            <a 
              href="https://www.linkedin.com/in/blakemichellemorgan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white rounded-xl p-6 landscape-bottom-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-in fade-in-50 slide-in-from-right delay-900"
            >
              <div className="w-16 h-16 landscape-bottom-icon bg-[#0db8ff] rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-3">
                <svg className="w-8 h-8 text-white transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl landscape-bottom-card-title font-bold text-black mb-3 transition-colors duration-300 hover:text-[#0db8ff]">Connect with Blake</h3>
              <p className="text-gray-700 landscape-bottom-card-text transition-colors duration-300 hover:text-gray-900">
                Follow Blake Morgan on LinkedIn to stay updated on the latest customer experience insights and trends.
              </p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-[#0db8ff] to-[#0a4e65] rounded-xl p-8 landscape-questions-card text-white animate-in fade-in-50 slide-in-from-bottom delay-1100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl landscape-questions-title font-bold mb-4 animate-pulse">Questions?</h3>
            <p className="text-lg landscape-questions-text">
              Blake is here to help. If you have any questions about your application or the CXO House community, 
              don&apos;t hesitate to reach out at{' '}
              <a 
                href="mailto:blake@cxohouse.com" 
                className="underline hover:text-yellow-300 transition-colors duration-300"
              >
                blake@cxohouse.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
