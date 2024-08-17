import React, { useEffect, useState } from 'react'
import LazyImage from '@/components/LazyImage'

/**
 * Ad Module
 * @returns {JSX.Element}
 */
const AdModule = () => {
  const [ads, setAds] = useState([])
  const [currentAdIndex, setCurrentAdIndex] = useState(0)

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/jiroop-com/ad-assets/main/ad-business-config.json'
        )
        const data = await response.json()
        setAds(data)
      } catch (error) {
        console.error('Error fetching ad config:', error)
      }
    }

    fetchAds()
  }, [])

  useEffect(() => {
    if (ads.length > 0) {
      const interval = setInterval(() => {
        setCurrentAdIndex(prevIndex => (prevIndex + 1) % ads.length)
      }, 60000)
      return () => clearInterval(interval)
    }
  }, [ads])

  if (!ads.length) {
    return <></>
  }

  const currentAd = ads[currentAdIndex]

  return (
    <div
      className='shadow-md hover:shadow-xl dark:text-gray-300 border dark:border-black rounded-xl px-2 py-4 lg:duration-100 bg-white dark:bg-hexo-black-gray'
      style={{ height: '400px' }}>
      <a
        href={currentAd.link}
        target='_blank'
        rel='noopener noreferrer'
        className='block mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105'
        style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <LazyImage
          src={currentAd.image}
          alt={`Ad ${currentAdIndex + 1}`}
          width='100%'
          height='100%'
          style={{
            borderRadius: '8px',
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
      </a>
    </div>
  )
}

export default AdModule
