// eslint-disable-next-line @next/next/no-document-import-in-page
import BLOG from '@/blog.config'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={BLOG.LANG}>
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8437419081527400'
          crossorigin='anonymous'></script>
        <meta name='yandex-verification' content='622aa0408012f881' />
        <script src='https://yandex.ru/ads/system/context.js' async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.yaContextCb = window.yaContextCb || [];
            window.lemonSqueezyAffiliateConfig = { store: "jiroop-store" };
          `
          }}
        />
        <script src='https://lmsqueezy.com/affiliate.js' defer></script>
        <script src='https://gumroad.com/js/gumroad.js'></script>
<<<<<<< HEAD
        
=======
        <script
          async
          src='https://fundingchoicesmessages.google.com/i/pub-8437419081527400?ers=1'
          nonce='N5LV6_wS_cDM1awWc4pNhA'></script>
        <script
          nonce='N5LV6_wS_cDM1awWc4pNhA'
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              function signalGooglefcPresent() {
                if (!window.frames['googlefcPresent']) {
                  if (document.body) {
                    const iframe = document.createElement('iframe');
                    iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
                    iframe.style.display = 'none';
                    iframe.name = 'googlefcPresent';
                    document.body.appendChild(iframe);
                  } else {
                    setTimeout(signalGooglefcPresent, 0);
                  }
                }
              }
              signalGooglefcPresent();
            })();
          `
          }}
        />
>>>>>>> main

        <Head>
          {/* 预加载字体 */}

          {BLOG.FONT_AWESOME && (
            <>
              <link
                rel='preload'
                href={BLOG.FONT_AWESOME}
                as='style'
                crossOrigin='anonymous'
              />
              <link
                rel='stylesheet'
                href={BLOG.FONT_AWESOME}
                crossOrigin='anonymous'
                referrerPolicy='no-referrer'
              />
            </>
          )}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
