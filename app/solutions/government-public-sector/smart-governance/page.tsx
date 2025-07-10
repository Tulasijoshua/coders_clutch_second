import Hereforyou from '@/components/home/hereforyou'
import SmartGovernanceApproah from '@/components/solutions/government-public-sector/smart-governance/smart-governance-approach'
import SmartGovernanceBenefits from '@/components/solutions/government-public-sector/smart-governance/smart-governance-benefits'
import SmartGovernanceChallenge from '@/components/solutions/government-public-sector/smart-governance/smart-governance-challenge'
import SmartGovernanceFaqs from '@/components/solutions/government-public-sector/smart-governance/smart-governance-faqs'
import SmartGovernanceFeatures from '@/components/solutions/government-public-sector/smart-governance/smart-governance-features'
import SmartGovernanceHero from '@/components/solutions/government-public-sector/smart-governance/smart-governance-hero'
import SmartGovernanceImpact from '@/components/solutions/government-public-sector/smart-governance/smart-governance-impacts'
import SmartGovernanceReadyBuild from '@/components/solutions/government-public-sector/smart-governance/smart-governance-ready-build'
import SmartGovernanceStacks from '@/components/solutions/government-public-sector/smart-governance/smart-governance-stacks'
import React from 'react'

function SmartGovernance() {
  return (
    <div>
        <SmartGovernanceHero />
        <SmartGovernanceChallenge />
        <SmartGovernanceApproah />
        <SmartGovernanceImpact />
        <SmartGovernanceFeatures />
        <SmartGovernanceBenefits />
        <SmartGovernanceReadyBuild />
        <SmartGovernanceStacks />
        <SmartGovernanceFaqs />
        <Hereforyou />
    </div>
  )
}

export default SmartGovernance