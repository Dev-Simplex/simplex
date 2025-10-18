'use client';

import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';

import productsData from '@/data/products.json';
import solutionsData from '@/data/solutions.json';
import servicesData from '@/data/services.json';
import testimonialsData from '@/data/testimonials.json';
import partnersData from '@/data/partners.json';
import faqData from '@/data/faq.json';
import { Product } from '@/types/products';

// Lazy loading de seções pesadas para melhor performance
const SolutionsServices = dynamic(() => import('@/components/sections/SolutionsServices').then(mod => ({ default: mod.SolutionsServices })), {
  ssr: true
});

const Products = dynamic(() => import('@/components/sections/Products').then(mod => ({ default: mod.Products })), {
  ssr: true
});

const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  ssr: true
});

const Partners = dynamic(() => import('@/components/sections/Partners').then(mod => ({ default: mod.Partners })), {
  ssr: true
});

const FAQ = dynamic(() => import('@/components/sections/FAQ').then(mod => ({ default: mod.FAQ })), {
  ssr: true
});

const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => ({ default: mod.Contact })), {
  ssr: true
});

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
