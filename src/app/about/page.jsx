"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Shield, Heart, Baby, Stethoscope } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-rose-500" />,
      title: "Compassionate Care",
      description:
        "We understand that every child and every family is unique, so we focus on thoughtful, human-centered treatment.",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Clinical Excellence",
      description:
        "Our care follows evidence-based pediatric and neonatal practices designed around safety, trust, and long-term wellbeing.",
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-500" />,
      title: "Family Partnership",
      description:
        "We work closely with parents and caregivers to make every step clear, supportive, and reassuring.",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-500" />,
      title: "Preventive Focus",
      description:
        "From vaccinations to growth monitoring, we aim to prevent illness and promote healthy development from the start.",
    },
  ];

  const careHighlights = [
    {
      title: "Pediatric consultation",
      description: "Comprehensive OPD care for infants, children, and adolescents.",
    },
    {
      title: "Neonatal support",
      description: "Specialist guidance and monitoring for newborns and vulnerable babies.",
    },
    {
      title: "Vaccination support",
      description: "Timely immunization guidance and family education for safe prevention.",
    },
    {
      title: "Wellness planning",
      description: "Support for growth, nutrition, development, and long-term child health.",
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-sky-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Expert care for every child</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Anshchildcare is built around one mission: helping children grow healthy, strong, and confident with trusted pediatric and neonatal care.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Dr. Kamesh Patel</h2>
                <p className="text-lg text-gray-600">
                  Dr. Kamesh Patel is a pediatrician and neonatologist dedicated to providing thoughtful, evidence-based care for newborns, children, and families.
                </p>
                <p className="text-lg text-gray-600">
                  With a focus on prevention, early intervention, and compassionate family guidance, Anshchildcare brings together pediatric expertise and neonatal support under one roof.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-sky-500">OPD</div>
                  <div className="text-gray-600">Consultation Care</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-sky-500">NICU</div>
                  <div className="text-gray-600">Neonatal Support</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-100 to-cyan-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-sky-500 rounded-full flex items-center justify-center mx-auto">
                  <Stethoscope className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Care with clarity</h3>
                <p className="text-gray-600">Clear explanations, kind support, and expert treatment for every child.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What drives our care</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe every family deserves expert guidance, gentle attention, and healthcare that feels personal and reassuring.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className="group-hover:scale-110 transition-transform duration-300 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Focus Areas</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How we support families</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careHighlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto">
                    <Baby className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">{highlight.title}</h3>
                  <p className="text-gray-600 text-center">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-sky-500 to-cyan-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s care for your child together</h2>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              From newborn care to routine pediatric guidance, Anshchildcare is here to support your family with trusted expertise and compassionate care.
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
