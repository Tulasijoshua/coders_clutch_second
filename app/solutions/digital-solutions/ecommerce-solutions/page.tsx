import EcommerceFaqs from '@/components/solutions/digital-solutions/ecommerce-solution/ecommerce-faqs'
import EcommerceHero from '@/components/solutions/digital-solutions/ecommerce-solution/ecommerce-hero'
import EcommerceProjects from '@/components/solutions/digital-solutions/ecommerce-solution/ecommerce-projects'
import EcommerceResponsive from '@/components/solutions/digital-solutions/ecommerce-solution/ecommerce-responsive'
import EcommerceServices from '@/components/solutions/digital-solutions/ecommerce-solution/ecommerce-services'
import EcommerceToExpect from '@/components/solutions/digital-solutions/ecommerce-solution/ecommerce-to-expect'
import EcommerceWhyChoose from '@/components/solutions/digital-solutions/ecommerce-solution/ecommerce-why-choose'
import WebsiteTrust from '@/components/solutions/digital-solutions/website-design/website-trust'
import React from 'react'

function EcommerceSolutionPage() {
  return (
    <div>
        <EcommerceHero />
        <EcommerceServices />
        <EcommerceProjects />
        <EcommerceToExpect />
        <EcommerceWhyChoose />
        <WebsiteTrust />
        <EcommerceResponsive />
        <EcommerceFaqs />
    </div>
  )
}

export default EcommerceSolutionPage