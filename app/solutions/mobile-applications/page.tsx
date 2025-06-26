import WebsiteTrust from '@/components/solutions/digital-solutions/website-design/website-trust'
import MobileAppSpecification from '@/components/solutions/mobile-applications/mobile-apps/mobile-apps-specification'
import MobileAppsTypes from '@/components/solutions/mobile-applications/mobile-apps/mobile-apps-types'
import MobileDevelopmentAreas from '@/components/solutions/mobile-applications/mobile-apps/mobile-development-areas'
import MobileHero from '@/components/solutions/mobile-applications/mobile-apps/mobile-hero'
import MobileOurProcess from '@/components/solutions/mobile-applications/mobile-apps/mobile-our-process'
import MobileStartNow from '@/components/solutions/mobile-applications/mobile-apps/mobile-start-now'
import React from 'react'

function MobileApplicationsPage() {
  return (
    <div>
        <MobileHero />
        <MobileAppSpecification />
        <MobileDevelopmentAreas />
        <MobileAppsTypes />
        <MobileOurProcess />
        <MobileStartNow />
        <WebsiteTrust />
    </div>
  )
}

export default MobileApplicationsPage