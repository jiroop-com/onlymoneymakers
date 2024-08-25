import { siteConfig } from '@/lib/config'
import { loadExternalResource } from '@/lib/utils'
import { useEffect, useRef } from 'react'

/**
 * 请求广告元素
 * 调用后，实际只有当广告单元在页面中可见时才会真正获取
 */
function requestAd(ads) {
  if (!ads || ads.length === 0) return

  const adsbygoogle = window.adsbygoogle
  if (adsbygoogle) {
    const observerOptions = {
      root: null, // use the viewport as the root
      threshold: 0.5 // element is considered visible when 50% visible
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const adStatus = entry.target.getAttribute('data-adsbygoogle-status')
          if (!adStatus || adStatus !== 'done') {
            adsbygoogle.push(entry.target)
            observer.unobserve(entry.target) // stop observing once ad is loaded
          }
        }
      })
    }, observerOptions)

    ads.forEach(ad => observer.observe(ad))
  }
}

function getNodesWithAdsByGoogleClass(node) {
  // Use querySelectorAll to find all nodes with 'adsbygoogle' class within the given node
  return Array.from(node.querySelectorAll('.adsbygoogle'))
}

/**
 * Initializes Google Adsense
 * @param {string} ADSENSE_GOOGLE_ID
 */
export const initGoogleAdsense = async ADSENSE_GOOGLE_ID => {
  try {
    console.log('Load Adsense')
    await loadExternalResource(
      `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_GOOGLE_ID}`,
      'js'
    )

    setTimeout(() => {
      const ads = document.getElementsByClassName('adsbygoogle')
      if (window.adsbygoogle && ads.length > 0) {
        requestAd(Array.from(ads))
      }

      // Observe DOM changes to load ads for dynamically added elements
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const adsNodes = getNodesWithAdsByGoogleClass(node)
              if (adsNodes.length > 0) {
                requestAd(adsNodes)
              }
            }
          })
        })
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true
      })
    }, 100)
  } catch (error) {
    console.error('Failed to load Adsense:', error)
  }
}

/**
 * 文章内嵌广告单元
 * 请在GoogleAdsense后台配置创建对应广告，并且获取相应代码
 * 修改下面广告单元中的 data-ad-slot data-ad-format data-ad-layout-key(如果有)
 * 添加 可以在本地调试
 */
const AdSlot = ({ type = 'show' }) => {
  const ADSENSE_GOOGLE_ID = siteConfig('ADSENSE_GOOGLE_ID')
  const ADSENSE_GOOGLE_TEST = siteConfig('ADSENSE_GOOGLE_TEST')
  const adRef = useRef(null)

  useEffect(() => {
    if (adRef.current) {
      const adElement = adRef.current

      const handleAdLoad = () => {
        // Check if the ad element is still empty after load
        const adStatus = adElement.getAttribute('data-adsbygoogle-status')
        if (adStatus !== 'done') {
          // If ad is not loaded, hide the ad element or show a placeholder
          adElement.style.display = 'none'
          // Optionally, you can insert a placeholder or fallback content here
          console.log('Ad failed to load, hiding the element.')
        }
      }

      // Attach the load event listener to the ad element
      adElement.addEventListener('load', handleAdLoad)

      // Clean up the event listener on component unmount
      return () => {
        adElement.removeEventListener('load', handleAdLoad)
      }
    }
  }, [])

  if (!ADSENSE_GOOGLE_ID) {
    return null
  }

  const adProps = {
    className: 'adsbygoogle',
    'data-adtest': ADSENSE_GOOGLE_TEST ? 'on' : 'off',
    'data-ad-client': ADSENSE_GOOGLE_ID,
    ref: adRef // Assign the ref to the <ins> element
  }

  if (type === 'in-article') {
    return (
      <ins
        {...adProps}
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout='in-article'
        data-ad-format='fluid'
        data-ad-slot={siteConfig('ADSENSE_GOOGLE_SLOT_IN_ARTICLE')}></ins>
    )
  }

  if (type === 'flow') {
    return (
      <ins
        {...adProps}
        style={{ display: 'block' }}
        data-ad-format='fluid'
        data-ad-layout-key='-5j+cz+30-f7+bf'
        data-ad-slot={siteConfig('ADSENSE_GOOGLE_SLOT_FLOW')}></ins>
    )
  }

  if (type === 'native') {
    return (
      <ins
        {...adProps}
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-format='autorelaxed'
        data-ad-slot={siteConfig('ADSENSE_GOOGLE_SLOT_NATIVE')}></ins>
    )
  }

  // Default: Display Ad
  return (
    <ins
      {...adProps}
      style={{ display: 'block' }}
      data-ad-slot={siteConfig('ADSENSE_GOOGLE_SLOT_AUTO')}
      data-ad-format='auto'
      data-full-width-responsive='true'></ins>
  )
}

/**
 * 嵌入到文章内部的广告单元
 * 检测文本内容 出现<ins/> 关键词时自动替换为广告
 * @param {*} props
 */
const AdEmbed = () => {
  useEffect(() => {
    const convertInsElements = () => {
      // 找到所有 class 为 notion-text 且内容为 '<ins/>' 的 div 元素
      const notionTextElements = document.querySelectorAll('div.notion-text')

      // 遍历找到的元素
      notionTextElements?.forEach(element => {
        // 检查元素的内容是否为 '<ins/>'
        if (element.innerHTML.trim() === '&lt;ins/&gt;') {
          // 创建新的 <ins> 元素
          const newInsElement = document.createElement('ins')
          newInsElement.className = 'adsbygoogle w-full py-1'
          newInsElement.style.display = 'block'
          newInsElement.setAttribute(
            'data-ad-client',
            siteConfig('ADSENSE_GOOGLE_ID')
          )
          newInsElement.setAttribute(
            'data-adtest',
            siteConfig('ADSENSE_GOOGLE_TEST') ? 'on' : 'off'
          )
          newInsElement.setAttribute(
            'data-ad-slot',
            siteConfig('ADSENSE_GOOGLE_SLOT_AUTO')
          )
          newInsElement.setAttribute('data-ad-format', 'auto')
          newInsElement.setAttribute('data-full-width-responsive', 'true')

          // 用新创建的 <ins> 元素替换掉原来的 div 元素
          element?.parentNode?.replaceChild(newInsElement, element)
        }
      })

      requestAd() // Initialize the ad
    }

    const observer = new MutationObserver(() => {
      convertInsElements()
    })

    // Observe changes in the body or specific element that wraps the content
    const targetNode = document.querySelector('#notion-article')
    if (targetNode) {
      observer.observe(targetNode, { childList: true, subtree: true })
    }

    // Convert immediately on load
    convertInsElements()

    // Clean up observer on unmount
    return () => observer.disconnect()
  }, [])

  return null
}

export { AdEmbed, AdSlot }
