import BoardManagementMain from '@/components/about/board-management/board-management-main'
import BoardTeam from '@/components/about/board-management/board-team'
import TeamHero from '@/components/about/board-management/team-hero'
import WebsiteTrust from '@/components/solutions/digital-solutions/website-design/website-trust'
import React from 'react'

function BoardManagementPage() {
  return (
    <div>
        <TeamHero />
        <BoardManagementMain />
        <WebsiteTrust />
    </div>
  )
}

export default BoardManagementPage