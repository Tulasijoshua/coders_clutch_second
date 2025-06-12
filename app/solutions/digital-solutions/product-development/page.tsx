import AwardsRecognition from '@/components/home/awards-recognition'
import Hereforyou from '@/components/home/hereforyou'
import DigitalProducts from '@/components/solutions/digital-solutions/product-development/digital-products'
import ProductBrands from '@/components/solutions/digital-solutions/product-development/product-brands'
import ProductFaqs from '@/components/solutions/digital-solutions/product-development/product-faqs'
import ProductHero from '@/components/solutions/digital-solutions/product-development/product-hero'
import ProductServices from '@/components/solutions/digital-solutions/product-development/product-services'
import ProductStepsEngage from '@/components/solutions/digital-solutions/product-development/product-steps-engage'
import ProductSuccessStories from '@/components/solutions/digital-solutions/product-development/product-success-stories'
import ProductTechExpertise from '@/components/solutions/digital-solutions/product-development/product-tech-expertise'
import ProductTestimonials from '@/components/solutions/digital-solutions/product-development/product-testimonials'
import ProductWeServe from '@/components/solutions/digital-solutions/product-development/product-we-serve'
import ProductWhyChoose from '@/components/solutions/digital-solutions/product-development/product-why-choose'
import React from 'react'

function ProductDevelopment() {
  return (
    <div>
        <ProductHero />
        <ProductBrands />
        <ProductServices />
        <ProductStepsEngage />
        <ProductWhyChoose />
        <DigitalProducts />
        <ProductTechExpertise />
        <AwardsRecognition />
        <ProductSuccessStories />
        <ProductWeServe />
        <ProductTestimonials />
        <ProductFaqs />
        <Hereforyou />
    </div>
  )
}

export default ProductDevelopment