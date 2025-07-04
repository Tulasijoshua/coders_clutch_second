import Hereforyou from '@/components/home/hereforyou'
import PortfolioHero2 from '@/components/portfolio/portfolio-hero2'
import SuccessStory from '@/components/portfolio/success-story'
import React from 'react'

function PortfolioPage() {
  return (
    <div>
        {/* <PortfolioHero /> */}
        <PortfolioHero2 />
        {/* <CaseStudies /> */}
        {/* <PortfolioMain /> */}
        <SuccessStory />
        <Hereforyou />
    </div>
  )
}

export default PortfolioPage