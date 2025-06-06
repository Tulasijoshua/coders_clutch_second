import Hereforyou from '@/components/home/hereforyou'
import BehindProcess from '@/components/solutions/digital-solutions/ui-ux-design/behind-process'
import BusinessOutcome from '@/components/solutions/digital-solutions/ui-ux-design/business-outcome'
import DesignGaps from '@/components/solutions/digital-solutions/ui-ux-design/design-gaps'
import DevelopmentServices from '@/components/solutions/digital-solutions/ui-ux-design/development_services'
import DrivenPurpose from '@/components/solutions/digital-solutions/ui-ux-design/driven-purpose'
import GreatExperience from '@/components/solutions/digital-solutions/ui-ux-design/great-experience'
import ModernDesignTouch from '@/components/solutions/digital-solutions/ui-ux-design/modern-design-touch'
import OurPeek from '@/components/solutions/digital-solutions/ui-ux-design/our-peek'
import SmartInterfaces from '@/components/solutions/digital-solutions/ui-ux-design/smart-interfaces'
import UiuxHero from '@/components/solutions/digital-solutions/ui-ux-design/uiux-hero'
import UpsidesCodersClutch from '@/components/solutions/digital-solutions/ui-ux-design/upsides-coders-clutch'
import React from 'react'

function UiuxDesignPage() {
  return (
    <div>
        <UiuxHero />
        <DrivenPurpose />
        <SmartInterfaces />
        <GreatExperience />
        <OurPeek />
        <BusinessOutcome />
        <BehindProcess />
        <DesignGaps />
        <UpsidesCodersClutch />
        <DevelopmentServices />
        <ModernDesignTouch />
        <Hereforyou />
    </div>
  )
}

export default UiuxDesignPage