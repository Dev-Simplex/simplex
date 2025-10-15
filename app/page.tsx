'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Sectors } from '@/components/sections/Sectors';
import { Products } from '@/components/sections/Products';
import { Solutions } from '@/components/sections/Solutions';
import { Testimonials } from '@/components/sections/Testimonials';
import { Partners } from '@/components/sections/Partners';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

import sectorsData from '@/data/sectors.json';
import productsData from '@/data/products.json';
import solutionsData from '@/data/solutions.json';
import testimonialsData from '@/data/testimonials.json';
import partnersData from '@/data/partners.json';
import faqData from '@/data/faq.json';
import { Product } from '@/types/products';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Sectors sectors={sectorsData} />
      <Products products={productsData as Product[]} />
      <Solutions solutions={solutionsData} />
      <Testimonials testimonials={testimonialsData} />
      <Partners partners={partnersData} />
      <FAQ faqs={faqData} />
      <Contact />
      <Footer />
    </main>
  );
}
