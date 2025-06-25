import WebsiteCuttingEdge from '@/components/solutions/digital-solutions/website-design/website-cutting-edge'
import WebsiteFaqs from '@/components/solutions/digital-solutions/website-design/website-faqs'
import WebsiteFeatures from '@/components/solutions/digital-solutions/website-design/website-features'
import WebsiteFutureProof from '@/components/solutions/digital-solutions/website-design/website-future-proof'
import WebsiteDesignHero from '@/components/solutions/digital-solutions/website-design/website-hero'
import WebsiteOurAgent from '@/components/solutions/digital-solutions/website-design/website-our-agent'
import WebsiteServices from '@/components/solutions/digital-solutions/website-design/website-services'
import WebsiteSleekDesign from '@/components/solutions/digital-solutions/website-design/website-sleek-design'
import WebsiteTrust from '@/components/solutions/digital-solutions/website-design/website-trust'
import React from 'react'

function WebsiteDesignPage() {
  return (
    <div>
        <WebsiteDesignHero />
        <WebsiteCuttingEdge />
        <WebsiteFutureProof />
        <WebsiteOurAgent />
        <WebsiteSleekDesign />
        <WebsiteServices />
        <WebsiteTrust />
        <WebsiteFeatures />
        <WebsiteFaqs />
    </div>
  )
}

export default WebsiteDesignPage