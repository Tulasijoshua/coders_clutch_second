import Hereforyou from '@/components/home/hereforyou'
import MvpClientFocused from '@/components/solutions/custom-softwares/mvp-development/mvp-client-focused'
import MvpCustomMade from '@/components/solutions/custom-softwares/mvp-development/mvp-custom-made'
import MvpCustomSoftware from '@/components/solutions/custom-softwares/mvp-development/mvp-custom-software'
import MvpFaqs from '@/components/solutions/custom-softwares/mvp-development/mvp-faqs'
import MvpHelpingIndustry from '@/components/solutions/custom-softwares/mvp-development/mvp-helping-industry'
import MvpHero from '@/components/solutions/custom-softwares/mvp-development/mvp-hero'
import MvpIdea from '@/components/solutions/custom-softwares/mvp-development/mvp-idea'
import MvpProven from '@/components/solutions/custom-softwares/mvp-development/mvp-proven'
import MvpSmartTech from '@/components/solutions/custom-softwares/mvp-development/mvp-smart-tech'
import MvpWhyWeAre from '@/components/solutions/custom-softwares/mvp-development/mvp-why-we are'
import React from 'react'

function MvpDevelopmentPage() {
  return (
    <div>
        <MvpHero />
        <MvpIdea />
        <MvpCustomSoftware />
        <MvpProven />
        <MvpClientFocused />
        <MvpSmartTech />
        <MvpWhyWeAre />
        <MvpCustomMade />
        <MvpHelpingIndustry />
        <MvpFaqs />
        <Hereforyou />
    </div>
  )
}

export default MvpDevelopmentPage