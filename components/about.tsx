import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Eastern Bank Limited</h2>
            <p className="text-lg text-gray-600 mb-6">
              Eastern Bank Limited (EBL) is one of the leading private commercial banks in Bangladesh, established in
              1992. We have been serving our customers with innovative banking solutions and exceptional service for
              over three decades.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With our commitment to &quot;Simple Math&quot; - making banking simple, accessible, and transparent - we continue to
              revolutionize the banking experience in Bangladesh through digital innovation and customer-centric
              services.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-600">30+</h3>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600">100+</h3>
                <p className="text-gray-600">Branches Nationwide</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/ebl-plc-logo.png"
              alt="Eastern Bank PLC"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
