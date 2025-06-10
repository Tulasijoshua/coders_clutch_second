import AwardsRecognition from '@/components/home/awards-recognition'
import Hereforyou from '@/components/home/hereforyou'
import CaseStudyHistory from '@/components/solutions/digital-transformation/digital-main/case-study-history'
import CompleteDigitalSolutions from '@/components/solutions/digital-transformation/digital-main/complete-digital-solutions'
import DigitalBrands from '@/components/solutions/digital-transformation/digital-main/digital-brands'
import DigitalFaq from '@/components/solutions/digital-transformation/digital-main/digital-faq'
import DigitalHero from '@/components/solutions/digital-transformation/digital-main/digital-hero'
import DigitalProcess from '@/components/solutions/digital-transformation/digital-main/digital-process'
import DigitalServices from '@/components/solutions/digital-transformation/digital-main/digital-services'
import IndustrySpecific from '@/components/solutions/digital-transformation/digital-main/industry-specific'
import OurGrowth from '@/components/solutions/digital-transformation/digital-main/our-growth'
import ReadyUpgrade from '@/components/solutions/digital-transformation/digital-main/ready-upgrade'
import TechStack from '@/components/solutions/digital-transformation/digital-main/tech-stack'
import WhyChooseDigital from '@/components/solutions/digital-transformation/digital-main/why-choolse-digital'
import React from 'react'

function DigitalTransformationMain() {
  return (
    <div>
        <DigitalHero />
        <DigitalBrands />
        <OurGrowth />
        <DigitalServices />
        <CompleteDigitalSolutions />
        <CaseStudyHistory />
        <ReadyUpgrade />
        <DigitalProcess />
        <TechStack />
        <WhyChooseDigital />
        <AwardsRecognition />
        <IndustrySpecific />
        <DigitalFaq />
        <Hereforyou />
    </div>
  )
}

export default DigitalTransformationMain