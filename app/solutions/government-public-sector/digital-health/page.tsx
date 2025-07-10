import DigitalHealthApproach from '@/components/solutions/government-public-sector/digital-health/digital-health-approach'
import DigitalHealthBenefits from '@/components/solutions/government-public-sector/digital-health/digital-health-benefits'
import DigitalHealthBrands from '@/components/solutions/government-public-sector/digital-health/digital-health-brands'
import DigitalHealthChallenge from '@/components/solutions/government-public-sector/digital-health/digital-health-challenge'
import DigitalHealthCoreFeatures from '@/components/solutions/government-public-sector/digital-health/digital-health-core-features'
import DigitalHealthHero from '@/components/solutions/government-public-sector/digital-health/digital-health-hero'
import DigitalHealthImpact from '@/components/solutions/government-public-sector/digital-health/digital-health-impact'
import DigitalHealthStacks from '@/components/solutions/government-public-sector/digital-health/digital-health-stacks'
import DigitalHealthTransform from '@/components/solutions/government-public-sector/digital-health/digital-health-transform'
import React from 'react'

function DigitalHealthPage() {
  return (
    <div>
        <DigitalHealthHero />
        <DigitalHealthBrands />
        <DigitalHealthChallenge />
        <DigitalHealthApproach />
        <DigitalHealthImpact />
        <DigitalHealthCoreFeatures />
        <DigitalHealthTransform />
        <DigitalHealthBenefits />
        <DigitalHealthStacks />
    </div>
  )
}

export default DigitalHealthPage