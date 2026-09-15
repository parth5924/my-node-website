import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Clock,
  Users,
  Award,
  Shield,
  Heart,
  Smile,
  Stethoscope,
  Baby,
  Syringe,
  Activity,
} from "lucide-react";

const hospitalPhotos = [
  {
    src: "/images/anshchildcare-clinic.webp",
    alt: "Ansh Child Care clinic reception at Ganga Heights",
  },
  {
    src: "/images/neonatal-care-room.webp",
    alt: "Neonatal care room at Ansh Child Care",
  },
  {
    src: "/images/pediatric-care-room.webp",
    alt: "Child-friendly pediatric care room at Ansh Child Care",
  },
];

export default function Home() {
  const services = [
    {
      icon: <Stethoscope className="h-8 w-8 text-sky-500" />,
      title: "Pediatric OPD",
      description:
        "Expert consultation and treatment for infants, children, and adolescents with compassionate, family-centered care.",
      features: ["Routine checkups", "Fever & illness care", "Growth review", "Child wellness plan"],
    },
    {
      icon: <Baby className="h-8 w-8 text-sky-500" />,
      title: "Neonatal Care",
      description:
        "Supportive care for newborns and high-risk babies with specialist monitoring and guidance.",
      features: ["Newborn assessments", "NICU support", "Feeding guidance", "Early screening"],
    },
    {
      icon: <Syringe className="h-8 w-8 text-sky-500" />,
      title: "Vaccination",
      description:
        "Complete immunization guidance and safe vaccination support tailored to each child’s age and health needs.",
      features: ["Vaccination schedules", "Safety counselling", "Timely follow-ups", "Family education"],
    },
    {
      icon: <Heart className="h-8 w-8 text-sky-500" />,
      title: "Family Wellness",
      description:
        "Helping parents and children thrive through prevention, nutrition advice, and holistic child health support.",
      features: ["Nutrition advice", "Development checks", "Prevention care", "Parent guidance"],
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Dr. Kamesh Patel treated our baby with so much care and patience. The guidance was clear and reassuring throughout the process.",
      treatment: "Neonatal Care",
    },
    {
      name: "Rohit Mehta",
      rating: 5,
      text: "The consultation was thoughtful and family-friendly. We felt supported, informed, and confident about our child’s health.",
      treatment: "Pediatric OPD",
    },
    {
      name: "Anjali Patel",
      rating: 5,
      text: "The vaccination guidance and follow-up care were excellent. We trust Anshchildcare for our child’s healthcare needs.",
      treatment: "Vaccination Support",
    },
  ];

  const stats = [
    { number: "OPD", label: "Consultation Care" },
    { number: "NICU", label: "Neonatal Support" },
    { number: "Vaccines", label: "Immunization Guidance" },
    { number: "24/7", label: "Family Support" },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-sky-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-100">
                  Pediatrician &amp; Neonatologist
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Meet Dr. Kamesh Patel
                </h1>
                <p className="text-xl text-gray-600">
                  Trusted pediatric and neonatal care for newborns, children, and families. Dr. Kamesh Patel brings clear guidance, gentle treatment, and specialist support to every consultation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+918200635101">
                  <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                    Book Consultation
                  </Button>
                </a>
                <a href="/services">
                  <Button size="lg" variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-50">
                    View Services
                  </Button>
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Appointments Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Compassionate Care</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-3 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="relative">
                  <img src="/images/dr-kamesh-patel.webp" alt="Dr. Kamesh Patel with a child at Ansh Child Care" className="h-80 w-full rounded-xl object-cover" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg">Dr. Kamesh Patel</span>
                </div>
                <div className="px-3 py-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">Anshchildcare</p>
                  <h2 className="text-xl font-bold text-gray-900">Expert care from the first days of life</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-end mb-12">
            <div className="space-y-4">
              <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-100">Our care environment</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">A welcoming place for growing families</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore the clinical spaces and healthcare setting that inspire our promise of calm, careful, family-first support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {hospitalPhotos.map((photo) => (
              <figure key={photo.src} className="group overflow-hidden rounded-2xl bg-white shadow-sm">
                <img src={photo.src} alt={photo.alt} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <figcaption className="p-4 text-sm text-gray-600">Pediatric and neonatal care setting</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-sky-500">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Complete Child Healthcare Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every child deserves personalized, thoughtful care. We support babies, growing children, and families through every stage of health and wellness.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/services">
              <Button size="lg" variant="outline" className="border-sky-500 text-sky-500 hover:bg-sky-50">
                View All Services
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Why Families Choose Us</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Expert child healthcare you can trust</h2>
                <p className="text-lg text-gray-600">
                  At Anshchildcare, we focus on thoughtful diagnosis, gentle treatment, and clear guidance so parents feel informed and supported at every step.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Specialist-led care</h3>
                    <p className="text-gray-600">Led by Dr. Kamesh Patel, a pediatrician and neonatologist focused on children’s health.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Activity className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Preventive and proactive</h3>
                    <p className="text-gray-600">From vaccination support to growth checks and wellness planning, we prioritize prevention.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Comfort-first approach</h3>
                    <p className="text-gray-600">We aim to make every visit reassuring, clear, and tailored to your child’s needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Family-first healthcare</h3>
                <p className="text-gray-600">Trusted guidance for every smile, every milestone, and every stage of growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Parent Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What families are saying</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">&quot;{testimonial.text}&quot;</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.treatment}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-sky-500 to-cyan-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Need expert child healthcare support?</h2>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              Book a consultation and speak with Dr. Kamesh Patel for trusted guidance on your child’s health, growth, and wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918200635101">
                <Button size="lg" className="bg-white text-sky-500 hover:bg-gray-100">Call Now</Button>
              </a>
              <a href="/contact">
                <Button size="lg" className="bg-white text-sky-500 hover:bg-gray-100">Book Appointment</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
