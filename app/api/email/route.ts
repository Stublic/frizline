
// import Newsletter from '@/app/email/newsletter';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import Test from '@/app/email/test';

const resend = new Resend(process.env.RESEND_API);

export async function POST(request: Request) {
  const { firstName, email } = await request.json();

  try {
    await resend.emails.send({
      from: 'Jurica @Frizline <jurica@webica.hr>' || '',
      to: email,
      subject: 'Uspješno ste se prijavili na Frizline! 🎉',
      react: Test({
        firstName,
      })
    });
    return NextResponse.json({
      status: 'Ok'
    }, {
      status: 200
    })
  } catch(e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json({
      error: 'Internal server error.'
    }, {
      status: 500
    })
  }
  

}