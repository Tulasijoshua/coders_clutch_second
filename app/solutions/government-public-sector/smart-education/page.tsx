import Hereforyou from '@/components/home/hereforyou'
import SmartEducationApproach from '@/components/solutions/government-public-sector/smart-education/smart-education-approach'
import SmartEducationBenefits from '@/components/solutions/government-public-sector/smart-education/smart-education-benefits'
import SmartEducationBrands from '@/components/solutions/government-public-sector/smart-education/smart-education-brands'
import SmartEducationChallenges from '@/components/solutions/government-public-sector/smart-education/smart-education-challenges'
import SmartEducationFeatures from '@/components/solutions/government-public-sector/smart-education/smart-education-features'
import SmartEducationHero from '@/components/solutions/government-public-sector/smart-education/smart-education-hero'
import SmartEducationImpact from '@/components/solutions/government-public-sector/smart-education/smart-education-impact'
import SmartEducationStacks from '@/components/solutions/government-public-sector/smart-education/smart-education-stacks'
import SmartEducationTransform from '@/components/solutions/government-public-sector/smart-education/smart-education-transform'
import React from 'react'

function SmartEducation() {
  return (
    <div>
        <SmartEducationHero />
        <SmartEducationBrands />
        <SmartEducationChallenges />
        <SmartEducationApproach />
        <SmartEducationImpact />
        <SmartEducationFeatures />
        <SmartEducationBenefits />
        <SmartEducationTransform />
        <SmartEducationStacks />
        <Hereforyou />
    </div>
  )
}

export default SmartEducation