import Hereforyou from '@/components/home/hereforyou'
import ManagedItBrands from '@/components/solutions/managed-it-services/managed-it-brands'
import ManagedItHero from '@/components/solutions/managed-it-services/managed-it-hero'
import ManagedItOutcome from '@/components/solutions/managed-it-services/managed-it-outcome'
import ManagedItTestimonial from '@/components/solutions/managed-it-services/managed-it-testimonial'
import ManagedServices from '@/components/solutions/managed-it-services/managed-services'
import WhyManagedServices from '@/components/solutions/managed-it-services/why-managed-services'
import React from 'react'

function ManagedItServices() {
  return (
    <div>
        <ManagedItHero />
        <ManagedItBrands />
        <ManagedServices />
        <ManagedItOutcome />
        <WhyManagedServices />
        <ManagedItTestimonial />
        <Hereforyou />
    </div>
  )
}

export default ManagedItServices