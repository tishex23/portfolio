import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formref = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_wyrun38',
                'template_1j4wyoc',
                {
                    from_name: form.name,
                    to_name: 'Lasha',
                    message: form.message,
                    from_email: form.email,
                    to_email: 'lashamartiashvili.99@gmail.com'
                },
                'GtoC_tBExiokmmqu_'
           ) 
           setLoading(false);
           alert('Your message has been sent!');

           setForm({
               name: '',
               email: '',
               message: '',
           });

        }catch(err) {
            setLoading(false);
            console.log(err);
            alert('Something went wrong!');
        }

        
    }

  return (
    <section className='c-space my-20'>
        <div className='relative min-h-screen flex flex-col items-center justify-center'>
            <img src='/assets/terminal.png' alt='terminal' className='absolute inset-0 min-h-screen' />
            <div className='contact-container'>
                <h3 className='head-text'>Let's Talk</h3>
                <p className='text-lg text-white-600'>
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <form ref={formref} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label'>Full Name</span>
                        <input 
                        type="text"
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        className='field-input'
                        placeholder='...'
                        required
                         />
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>Email</span>
                        <input 
                        type="email"
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        className='field-input'
                        placeholder='...'
                        required
                         />
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>Your Message</span>
                        <textarea
                        name='message' 
                        value={form.message}
                        onChange={handleChange}
                        className='field-input'
                        placeholder='Hi i wanna work with you...'
                        required
                        rows={5}
                         />
                    </label>
                    <button type='submit' className='field-btn' disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                        <img src='/assets/arrow-up.png' alt='arrow' className='field-btn_arrow' />
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
