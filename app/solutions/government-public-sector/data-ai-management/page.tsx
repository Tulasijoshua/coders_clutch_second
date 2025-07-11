import Hereforyou from '@/components/home/hereforyou'
import DataManagementActivate from '@/components/solutions/data-ai-management/data-management-activate'
import DataManagementBenefits from '@/components/solutions/data-ai-management/data-management-benefits'
import DataManagementBrands from '@/components/solutions/data-ai-management/data-management-brands'
import DataManagementChallenges from '@/components/solutions/data-ai-management/data-management-challenges'
import DataManagementFeatures from '@/components/solutions/data-ai-management/data-management-features'
import DataManagementHero from '@/components/solutions/data-ai-management/data-management-hero'
import DataManagementImpact from '@/components/solutions/data-ai-management/data-management-impact'
import DataManagementProcess from '@/components/solutions/data-ai-management/data-management-process'
import DataManagementStacks from '@/components/solutions/data-ai-management/data-management-stacks'
import React from 'react'

function DataAiManagement() {
  return (
    <div>
        <DataManagementHero />
        <DataManagementBrands />
        <DataManagementChallenges />
        <DataManagementProcess />
        <DataManagementImpact />
        <DataManagementFeatures />
        <DataManagementBenefits />
        <DataManagementActivate />
        <DataManagementStacks />
        <Hereforyou />
    </div>
  )
}

export default DataAiManagement