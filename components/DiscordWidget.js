import React, { useEffect, useState } from 'react'
import LazyImage from '@/components/LazyImage'

/**
 * Discord Widget
 * @param {Object} props - Component props
 * @param {boolean} props.collapsed - Whether the widget should be collapsed initially
 * @returns {JSX.Element}
 */
const DiscordWidget = ({ collapsed }) => {
  const [widgetData, setWidgetData] = useState(null)

  useEffect(() => {
    const fetchWidgetData = async () => {
      try {
        const response = await fetch(
          'https://discord.com/api/guilds/456048230250184734/widget.json'
        )
        const data = await response.json()
        setWidgetData(data)
      } catch (error) {
        console.error('Error fetching Discord widget data:', error)
      }
    }

    fetchWidgetData()
  }, [])

  if (!widgetData) {
    return <></>
  }
  const containerClassName = `shadow-md hover:shadow-xl dark:text-gray-300 border dark:border-black rounded-xl px-2 py-4 lg:duration-100 justify-center ${collapsed ? 'bg-[#7289da] text-white h-16' : 'bg-white dark:bg-hexo-black-gray h-auto'}`

  return (
    <div className={containerClassName}>
      <div className='flex items-center pb-2'>
        {/* Render Image in normal view if not collapsed */}
        {!collapsed && (
          <a
            href={widgetData.instant_invite}
            target='_blank'
            rel='noopener noreferrer'
            className='p-1 pr-2 pt-0'>
            <LazyImage
              src='https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F08f4bc37-40c8-4ca9-bf10-b148b765bcb8%2Fec882fe2-31db-4f80-a7e9-33477c96df72%2Fjiroop.png?table=collection&id=b4e8402d-ff93-4196-9189-330f30119cb8&t=b4e8402d-ff93-4196-9189-330f30119cb8&width=800&cache=v2'
              alt='Discord'
              width={28}
              height={28}
              style={{ borderRadius: '50%' }}
            />
          </a>
        )}
        {/* Render Discord icon in collapsed view */}
        {collapsed && (
          <span
            className='fab fa-discord text-white text-2xl mr-2 pl-2'
            style={{ width: '1.5em', height: '1.5em' }}></span>
        )}
        {/* Render server name or 'Discord' text based on collapsed state */}
        <a
          href={widgetData.instant_invite}
          rel='noopener noreferrer'
          target='_blank'
          className={
            collapsed
              ? 'text-white text-2xl pb-1'
              : 'text-black dark:text-white'
          }>
          {collapsed ? 'Discord' : widgetData.name}
        </a>
      </div>
      {/* Conditional rendering based on collapsed state */}
      {!collapsed && (
        <div style={{ width: '100%', height: '450px', overflow: 'hidden' }}>
          <iframe
            src='https://discord.com/widget?id=456048230250184734&theme=light'
            width='100%'
            height='100%'
            allowTransparency='true'
            style={{ border: 'none' }}
            sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'></iframe>
        </div>
      )}
    </div>
  )
}

export default DiscordWidget
