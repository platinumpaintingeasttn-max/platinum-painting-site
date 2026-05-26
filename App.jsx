import logo from './logo.jpg'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="relative bg-gradient-to-br from-stone-100 to-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={logo}
              alt="Platinum Painting Logo"
              className="w-72 max-w-full rounded-2xl shadow-xl bg-white p-3 mb-8"
            />

            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Serving Anderson, Blount, Campbell & Knox Counties
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Professional Painting & Property Refresh Services
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Interior & exterior painting, staining, pressure washing, soft washing,
              and sheetrock repair for homeowners, rental owners, and real estate professionals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg transition"
              >
                Get a Free Quote
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
              alt="Modern Home"
              className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Interior Painting',
              'Exterior Painting',
              'Staining',
              'Pressure Washing',
              'Soft Washing',
              'Sheetrock Repair',
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-10 lg:p-14">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-900">
                Contact Platinum Painting
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-stone-50 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3 text-gray-900">Owner</h3>
                <p className="text-gray-600">Patrick McLaughlin</p>
                <p className="text-gray-600 mt-2">865-340-5027</p>
                <p className="text-gray-600 mt-2">
                  platinumpaintingeasttn@gmail.com
                </p>
              </div>

              <div className="bg-stone-50 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3 text-gray-900">Service Area</h3>
                <p className="text-gray-600">
                  Anderson, Blount, Campbell & Knox Counties
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}