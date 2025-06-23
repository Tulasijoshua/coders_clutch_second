import AwardsRecognition from '@/components/home/awards-recognition'
import SaasHero from '@/components/solutions/custom-softwares/saa-product-dev/saa-hero'
import SaasDevExpertise from '@/components/solutions/custom-softwares/saa-product-dev/saas-dev-expertise'
import SaasEntireProduct from '@/components/solutions/custom-softwares/saa-product-dev/saas-entire-product'
import SaasFullCircle from '@/components/solutions/custom-softwares/saa-product-dev/saas-full-circle'
import SaasFullCycle2 from '@/components/solutions/custom-softwares/saa-product-dev/saas-full-cycle_2'
import SaasHereForEngineer from '@/components/solutions/custom-softwares/saa-product-dev/saas-here-for-engineer'
import SaasSuccessful from '@/components/solutions/custom-softwares/saa-product-dev/saas-successful'
import SaasTailoredSolution from '@/components/solutions/custom-softwares/saa-product-dev/saas-tailored-solution'
import SaasUnlockSavings from '@/components/solutions/custom-softwares/saa-product-dev/saas-unlock-savings'
import SaasWhyChoose from '@/components/solutions/custom-softwares/saa-product-dev/saas-why-choose'
import React from 'react'

function SaasProductDevelopment() {
  return (
    <div>
        <SaasHero />
        <SaasWhyChoose />
        <SaasEntireProduct />
        <SaasUnlockSavings />
        <SaasDevExpertise />
        <AwardsRecognition />
        {/* <SaasFullCircle /> */}
        <SaasFullCycle2 />
        <SaasTailoredSolution />
        <SaasSuccessful />
        <SaasHereForEngineer />
    </div>
  )
}

export default SaasProductDevelopment