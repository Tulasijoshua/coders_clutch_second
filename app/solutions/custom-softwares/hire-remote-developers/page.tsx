import AwardsRecognition from '@/components/home/awards-recognition'
import Hereforyou from '@/components/home/hereforyou'
import HireBuildRemote from '@/components/solutions/custom-softwares/hire-remote-developers/hire-build-remote'
import HireDedicatedDevelopers from '@/components/solutions/custom-softwares/hire-remote-developers/hire-dedicated-developers'
import HireFaqs from '@/components/solutions/custom-softwares/hire-remote-developers/hire-faqs'
import HireRemote from '@/components/solutions/custom-softwares/hire-remote-developers/hire-remote'
import HireRemoteHero from '@/components/solutions/custom-softwares/hire-remote-developers/hire-remote-hero'
import HireShapeDigital from '@/components/solutions/custom-softwares/hire-remote-developers/hire-shape-digital'
import HireTechCompetencies from '@/components/solutions/custom-softwares/hire-remote-developers/hire-tech-competencies'
import HireTestimonial from '@/components/solutions/custom-softwares/hire-remote-developers/hire-testimonial'
import React from 'react'

function HireRemoteDevelopers() {
  return (
    <div>
        <HireRemoteHero />
        <HireDedicatedDevelopers />
        <HireRemote />
        <HireTechCompetencies />
        <HireBuildRemote />
        <HireShapeDigital />
        <AwardsRecognition />
        <HireTestimonial />
        <HireFaqs />
        <Hereforyou />
    </div>
  )
}

export default HireRemoteDevelopers