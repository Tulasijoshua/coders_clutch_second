import AwardsRecognition from '@/components/home/awards-recognition'
import Hereforyou from '@/components/home/hereforyou'
import FlexibleEngagement from '@/components/solutions/digital-solutions/fullstack-dev/flexible-engagement'
import FullstackBrand from '@/components/solutions/digital-solutions/fullstack-dev/fullstack-brands'
import FullstackEndtoEnd from '@/components/solutions/digital-solutions/fullstack-dev/fullstack-end-to-end'
import FullstackExpertise from '@/components/solutions/digital-solutions/fullstack-dev/fullstack-expertise'
import FullstackFaq from '@/components/solutions/digital-solutions/fullstack-dev/fullstack-faq'
import FullStackHero from '@/components/solutions/digital-solutions/fullstack-dev/fullstack-hero'
import FullstackMillionSay from '@/components/solutions/digital-solutions/fullstack-dev/fullstack-million-say'
import FullstackOnboard from '@/components/solutions/digital-solutions/fullstack-dev/fullstack-onboard'
import FullstackPreVetted from '@/components/solutions/digital-solutions/fullstack-dev/fullstack-pre-vetted'
import FullstackSpecialize from '@/components/solutions/digital-solutions/fullstack-dev/fullstact-specialized'
import WhyChooseFullstack from '@/components/solutions/digital-solutions/fullstack-dev/why-choose-fullstack'
import React from 'react'

function FullStackDevelopment() {
  return (
    <div>
        <FullStackHero />
        <FullstackBrand />
        <WhyChooseFullstack />
        <FullstackEndtoEnd />
        <FullstackPreVetted />
        <FlexibleEngagement />
        <FullstackSpecialize />
        <FullstackOnboard />
        <AwardsRecognition />
        <FullstackExpertise />
        <FullstackMillionSay />
        <FullstackFaq />
        <Hereforyou />
    </div>
  )
}

export default FullStackDevelopment