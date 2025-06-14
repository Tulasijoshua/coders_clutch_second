import Hereforyou from '@/components/home/hereforyou'
import AgentAutomatic from '@/components/solutions/custom-softwares/ai-agent/agent-automatic'
import AgentBrands from '@/components/solutions/custom-softwares/ai-agent/agent-brands'
import AgentDepartmentSpecific from '@/components/solutions/custom-softwares/ai-agent/agent-department-specific'
import AgentAiDeploy from '@/components/solutions/custom-softwares/ai-agent/agent-deploy-ai'
import AgentEnterpriseGrade from '@/components/solutions/custom-softwares/ai-agent/agent-enterprise-grade'
import AgentFaqs from '@/components/solutions/custom-softwares/ai-agent/agent-faqs'
import AgentHero from '@/components/solutions/custom-softwares/ai-agent/agent-hero'
import AgentNeedToBuild from '@/components/solutions/custom-softwares/ai-agent/agent-need-to-build'
import AgentOnboard from '@/components/solutions/custom-softwares/ai-agent/agent-onboard'
import AgentTrainTune from '@/components/solutions/custom-softwares/ai-agent/agent-train-tune'
import AgentWhyChoose from '@/components/solutions/custom-softwares/ai-agent/agent-why-choose'
import React from 'react'

function AiAgentDevelopment() {
  return (
    <div>
        <AgentHero />
        <AgentBrands />
        <AgentTrainTune />
        <AgentNeedToBuild />
        <AgentAutomatic />
        <AgentAiDeploy />
        <AgentEnterpriseGrade />
        <AgentOnboard />
        <AgentWhyChoose />
        <AgentDepartmentSpecific />
        <AgentFaqs />
        <Hereforyou />
    </div>
  )
}

export default AiAgentDevelopment