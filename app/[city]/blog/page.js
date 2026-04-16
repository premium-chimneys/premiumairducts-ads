import { getCityData } from '@/lib/getCityData'
import AnnouncementBar from '@/components/AnnouncementBar'
import NavigationBar from '@/components/NavigationBar'
import Placeholder from '@/components/Placeholder'

export async function generateMetadata({ params }) {
  const { city: citySlug } = await params
  const city = await getCityData(citySlug)
  return {
    title: `Chimney & Fireplace Blog for ${city.name} | Premium Chimneys`,
    description: `Tips, guides, and news on chimney and fireplace care from Premium Chimneys in ${city.name}.`,
    robots: city.slug === 'richardson-tx' ? { index: true, follow: true } : { index: false, follow: false },
  }
}

export default async function Page({ params }) {
  const { city: citySlug } = await params
  const city = await getCityData(citySlug)

  return (
    <div>
      <AnnouncementBar city={city} />
      <NavigationBar city={city} />
      <Placeholder city={city} />    </div>
  )
}
