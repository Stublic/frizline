"use client"
import Lottie from "lottie-react";
import animation from "@/public/images/animation.json";

export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-white rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">

            </div>
            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-black mb-2">Trenutno radimo na poboljšanju Frizline usluge!</h3>
                <p className="text-gray-700 text-lg mb-6">Ukoliko ste zainteresirani, ostavite nam svoju email adresu i kontaktirati ćemo vas kada usluga bude dostupna.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="email" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Email ..." aria-label="Email" />
                    <a className="btn hover:text-[#3F2182] text-[#efa9fa] bg-[#3F2182] hover:bg-[#efa9fa] shadow" href="mailto:stublic.jurica@gmail.com">Pošalji</a>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3">Vaša email adresa će biti spremljena kako bi vas mogli kontaktirati.</p>
                </form>
              </div>
              <Lottie animationData={animation} className='w-80' />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}