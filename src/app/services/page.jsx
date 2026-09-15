"use client";

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
  Baby,
  Stethoscope,
  Syringe,
  Heart,
  CheckCircle,
  Activity,
} from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      id: "pediatric",
      title: "Pediatric OPD",
      icon: <Stethoscope className="h-6 w-6" />,
      description: "Expert consultation and treatment for infants, children, and adolescents.",
      services: [
        {
          name: "Routine Child Checkups",
          description: "Regular health reviews for growth, development, and general wellbeing.",
          features: ["Growth assessment", "Vitals review", "Illness management", "Parent guidance"],
          duration: "30-45 minutes",
          price: "Consultation",
        },
        {
          name: "Fever & Common Illness Care",
          description: "Timely help for common pediatric concerns and quick recovery planning.",
          features: ["Fever care", "Respiratory support", "Follow-up guidance", "Medication advice"],
          duration: "20-40 minutes",
          price: "Consultation",
        },
        {
          name: "Nutrition & Wellness Advice",
          description: "Support for healthy growth, feeding, daily habits, and disease prevention.",
          features: ["Diet guidance", "Feeding advice", "Preventive care", "Lifestyle support"],
          duration: "30-45 minutes",
          price: "Consultation",
        },
        {
          name: "Child Development Support",
          description: "Monitoring of milestones and developmental health for children.",
          features: ["Milestone review", "Early screening", "Development guidance", "Family support"],
          duration: "30-60 minutes",
          price: "Consultation",
        },
      ],
    },
    {
      id: "neonatal",
      title: "Neonatal Care",
      icon: <Baby className="h-6 w-6" />,
      description: "Specialist care and monitoring for newborns and high-risk babies.",
      services: [
        {
          name: "Newborn Assessment",
          description: "Care for newborns with early health screening and family guidance.",
          features: ["Birth health review", "Feeding support", "Monitoring", "Parent counselling"],
          duration: "30-45 minutes",
          price: "Consultation",
        },
        {
          name: "NICU Guidance",
          description: "Specialized support for babies needing close monitoring and intensive care planning.",
          features: ["Specialist follow-up", "Monitoring plans", "Care coordination", "Family education"],
          duration: "Varies",
          price: "Consultation",
        },
        {
          name: "Breastfeeding Support",
          description: "Practical guidance to help parents and newborns thrive during the early stages.",
          features: ["Feeding advisory", "Positioning tips", "Comfort advice", "Problem-solving"],
          duration: "20-30 minutes",
          price: "Consultation",
        },
        {
          name: "High-Risk Baby Support",
          description: "Focused care for infants who need closer attention and regular monitoring.",
          features: ["Close follow-up", "Progress tracking", "Care planning", "Family reassurance"],
          duration: "Varies",
          price: "Consultation",
        },
      ],
    },
    {
      id: "vaccination",
      title: "Vaccination",
      icon: <Syringe className="h-6 w-6" />,
      description: "Vaccination guidance and support designed for each child’s age and needs.",
      services: [
        {
          name: "Immunization Planning",
          description: "Organized guidance to keep your child on time with essential vaccines.",
          features: ["Schedule review", "Vaccination timing", "Safety counselling", "Preventive care"],
          duration: "20-30 minutes",
          price: "Consultation",
        },
        {
          name: "Follow-up Vaccination Advice",
          description: "Support to monitor progress and answer concerns regarding vaccine safety and timing.",
          features: ["Progress review", "Concern support", "Care reminders", "Family education"],
          duration: "15-25 minutes",
          price: "Consultation",
        },
        {
          name: "Vaccination Counselling",
          description: "Clear guidance to help parents feel informed and confident about child immunization.",
          features: ["Education", "Answering questions", "Risk guidance", "Trust-building"],
          duration: "20-30 minutes",
          price: "Consultation",
        },
        {
          name: "Preventive Child Care",
          description: "Ongoing support to keep children protected and healthy throughout their milestones.",
          features: ["Protection planning", "Preventive advice", "Confidence building", "Regular reviews"],
          duration: "30-45 minutes",
          price: "Consultation",
        },
      ],
    },
    {
      id: "wellness",
      title: "Family Wellness",
      icon: <Heart className="h-6 w-6" />,
      description: "Holistic child health support focused on prevention and long-term wellbeing.",
      services: [
        {
          name: "Growth Monitoring",
          description: "Tracking physical development and early signs of concern to support healthy milestones.",
          features: ["Weight tracking", "Height review", "Development checks", "Early intervention"],
          duration: "30-45 minutes",
          price: "Consultation",
        },
        {
          name: "Nutrition Guidance",
          description: "Practical support for feeding habits, healthy eating, and child growth.",
          features: ["Diet advice", "Meal planning", "Health education", "Lifestyle guidance"],
          duration: "30-45 minutes",
          price: "Consultation",
        },
        {
          name: "Parental Consultation",
          description: "Family-friendly counselling for everyday health concerns, milestones, and reassurance.",
          features: ["Care explanation", "Answers to concerns", "Supportive guidance", "Confidence building"],
          duration: "20-40 minutes",
          price: "Consultation",
        },
        {
          name: "Preventive Health Planning",
          description: "A structured approach to future-proofing your child’s wellness and development.",
          features: ["Health roadmap", "Routine planning", "Education", "Family support"],
          duration: "30-45 minutes",
          price: "Consultation",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-sky-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Care for every stage of childhood</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Anshchildcare offers trusted pediatric and neonatal support designed to keep babies, children, and families healthy, informed, and confident.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600">{category.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.services.map((service, index) => (
                    <div key={index} className="border-t border-gray-100 pt-4 first:border-t-0 first:pt-0">
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                      <ul className="mt-3 space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Why this matters</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Support that grows with your child</h2>
                <p className="text-lg text-gray-600">
                  From newborn wellness to routine pediatric follow-ups, Anshchildcare supports your family through every milestone with thoughtful guidance and timely care.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Tailored care plans</h3>
                    <p className="text-gray-600">Every child receives individualized attention and practical recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Preventive healthcare</h3>
                    <p className="text-gray-600">We focus on early intervention, disease prevention, and healthy growth.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Family-centred communication</h3>
                    <p className="text-gray-600">You’ll always be informed, supported, and never rushed through your concerns.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-100 to-cyan-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-sky-500 rounded-full flex items-center justify-center mx-auto">
                  <Activity className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Healthy development starts early</h3>
                <p className="text-gray-600">Our care helps families create a strong foundation for lifelong health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-sky-500 to-cyan-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Need help with your child’s health?</h2>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              Reach out to Anshchildcare for pediatric and neonatal support that is compassionate, clear, and focused on your child’s wellbeing.
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
