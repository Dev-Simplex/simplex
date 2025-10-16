'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { SolutionsServices } from '@/components/sections/SolutionsServices';
import { Testimonials } from '@/components/sections/Testimonials';
import { Partners } from '@/components/sections/Partners';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

import productsData from '@/data/products.json';
import solutionsData from '@/data/solutions.json';
import servicesData from '@/data/services.json';
import testimonialsData from '@/data/testimonials.json';
import partnersData from '@/data/partners.json';
import faqData from '@/data/faq.json';
import { Product } from '@/types/products';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SolutionsServices solutions={solutionsData} services={servicesData} />
      <Products products={productsData as Product[]} />
      <Testimonials testimonials={testimonialsData} />
      <Partners partners={partnersData} />
      <FAQ faqs={faqData} />
      <Contact />
      <Footer />
    </main>
  );
}
