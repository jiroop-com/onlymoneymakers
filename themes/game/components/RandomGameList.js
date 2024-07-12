/* eslint-disable @next/next/no-img-element */
import { AdSlot } from '@/components/GoogleAdsense'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { deepClone } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'
import CONFIG from '../config'

/**
 * Utility function to shuffle an array
 * @param {Array} array
 * @returns {Array}
 */
const shuffleArray = array => {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}

/**
 * 游戏列表
 * @returns
 */
export const RandomGameList = ({ posts, displayCount = 15 }) => {
  const gamesClone = deepClone(posts)
  const shuffledGames = shuffleArray(gamesClone)
  const gamesToDisplay = shuffledGames.slice(0, displayCount)

  const components = []

  // 根据序号随机大小;或根据game.recommend 决定
  const recommend = siteConfig('GAME_INDEX_EXPAND_RECOMMEND', true, CONFIG)

  let index = 0
  let groupItems = []

  while (gamesToDisplay.length > 0) {
    index++

    if (index % 9 === 0) {
      components.push(<GameAd key={index} />)
      continue
    }

    while (gamesToDisplay.length > 0 && groupItems.length < 4) {
      const item = gamesToDisplay.shift()
      index++
      if (
        item.tags?.some(
          t => t === siteConfig('GAME_RECOMMEND_TAG', 'Recommend', CONFIG)
        )
      ) {
        components.push(<GameItem key={index} item={item} isLargeCard={true} />)
        continue
      } else {
        groupItems.push(item)
      }
    }

    if (groupItems.length === 4) {
      components.push(<GameItemGroup key={index} items={groupItems} />)
      groupItems = []
    } else {
      while (groupItems.length > 0) {
        const item = groupItems.shift()
        index++
        components.push(
          <GameItem key={index++} item={item} isLargeCard={true} />
        )
      }
    }
  }

  return (
    <div className='game-list-wrapper flex justify-center w-full'>
      <div className='game-grid mx-auto w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-2 md:p-0'>
        {components.map((ItemComponent, index) => {
          return ItemComponent
        })}
      </div>
    </div>
  )
}

/**
 * 一个广告游戏大卡
 * @returns
 */
const GameAd = () => {
  return (
    <div className='card-group relative rounded-lg game-ad h-80 w-full overflow-hidden'>
      <AdSlot type='flow' />
      <div className='absolute left-0 right-0 w-full h-full flex flex-col justify-center items-center bg-white'>
        <p className='text-2xl'>{siteConfig('TITLE')}</p>
        <p>{siteConfig('DESCRIPTION')}</p>
      </div>
    </div>
  )
}

/**
 * 大卡由2行2列小卡构成
 * @param {*} param0
 * @returns
 */
const GameItemGroup = ({ items }) => {
  return (
    <div className='card-group h-80 w-full grid grid-cols-2 grid-rows-2 gap-3'>
      {items.map((item, index) => (
        <GameItem key={index} item={item} />
      ))}
    </div>
  )
}

/**
 * 游戏=单卡
 * @param {*} param0
 * @returns
 */
const GameItem = ({ item, isLargeCard }) => {
  const { title } = item
  const img = item.pageCoverThumbnail
  const [showType, setShowType] = useState('img')

  const video = item?.ext?.video
  return (
    <Link
      title={title}
      href={`${item?.href}`}
      className={`card-single ${isLargeCard ? 'h-80 ' : 'h-full text-xs'} w-full transition-all duration-200 shadow-md md:hover:scale-105 md:hover:shadow-lg relative rounded-lg overflow-hidden flex justify-center items-center
      group hover:border-purple-400`}
      onMouseOver={() => {
        setShowType('video')
      }}
      onMouseOut={() => {
        setShowType('img')
      }}>
      <div className='text-center absolute bottom-0 invisible group-hover:bottom-2 group-hover:visible transition-all duration-200 text-white z-30'>
        {title}
      </div>

      <div className='h-2/3 w-full absolute left-0 bottom-0 z-20 opacity-0 group-hover:opacity-75 transition-all duration-200'>
        <div className='h-full w-full absolute bg-gradient-to-b from-transparent to-black'></div>
      </div>

      {showType === 'video' && (
        <video
          className={`z-10 object-cover w-full ${isLargeCard ? 'h-80' : 'h-full'} absolute overflow-hidden`}
          loop='true'
          autoPlay
          preload='none'>
          <source src={video} type='video/mp4' />
        </video>
      )}
      <LazyImage
        className='w-full h-full absolute object-cover group-hover:scale-105 duration-100 transition-all'
        src={img}
        priority
        alt={title}
        fill='full'
      />
    </Link>
  )
}
