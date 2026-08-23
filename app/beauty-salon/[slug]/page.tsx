import { Metadata } from "next"
import BeautyContact from "../components/BeautyContac"
import BeautyFooter from "../components/BeautyFooter"
import BeautyHero from "../components/BeautyHero"
import BeautyServices from "../components/BeautyServices"
import BeautyTestimonials from "../components/BeautyTestimonials"
import BeautyWhyUs from "../components/BeautyWhyUs"
import BeautyHeaer from "../components/Header"

export const metadata: Metadata = {
  title: "کلینیک زیبایی",
}

import { getClinicBySlug, getAllClinicSlugs } from "@/data/beauty-clinics"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllClinicSlugs()

  return slugs.map((slug) => ({
    slug: slug,
  }))
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params

  const clinicData = getClinicBySlug(slug)

  if (!clinicData) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-beauty-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Clinic Not Found</h1>
          <p className="text-gray-600 mt-2">The clinic you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    )
  }


  return (
    <div className="w-full bg-beauty-background" dir="rtl"
      style={{
        fontFamily: "'Vazir', 'Tahoma', sans-serif"
      }}>
      <BeautyHeaer name={clinicData.name} />
      <BeautyHero title={clinicData.hero.title} subtitle={clinicData.hero.subtitle} />
      <BeautyServices services={clinicData.services} />
      <BeautyWhyUs />
      <BeautyTestimonials />
      <BeautyContact address={clinicData.contact.address} phone={clinicData.contact.phone} email={clinicData.contact.email} />
      <BeautyFooter name={clinicData.name} />
    </div>
  )
}
export default page