import AwardsAccolades from '@/components/about/overview/awards-accolades'
import CeoSection from '@/components/about/overview/ceo'
import CodersClutchInsta from '@/components/about/overview/coders_clutch_insta'
import CoreValues from '@/components/about/overview/core-values'
import HighPerforming from '@/components/about/overview/high-performing'
import Lifeat from '@/components/about/overview/lifeat'
import Mission from '@/components/about/overview/mission'
import OverviewHero from '@/components/about/overview/overview-hero'
import PeakHistory from '@/components/about/overview/peak-history'
import ReshapeTrajectory from '@/components/about/overview/reshape-trajectory'
import TeamSection from '@/components/about/overview/team'
import Timeline from '@/components/about/overview/test'
import React from 'react'

function OverviewPage() {
  return (
    <div>
        <OverviewHero />
        <Mission />
        <CeoSection />
        <PeakHistory />
        <TeamSection />
        <CoreValues />
        <HighPerforming />
        <Lifeat />
        <AwardsAccolades />
        <CodersClutchInsta />
        <ReshapeTrajectory />
        {/* <Timeline /> */}
    </div>
  )
}

export default OverviewPage