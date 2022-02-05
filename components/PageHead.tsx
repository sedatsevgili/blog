import Head from 'next/head'
import * as React from 'react'
import * as types from 'lib/types'

// TODO: remove duplication between PageHead and NotionPage Head

export const PageHead: React.FC<types.PageProps> = ({ site }) => {
  return (
    <Head>
      <script dangerouslySetInnerHTML={{__html:'!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="ypKic4uwGezHOdwqbaNFGGkcHoWmqIRV";;analytics.SNIPPET_VERSION="4.15.3";analytics.load("ypKic4uwGezHOdwqbaNFGGkcHoWmqIRV");analytics.page();}}();'}}></script>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      {site?.description && (
        <>
          <meta name='description' content={site.description} />
          <meta property='og:description' content={site.description} />
        </>
      )}

      <meta name='theme-color' content='#EB625A' />
      <meta property='og:type' content='website' />
    </Head>
  )
}
