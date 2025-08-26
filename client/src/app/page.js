import Banner from '@/components/Banner'
import FeaturedProperties from '@/components/FeaturedPropertities'
import FeaturedSocieties from '@/components/FeaturedSocieties'
import PropertySection from '@/components/PropertySelection'
import WhyChooseUs from '@/components/WhyUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner/>
      <PropertySection/>
      <FeaturedProperties/>
      <FeaturedSocieties/>
      <WhyChooseUs/>

    </div>
  )
}

export default page
