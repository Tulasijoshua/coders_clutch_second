import AwardsRecognition from '@/components/home/awards-recognition'
import BuildSmart from '@/components/solutions/security-cloud/devops-services/build-smart'
import DevopsAsService from '@/components/solutions/security-cloud/devops-services/devops-as-service'
import DevopsBrands from '@/components/solutions/security-cloud/devops-services/devops-brands'
import DevopsDeveloper from '@/components/solutions/security-cloud/devops-services/devops-developer'
import DevopsHero from '@/components/solutions/security-cloud/devops-services/devops-hero'
import ExpertDriven from '@/components/solutions/security-cloud/devops-services/expert-driven'
import FlexibleHiring from '@/components/solutions/security-cloud/devops-services/flexible-hiring'
import FutureReady from '@/components/solutions/security-cloud/devops-services/future-ready'
import HereforDevops from '@/components/solutions/security-cloud/devops-services/herefordevops'
import LeadingCompanies from '@/components/solutions/security-cloud/devops-services/leading-companies'
import OperationStrategy from '@/components/solutions/security-cloud/devops-services/operation-strategy'
import ReadyInterview from '@/components/solutions/security-cloud/devops-services/ready-interview'
import SuccessfulBusinesses from '@/components/solutions/security-cloud/devops-services/successful-businesses'
import WhyChoose from '@/components/solutions/security-cloud/devops-services/why-choose'
import React from 'react'

function DevopsServicesPage() {
  return (
    <div>
        <DevopsHero />
        <DevopsBrands />
        <WhyChoose />
        <ExpertDriven />
        <FutureReady />
        <BuildSmart />
        <LeadingCompanies />
        <AwardsRecognition />
        {/* <LeverageEssential /> */}
        <OperationStrategy />
        <FlexibleHiring />
        <DevopsDeveloper />
        <ReadyInterview />
        <DevopsAsService />
        <SuccessfulBusinesses />
        <HereforDevops />
    </div>
  )
}

export default DevopsServicesPage