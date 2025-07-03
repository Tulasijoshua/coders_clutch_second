import ForensicsDig from '@/components/solutions/security-cloud/digital-forensics/forensics-dig'
import ForensicsEvidence from '@/components/solutions/security-cloud/digital-forensics/forensics-evidence'
import ForensicsHero from '@/components/solutions/security-cloud/digital-forensics/forensics-hero'
import ForensicsInstitutions from '@/components/solutions/security-cloud/digital-forensics/forensics-institutions'
import ForensicsServices from '@/components/solutions/security-cloud/digital-forensics/forensics-services'
import ForensicsSpecialist from '@/components/solutions/security-cloud/digital-forensics/forensics-specialist'
import React from 'react'

function DigitalForensics() {
  return (
    <div>
        <ForensicsHero />
        <ForensicsEvidence />
        <ForensicsServices />
        <ForensicsInstitutions />
        <ForensicsDig />
        <ForensicsSpecialist />
    </div>
  )
}

export default DigitalForensics