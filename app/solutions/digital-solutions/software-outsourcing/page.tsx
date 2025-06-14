import AwardsRecognition from '@/components/home/awards-recognition'
import Hereforyou from '@/components/home/hereforyou'
import OutsourceAllInOne from '@/components/solutions/digital-solutions/software-outsourcing/outsource-all-in-one'
import OutsourceFaqs from '@/components/solutions/digital-solutions/software-outsourcing/outsource-faqs'
import OutsourceOurClient from '@/components/solutions/digital-solutions/software-outsourcing/outsource-our-clients'
import OutsourceTechExpertise from '@/components/solutions/digital-solutions/software-outsourcing/outsource-tech-expertise'
import OutsourcingHero from '@/components/solutions/digital-solutions/software-outsourcing/outsourcing-hero'
import OutsourcingWhyChoose from '@/components/solutions/digital-solutions/software-outsourcing/outsourcing-why-choose'
import ScaleProject from '@/components/solutions/digital-solutions/software-outsourcing/scale-project'
import React from 'react'

function SoftwareOutsourcing() {
  return (
    <div>
        <OutsourcingHero />
        <OutsourcingWhyChoose />
        <OutsourceAllInOne />
        <OutsourceTechExpertise />
        <ScaleProject />
        <AwardsRecognition />
        <OutsourceOurClient />
        <OutsourceFaqs />
        <Hereforyou />
    </div>
  )
}

export default SoftwareOutsourcing