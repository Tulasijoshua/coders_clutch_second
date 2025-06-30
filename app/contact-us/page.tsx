import ContactHero from '@/components/contact-us/contact-hero'
import ContactIntouch from '@/components/contact-us/contact-intouch'
import ContactMain from '@/components/contact-us/contact-main'
import JoinCommunity from '@/components/contact-us/join-community'
import SalesTeam from '@/components/contact-us/sales-team'
import React from 'react'

function ContactUsPage() {
  return (
    <div>
        <ContactHero />
        <ContactIntouch />
        <SalesTeam />
        <ContactMain />
        <JoinCommunity />
    </div>
  )
}

export default ContactUsPage