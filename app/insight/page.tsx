import CareerAreas from '@/components/insight/career/career-areas'
import CareerHero from '@/components/insight/career/career-hero'
import EmployeeBenefits from '@/components/insight/career/employee_benefits'
import HiringProcess from '@/components/insight/career/hiring-process'
import Lifatcoders from '@/components/insight/career/lifeatcoders'
import ValuesSection from '@/components/insight/career/values'
import Brands from '@/components/reusable/brands'
import React from 'react'

function InsightPage() {
  return (
    <div>
        <CareerHero />
        <Brands />
        <ValuesSection />
        <Lifatcoders />
        <EmployeeBenefits />
        <HiringProcess />
        <CareerAreas />
    </div>
  )
}

export default InsightPage