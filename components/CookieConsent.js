import React, { useEffect, useState } from 'react'
import { setCookie, hasCookie } from 'cookies-next'

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(!hasCookie('localConsent'))

  useEffect(() => {
    if (!hasCookie('localConsent')) {
      document.body.classList.add('overflow-hidden') // Prevent scrolling when banner is shown
    } else {
      document.body.classList.remove('overflow-hidden') // Restore scrolling when banner is hidden
    }
  }, [])

  const acceptCookies = () => {
    // Example: Setting multiple third-party cookies
    setCookie('GoogleCookie', 'GoogleValue', {
      maxAge: 31536000, // 1 year in seconds
      path: '/',
      domain: '.google.com', // Replace with the domain of the script
      secure: true, // Set to true if serving over HTTPS
      sameSite: 'None' // Required for cross-site requests
    })

    setCookie('clarityCookie', 'clarityValue', {
      maxAge: 31536000, // 1 year in seconds
      path: '/',
      domain: '.clarity.ms', // Replace with the domain of the script
      secure: true, // Set to true if serving over HTTPS
      sameSite: 'None' // Required for cross-site requests
    })

    setCookie('notionImageCookie', 'notionImageValue', {
      maxAge: 31536000, // 1 year in seconds
      path: '/',
      domain: '.notion.so', // Replace with the domain of the script
      secure: true, // Set to true if serving over HTTPS
      sameSite: 'None' // Required for cross-site requests
    })

    setCookie('discordCookie', 'discordValue', {
      maxAge: 31536000, // 1 year in seconds
      path: '/',
      domain: '.discord.com', // Replace with the domain of the script
      secure: true, // Set to true if serving over HTTPS
      sameSite: 'None' // Required for cross-site requests
    })

    setCookie('facebookCookie', 'facebookValue', {
      maxAge: 31536000, // 1 year in seconds
      path: '/',
      domain: 'www.facebook.com', // Replace with the domain of the script
      secure: true, // Set to true if serving over HTTPS
      sameSite: 'None' // Required for cross-site requests
    })

    setCookie('gamepixCookie', 'gamepixValue', {
      maxAge: 31536000, // 1 year in seconds
      path: '/',
      domain: '.gamepix.com', // Replace with the domain of the script
      secure: true, // Set to true if serving over HTTPS
      sameSite: 'None' // Required for cross-site requests
    })

    setCookie('localConsent', 'true', {
      maxAge: 31536000, // 1 year in seconds
      path: '/',
      secure: true, // Set to true if serving over HTTPS
      sameSite: 'None' // Required for cross-site requests
    })

    setShowConsent(false) // Hide the consent banner after accepting
    document.body.classList.remove('overflow-hidden') // Restore scrolling
  }

  if (!showConsent) {
    return null // Do not render the consent banner if the cookie exists
  }

  return (
    <div className='fixed inset-0 bg-gray-900 bg-opacity-80 z-50'>
      <div className='fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-white shadow-md'>
        <span className='text-gray-800 text-sm'>
          This website uses cookies to improve user experience. By using our
          website you consent to all cookies in accordance with our Cookie
          Policy.
        </span>
        <button
          className='bg-green-500 py-2 px-6 rounded text-white shadow-md hover:bg-green-600 focus:outline-none'
          onClick={acceptCookies}>
          Accept
        </button>
      </div>
    </div>
  )
}

export default CookieConsent
