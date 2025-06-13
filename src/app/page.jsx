import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Loading fallbacks
const LoadingComponent = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-pulse text-blue-500">Carregando...</div>
  </div>
);

// Importando os componentes com loading fallback
const HeroFeatures = dynamic(() => import('@/components/HeroFeatures'), {
  loading: () => <LoadingComponent />,
  ssr: true
});

const FeatureGrid = dynamic(() => import('@/components/FeatureGrid'), {
  loading: () => <LoadingComponent />,
  ssr: true
});

const LogoMarquee = dynamic(() => import('@/components/LogoMarquee'), {
  loading: () => <LoadingComponent />,
  ssr: true
});

const TestimonialCarousel = dynamic(() => import('@/components/TestimonialCarousel'), {
  loading: () => <LoadingComponent />,
  ssr: true
});

export default function Home() {
  return (
    <main className="text-white">
      <Suspense fallback={<LoadingComponent />}>
        <div className="flex flex-col gap-16">
          <HeroFeatures />
          <FeatureGrid />
          <LogoMarquee />
          <TestimonialCarousel />
        </div>
      </Suspense>
    </main>
  );
} 