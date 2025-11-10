export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Krish Bruynson",
      title: "Director, Starloft",
      image: "/professional-man-with-glasses.jpg",
      stars: 5,
    },
    {
      name: "Krish Bruynson",
      title: "Director, Starloft",
      image: "/smiling-woman.png",
      stars: 5,
    },
    {
      name: "Krish Bruynson",
      title: "Director, Starloft",
      image: "/man-smiling.jpg",
      stars: 5,
    },
    {
      name: "Krish Bruynson",
      title: "Director, Starloft",
      image: "/professional-man.png",
      stars: 5,
    },
  ]

  return (
    <section className="bg-cyan-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Have To Say About Us</h2>
          <p className="text-gray-600 text-lg">
            Take A Look At Our Simple And Straightforward Process To Hire Software
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              {/* Image card with play button overlay */}
              <div className="relative mb-4 rounded-lg overflow-hidden">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{testimonial.title}</p>

              <div className="flex gap-1 justify-center">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <span key={i} className="text-emerald-500">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
