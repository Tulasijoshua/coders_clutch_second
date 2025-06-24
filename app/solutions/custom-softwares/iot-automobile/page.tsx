import IotAutomateFleet from '@/components/solutions/custom-softwares/iot-automobile/iot-automate-fleet'
import IotAutomobileHero from '@/components/solutions/custom-softwares/iot-automobile/iot-automobile-hero'
import IotBuildPlatform from '@/components/solutions/custom-softwares/iot-automobile/iot-build-platform'
import IotConnectedVehicle from '@/components/solutions/custom-softwares/iot-automobile/iot-connected-vehicle'
import IotDeliverPersonalized from '@/components/solutions/custom-softwares/iot-automobile/iot-deliver-personalized'
import IotEmbraceFuture from '@/components/solutions/custom-softwares/iot-automobile/iot-embrace-future'
import IotExtendRange from '@/components/solutions/custom-softwares/iot-automobile/iot-extend-range'
import IotFaqs from '@/components/solutions/custom-softwares/iot-automobile/iot-faqs'
import IotHolisticSolution from '@/components/solutions/custom-softwares/iot-automobile/iot-holistic-solution'
import IotOneGrand from '@/components/solutions/custom-softwares/iot-automobile/iot-one-grand'
import IotSuccessful from '@/components/solutions/custom-softwares/iot-automobile/iot-successful'
import React from 'react'

function IotAutomobilePage() {
  return (
    <div>
        <IotAutomobileHero />
        <IotEmbraceFuture />
        <IotDeliverPersonalized />
        <IotHolisticSolution />
        <IotExtendRange />
        <IotBuildPlatform />
        <IotAutomateFleet />
        <IotOneGrand />
        <IotConnectedVehicle />
        <IotSuccessful />
        <IotFaqs />
    </div>
  )
}

export default IotAutomobilePage