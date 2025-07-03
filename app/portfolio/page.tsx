import Hereforyou from '@/components/home/hereforyou'
import PortfolioHero from '@/components/portfolio/portfolio-hero'
import PortfolioMain from '@/components/portfolio/portfolio-main'
import React from 'react'

function PortfolioPage() {
  return (
    <div>
        <PortfolioHero />
        <PortfolioMain />
        <Hereforyou />
    </div>
  )
}

export default PortfolioPage