import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h1>TELL US MORE ABOUT YOUR RECIPE</h1>
        <form>
            <input type='text' placeholder='Full Name' />
            <input type='email' placeholder='Type Your E-Mail' />
           <textarea placeholder='Enquire about recipe you need....'></textarea>
           <input type='submit' value='SEND'/>
        </form>
    </div>
  )
}

export default Contact