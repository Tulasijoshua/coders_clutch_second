import Hereforyou from '@/components/home/hereforyou'
import PublicSafetyApproach from '@/components/solutions/government-public-sector/public-safety/public-safety-approach'
import PublicSafetyBenefits from '@/components/solutions/government-public-sector/public-safety/public-safety-benefits'
import PublicSafetyChallenges from '@/components/solutions/government-public-sector/public-safety/public-safety-challenges'
import PublicSafetyFeatures from '@/components/solutions/government-public-sector/public-safety/public-safety-features'
import PublicSafetyHero from '@/components/solutions/government-public-sector/public-safety/public-safety-hero'
import PublicSafetyImpact from '@/components/solutions/government-public-sector/public-safety/public-safety-impact'
import PublicSafetySmarter from '@/components/solutions/government-public-sector/public-safety/public-safety-smarter'
import PublicSafetyStacks from '@/components/solutions/government-public-sector/public-safety/public-safety-stacks'
import React from 'react'

function PublicSafety() {
  return (
    <div>
        <PublicSafetyHero />
        <PublicSafetyChallenges />
        <PublicSafetyApproach />
        <PublicSafetyImpact />
        <PublicSafetyFeatures />
        <PublicSafetyBenefits />
        <PublicSafetySmarter />
        <PublicSafetyStacks />
        <Hereforyou />
    </div>
  )
}

export default PublicSafety