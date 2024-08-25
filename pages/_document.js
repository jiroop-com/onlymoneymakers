// /pages/_document.js
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
        <Head>
          {/* Preload Font Awesome */}
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

          {/* Meta tags */}
          <meta name='yandex-verification' content='f9bc4558c3b54f76' />
          <meta name='verify-admitad' content='46e072558c' />

          {/* External Scripts */}

          <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8437419081527400'
            crossOrigin='anonymous'></script>
          <script async src='https://yandex.ru/ads/system/context.js'></script>
          <script
            async
            src='https://fundingchoicesmessages.google.com/i/pub-8437419081527400?ers=1'
            nonce='N5LV6_wS_cDM1awWc4pNhA'></script>
          <script src='https://cookiechimp.com/widget/gZvtpV.js'></script>

          {/* Inline Scripts */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.yaContextCb = window.yaContextCb || [];
                window.lemonSqueezyAffiliateConfig = { store: "jiroop-store" };
              `
            }}
          />
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
