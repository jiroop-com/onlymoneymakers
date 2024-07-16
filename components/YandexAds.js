import React, { useEffect } from 'react'
import { siteConfig } from '@/lib/config'

// Helper function to render Yandex ad
const renderYandexAd = (
  blockId,
  renderTo,
  adType = 'text',
  platform = 'desktop'
) => {
  if (window.yaContextCb) {
    window.yaContextCb.push(() => {
      window.Ya.Context.AdvManager.render({
        blockId,
        renderTo,
        type: adType,
        platform
      })
    })
  }
}

const YandexAds = ({ adType }) => {
  useEffect(() => {
    // Define ad block IDs and types based on the adType prop
    const adConfigs = {
      banner: {
        blockId: siteConfig('YANDEX_AD_BANNER'),
        renderTo: 'yandex_ad_banner'
      },
      floor: {
        blockId: siteConfig('YANDEX_AD_FLOOR'),
        renderTo: 'yandex_ad_floor',
        adType: 'floorAd'
      },
      fullscreen: {
        blockId: siteConfig('YANDEX_AD_FULLSCREEN'),
        renderTo: 'yandex_ad_fullscreen',
        adType: 'fullscreen'
      },
      feed: {
        blockId: siteConfig('YANDEX_AD_FEED'),
        renderTo: 'yandex_ad_feed',
        adType: 'feed'
      }
    }

    const {
      blockId,
      renderTo,
      adType: type,
      platform
    } = adConfigs[adType] || {}

    // Render the ad based on the adType
    if (blockId) {
      renderYandexAd(blockId, renderTo, type, platform)
    }

    // Clean up function (optional)
    return () => {
      // Perform any cleanup here if needed
    }
  }, [adType]) // Depend on adType prop to re-render ads when it changes

  // Render different divs for different ad types
  const adDivId =
    {
      banner: 'yandex_ad_banner',
      floor: 'yandex_ad_floor',
      fullscreen: 'yandex_ad_fullscreen',
      feed: 'yandex_ad_feed'
    }[adType] || ''

  return <div id={adDivId} />
}

export default YandexAds
