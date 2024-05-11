'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import TestimonialImage from '@/public/images/female.webp'
import TestimonialImage2 from '@/public/images/sabina.png'

export default function Testimonials() {
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4 text-white">Što kažu naši korisnici?</h2>
            <p className="text-xl text-[#FBBE0D]" data-aos="zoom-y-out">Pitali smo Vlasnike salona i njihove mušterije što misle o Frizline-u</p>
          </div>

          

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div>
              <a href="#0" onClick={(e) => { e.preventDefault(); setTab(1); }}>
                <div className='bg-white w-30px rounded-full py-4 pr-5 pl-3 absolute top-[50%] translate-y-[-50%] left-[-4%] border-solid border-2 cursor-pointer z-10'>
            <svg className='text-center' width="28px" height="30px" viewBox="0 0 11 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Rounded" transform="translate(-548.000000, -3434.000000)">
            <g id="Navigation" transform="translate(100.000000, 3378.000000)">
                <g id="-Round-/-Navigation-/-arrow_back_ios" transform="translate(442.000000, 54.000000)">
                    <g>
                        <polygon id="Path" opacity="0.87" points="0 0 24 0 24 24 0 24"></polygon>
                        <path d="M16.62,2.99 C16.13,2.5 15.34,2.5 14.85,2.99 L6.54,11.3 C6.15,11.69 6.15,12.32 6.54,12.71 L14.85,21.02 C15.34,21.51 16.13,21.51 16.62,21.02 C17.11,20.53 17.11,19.74 16.62,19.25 L9.38,12 L16.63,4.75 C17.11,4.27 17.11,3.47 16.62,2.99 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
                </div>
              </a>
              <a href="#0" onClick={(e) => { e.preventDefault(); setTab(2); }}>
                <div className='bg-white w-30px rounded-full py-4 pl-5 pr-3 absolute top-[50%] translate-y-[-50%] right-[-4%] border-solid border-2 cursor-pointer z-10'>
                <svg width="30px" height="30px" viewBox="0 0 11 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Rounded" transform="translate(-345.000000, -3434.000000)">
            <g id="Navigation" transform="translate(100.000000, 3378.000000)">
                <g id="-Round-/-Navigation-/-arrow_forward_ios" transform="translate(238.000000, 54.000000)">
                    <g>
                        <polygon id="Path" opacity="0.87" points="24 24 0 24 0 0 24 0"></polygon>
                        <path d="M7.38,21.01 C7.87,21.5 8.66,21.5 9.15,21.01 L17.46,12.7 C17.85,12.31 17.85,11.68 17.46,11.29 L9.15,2.98 C8.66,2.49 7.87,2.49 7.38,2.98 C6.89,3.47 6.89,4.26 7.38,4.75 L14.62,12 L7.37,19.25 C6.89,19.73 6.89,20.53 7.38,21.01 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
                </div>
              </a>
            </div>

            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white" ref={tabs}>
              {/* Testimonial */}
             
              <Transition
                    show={tab === 1}
                    appear={true}
                    className="relative flex items-start border-2 border-gray-200 rounded bg-white"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    // leave="transition ease-in-out duration-300 transform absolute"
                    // leaveFrom="opacity-100 translate-y-0"
                    // leaveTo="opacity-0 -translate-y-16"
                    unmount={false}                     
                  >
                  
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <Image alt='testimonialImg' width={90} height={90} className='rounded-full' src={TestimonialImage2}></Image>

                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-[#efa9fa]" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  
"Puno nam je pomoglo riješenje za online naručivanje. Kao vlasnica frizerskog salona, bila sam opterećena organizacijom termina i neprestanim telefonskim pozivima klijenata. S ovim rješenjem, sada imamo potpunu kontrolu nad našim rasporedom i rezervacijama, a moja zaposlenica troši puno manje vremena na telefoniranje. Smanjili smo obujam posla, i poboljšali iskustvo naših klijenata."</blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Sabina Vlahović</cite>
                <div className="text-gray-600">
                  <span>Vlasnica salona </span> <a className="text-[#3F2182] hover:underline" href="https://sabininabrijacnica.com/"> Sabinina Brijačnica</a>
                </div>
              </div>
              
              </Transition> <Transition
                    show={tab === 2}
                    appear={true}
                    className="relative flex items-start border-2 border-gray-200 rounded bg-white"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    // leave="transition ease-in-out duration-300 transform absolute"
                    // leaveFrom="opacity-100 translate-y-0"
                    // leaveTo="opacity-0 -translate-y-16"
                    unmount={false}                     
                  >
                  
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <Image alt='testimonialImg' width={90} height={90} className='rounded-full' src={TestimonialImage}></Image>

                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-[#efa9fa]" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ Oduševljena sam koliko manje moram misliti oko samog naručivanja, jednom dnevno prije nego se uputim prema salonu pogledam kalendar da vidim sve rezervacije i to je sav posao. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Mirna Sabljić</cite>
                <div className="text-gray-600">
                  <span>Vlasnica salona </span> <a className="text-[#3F2182] hover:underline" href="#0"> FS Mirna</a>
                </div>
              </div>
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0 hidden sm:block">
                
                <blockquote className="text-xl font-medium mb-4">
                  “ Baš mi je drago da si prešla online, ovak mi je lakše, samo odaberem termin koji mi paše i dođem. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Antonio</cite>
                <div className="text-gray-600">
                  <span>Korisnik</span> <a className="text-[#3F2182] hover:underline" href="#0">FS Mirna</a>
                </div>
              </div>
              </Transition>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}