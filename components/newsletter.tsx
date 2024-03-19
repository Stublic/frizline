"use client"
import Lottie from "lottie-react";
import animation from "@/public/images/animation.json";
import SignupForm from './Signup-form'

export default function Newsletter() {
  return (
    <section id="form">
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
                <SignupForm/>
                
              </div>
              <Lottie animationData={animation} className='w-80' />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}