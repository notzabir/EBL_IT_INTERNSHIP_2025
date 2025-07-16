import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      {/* Full width background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ebl-sky-banner.png"
          alt="EBL Sky Banking Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Banking Made
              <span className="text-yellow-400"> Simple</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Experience the future of banking with EBL&apos;s digital solutions. Manage your finances, loans, and
              investments all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">
                Open Account
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/ebl-sky-banner.png"
              alt="EBL Sky Banking"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
