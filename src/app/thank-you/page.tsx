import Image from "next/image";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <header className="px-4 py-6 bg-[#0db8ff] text-white animate-in slide-in-from-top duration-700">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="logo w-[200px] sm:w-[240px] md:w-[300px] transition-transform duration-300 hover:scale-105">
            <Link href="/" className="block transition-opacity duration-200 hover:opacity-80">
              <Image src="/img/logo.png" alt="logo" width={300} height={80} className="w-full h-auto" />
            </Link>
          </div>
        </div>
      </header>

      {/* Thank You Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-fixed min-h-screen flex items-center overflow-hidden" 
        style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}
      >
        <div className="container mx-auto px-4">
          <div 
            className="absolute inset-0 bg-opacity-60 bg-cover animate-pulse-slow" 
            style={{ backgroundImage: "url('/img/overlay.png')" }}
          ></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
            {/* Thank You Icon */}
            <div className="mb-8 sm:mb-12 animate-in fade-in-50 duration-1000 delay-300">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 bg-[#ffaf02] rounded-full flex items-center justify-center animate-bounce-slow group hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-black transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white leading-[1.1] animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-500">
              Thank You for Your Interest
            </h1>
            
            <p className="mb-8 text-gray-200 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extralight max-w-[800px] mx-auto leading-relaxed animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-700">
              Your invitation request has been successfully submitted. Blake will review your application and get back to you within 3-5 business days.
            </p>

            {/* What Happens Next Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8 max-w-3xl mx-auto animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-900 hover:bg-white/15 transition-colors">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">What Happens Next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex flex-col items-center md:items-start text-center md:text-left group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#ffaf02] rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-400 transition-colors duration-300 group-hover:shadow-lg">
                    <span className="text-black font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300">Review</h3>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">Blake reviews your application and qualifications</p>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#ffaf02] rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-400 transition-colors duration-300 group-hover:shadow-lg">
                    <span className="text-black font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300">Contact</h3>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">Blake will reach out to schedule a brief conversation</p>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#ffaf02] rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-400 transition-colors duration-300 group-hover:shadow-lg">
                    <span className="text-black font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300">Welcome</h3>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">Join the exclusive CXO House community</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in-50 slide-in-from-bottom duration-1000 delay-1100">
              <Link 
                href="/" 
                className="inline-block bg-[#ffaf02] hover:bg-[#e9a104] text-black font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95"
              >
                Return to Home
              </Link>
              <a 
                href="mailto:info@cxohouse.com" 
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg sm:text-xl hover:scale-105 active:scale-95"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="bg-[#efe6dc] py-16 sm:py-20 lg:py-24 animate-in slide-in-from-bottom duration-1000 delay-300">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-black mb-8 animate-in fade-in-50 duration-1000 delay-500">
            While You Wait
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-in fade-in-50 slide-in-from-left delay-700">
              <div className="w-16 h-16 bg-[#0db8ff] rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-3">
                <svg className="w-8 h-8 text-white transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3 transition-colors duration-300 hover:text-[#0db8ff]">Check Your Email</h3>
              <p className="text-gray-700 transition-colors duration-300 hover:text-gray-900">
                You&apos;ll receive a confirmation email shortly with additional information about the CXO House community.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-in fade-in-50 slide-in-from-right delay-900">
              <div className="w-16 h-16 bg-[#0db8ff] rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-3">
                <svg className="w-8 h-8 text-white transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3 transition-colors duration-300 hover:text-[#0db8ff]">Connect with Blake</h3>
              <p className="text-gray-700 transition-colors duration-300 hover:text-gray-900">
                Follow Blake Morgan on LinkedIn to stay updated on the latest customer experience insights and trends.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0db8ff] to-[#0a4e65] rounded-xl p-8 text-white animate-in fade-in-50 slide-in-from-bottom delay-1100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 animate-pulse">Questions?</h3>
            <p className="text-lg mb-6">
              Blake is here to help. If you have any questions about your application or the CXO House community, 
              don&apos;t hesitate to reach out.
            </p>
            <a 
              href="mailto:info@cxohouse.com" 
              className="inline-block bg-white text-[#0db8ff] font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
