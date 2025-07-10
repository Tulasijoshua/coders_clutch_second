import Hereforyou from '@/components/home/hereforyou'
import EnvironmentalBenefits from '@/components/solutions/government-public-sector/environmental-sustainability/environmental-benefits'
import EnvironmentalBrands from '@/components/solutions/government-public-sector/environmental-sustainability/environmental-brands'
import EnvironmentalChallenges from '@/components/solutions/government-public-sector/environmental-sustainability/environmental-challenges'
import EnvironmentalDevProcess from '@/components/solutions/government-public-sector/environmental-sustainability/environmental-dev-process'
import EnvironmentalFeatures from '@/components/solutions/government-public-sector/environmental-sustainability/environmental-features'
import EnvironmentalHero from '@/components/solutions/government-public-sector/environmental-sustainability/environmental-hero'
import EnvironmentalImpact from '@/components/solutions/government-public-sector/environmental-sustainability/environmental-impact'
import EnvironmentalReadyBuild from '@/components/solutions/government-public-sector/environmental-sustainability/environmental-ready-build'
import EnvironmentalStacks from '@/components/solutions/government-public-sector/environmental-sustainability/environmental-stacks'
import React from 'react'

function EnvironmentalSustainability() {
  return (
    <div>
        <EnvironmentalHero />
        <EnvironmentalBrands />
        <EnvironmentalChallenges />
        <EnvironmentalDevProcess />
        <EnvironmentalImpact />
        <EnvironmentalFeatures />
        <EnvironmentalBenefits />
        <EnvironmentalReadyBuild />
        <EnvironmentalStacks />
        <Hereforyou />
    </div>
  )
}

export default EnvironmentalSustainability