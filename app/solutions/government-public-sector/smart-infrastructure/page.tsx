import Hereforyou from '@/components/home/hereforyou'
import SmartInfrastructureApproach from '@/components/solutions/government-public-sector/smart-infrastructure/smart-infrastructure-approach'
import SmartInfrastructureBenefits from '@/components/solutions/government-public-sector/smart-infrastructure/smart-infrastructure-benefits'
import SmartInfrastructureBrands from '@/components/solutions/government-public-sector/smart-infrastructure/smart-infrastructure-brands'
import SmartInfrastructureChallenge from '@/components/solutions/government-public-sector/smart-infrastructure/smart-infrastructure-challenge'
import SmartInfrastructureFeatures from '@/components/solutions/government-public-sector/smart-infrastructure/smart-infrastructure-features'
import SmartInfrastructureHero from '@/components/solutions/government-public-sector/smart-infrastructure/smart-infrastructure-hero'
import SmartInfrastructureImpact from '@/components/solutions/government-public-sector/smart-infrastructure/smart-infrastructure-impact'
import SmartInfrastructureSustainable from '@/components/solutions/government-public-sector/smart-infrastructure/smart-infrastructure-sustainable'
import SmartInfrastructureStack from '@/components/solutions/government-public-sector/smart-infrastructure/smart-infratructure-stacks'
import React from 'react'

function SmartInfrastructure() {
  return (
    <div>
        <SmartInfrastructureHero />
        <SmartInfrastructureBrands />
        <SmartInfrastructureChallenge />
        <SmartInfrastructureApproach />
        <SmartInfrastructureImpact />
        <SmartInfrastructureFeatures />
        <SmartInfrastructureBenefits />
        <SmartInfrastructureSustainable />
        <SmartInfrastructureStack />
        <Hereforyou />
    </div>
  )
}

export default SmartInfrastructure