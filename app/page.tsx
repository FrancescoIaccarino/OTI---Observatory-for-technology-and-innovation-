import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Osservatori from '@/components/home/Osservatori'
import LatestInsights from '@/components/home/LatestInsights'
import GovernanceNetwork from '@/components/home/GovernanceNetwork'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Osservatori />
      <LatestInsights />
      <GovernanceNetwork />
      <CTA />
    </>
  )
}
