import { Skeleton } from "./ui/skeleton";

export const HeroSkeleton = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent min-h-screen flex items-center">
    <div className="container-section section-spacing relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Skeleton className="h-16 w-48 bg-white/20" />
          <Skeleton className="h-16 w-full bg-white/20" />
          <Skeleton className="h-16 w-3/4 bg-white/20" />
          <Skeleton className="h-8 w-2/3 bg-white/20" />
          <Skeleton className="h-14 w-48 bg-white/20" />
        </div>
        <Skeleton className="h-96 w-full rounded-3xl bg-white/20" />
      </div>
    </div>
  </section>
);

export const BenefitsSkeleton = () => (
  <section className="section-spacing bg-background">
    <div className="container-section">
      <div className="text-center mb-16 space-y-4">
        <Skeleton className="h-10 w-64 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="glass-card p-8 rounded-2xl space-y-4">
            <Skeleton className="h-14 w-14 rounded-2xl" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const TestimonialsSkeleton = () => (
  <section className="section-spacing bg-card">
    <div className="container-section">
      <div className="text-center mb-16 space-y-4">
        <Skeleton className="h-10 w-64 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl space-y-4">
            <Skeleton className="h-20 w-20 rounded-full mx-auto" />
            <Skeleton className="h-5 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FormSkeleton = () => (
  <section className="section-spacing bg-background">
    <div className="container-section">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-10 w-96 mx-auto" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-2xl space-y-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
            <Skeleton className="h-14 w-full" />
          </div>
          <div className="glass-card p-8 rounded-2xl space-y-4">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
