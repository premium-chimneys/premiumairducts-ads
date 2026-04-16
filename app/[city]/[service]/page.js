import { getCityData } from '@/lib/getCityData'
import { getServiceData } from '@/lib/getServiceData'
import AnnouncementBar from '@/components/AnnouncementBar'
import NavigationBar from '@/components/NavigationBar'
import ServiceHero from '@/components/ServiceHero'
import WhatsIncluded from '@/components/WhatsIncluded'
import Education from '@/components/Education'
import Differentiation from '@/components/Differentiation'
import Reviews from '@/components/Reviews'
import Coupons from '@/components/Coupons'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const serviceNames = {
  'ac-repair': 'AC Repair',
  'air-duct-cleaning': 'Air Duct Cleaning',
  'dryer-vent-cleaning': 'Dryer Vent Cleaning',
  'hvac-repair': 'HVAC Repair',
}

export async function generateMetadata({ params }) {
  const { service, city: citySlug } = await params
  const city = await getCityData(citySlug)
  const serviceName = serviceNames[service]
  return {
    title: `${serviceName} in ${city.name}`,
    description: `Professional ${serviceName} in ${city.name}. Trusted local experts. Book your appointment today.`,
    robots: city.slug === 'richardson-tx' ? { index: true, follow: true } : { index: false, follow: false },
  }
}

export default async function Page({ params }) {
  const { service, city: citySlug } = await params
  const [city, serviceData] = await Promise.all([
    getCityData(citySlug),
    getServiceData(service),
  ])

  const heading = `${serviceNames[service]} in ${city.name}`

  return (
    <div>
      <AnnouncementBar city={city} />
      <NavigationBar city={city} />
      <ServiceHero city={city} service={service} heading={heading} serviceData={serviceData} />
      <WhatsIncluded city={city} serviceData={serviceData} />
      <Education city={city} serviceData={serviceData} />
      <Differentiation city={city} service={service} />
      <Reviews city={city} />
      <Coupons city={city} />
      <Contact city={city} />
      <Footer city={city} />
    </div>
  )
}
