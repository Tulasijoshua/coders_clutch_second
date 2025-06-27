import Hereforyou from '@/components/home/hereforyou'
import DigitalBrands from '@/components/solutions/digital-transformation/digital-main/digital-brands'
import LicensingHero from '@/components/solutions/licensing-renewal/licensing-hero'
import LicensingOutcome from '@/components/solutions/licensing-renewal/licensing-outcome'
import LicensingService from '@/components/solutions/licensing-renewal/licensing-services'
import LicensingTestimonials from '@/components/solutions/licensing-renewal/licensing-testimonials'
import WhyLicensingRenewals from '@/components/solutions/licensing-renewal/why-licensing-renewals'
import React from 'react'

function LicensingRenewalPage() {
  return (
    <div>
        <LicensingHero />
        {/* <DigitalBrands /> */}
        <LicensingService />
        <LicensingOutcome />
        <WhyLicensingRenewals />
        <LicensingTestimonials />
        <Hereforyou />
    </div>
  )
}

export default LicensingRenewalPage