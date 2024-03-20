"use client";

import { useState } from 'react';

import { buttonVariants } from "../components/ui/button"
import { Input } from "../components/ui/input"
function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
  return 'value' in e && 'name' in e
}

const SignupForm = () => {
  const [state, setState] = useState<string>();
  const [message, setMessage] = useState(false);


  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements).filter(isInputNamedElement).forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
        field.value = '';
        setMessage(true);
    });

    setState('loading');

    await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({
        firstName: formData.firstName,
        email: formData.email
      })
    })

    setState('ready');
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
      <Input id="firstName" name="firstName" placeholder='Ime' required className='no-focus'/>
      <Input id="email" name="email" placeholder='Email' required className='no-focus'/>

      <div>
      <p className='text-[14px] text-gray-500'> Vaša email adresa će biti spremljena kako bi vas mogli kontaktirati kada se usluga aktivira.</p>
      </div>
      
      <button className={buttonVariants()} disabled={state === 'loading'}>
        Pošalji
      </button>
      {
          message ? (
            <p className='text-green'>Uspješno poslano. Uskoro ćete dobiti potvrdu na email.</p>
          ) :
  (
    <span></span>
  )
      }
    </form>
  )
}

export default SignupForm;