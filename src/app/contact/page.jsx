"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Clock,
  Calendar,
  Users,
  CheckCircle,
  MessageCircle,
  MapPin,
  Baby,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const address = "Ganga Heights, 107, complex, Tragad Rd, near KB ROYAL PHOENIX, Chandkheda, Ahmedabad, Gujarat 382424";
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Ganga+Heights%2C+107%2C+complex%2C+Tragad+Rd%2C+near+KB+ROYAL+PHOENIX%2C+Chandkheda%2C+Ahmedabad%2C+Gujarat+382424";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    isNewPatient: true,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 8200635101",
      description: "Call for consultation or appointment support",
      action: "Call Now",
      href: "tel:+918200635101",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Instagram",
      value: "@ansh_childcare",
      description: "Follow updates, health tips, and announcements",
      action: "View Profile",
      href: "https://www.instagram.com/ansh_childcare/",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Appointment",
      value: "Flexible slots",
      description: "Book a consultation for your child",
      action: "Book Now",
      href: "tel:+918200635101",
    },
    {
      icon: <Baby className="h-6 w-6" />,
      title: "Care Type",
      value: "Pediatric & Neonatal",
      description: "Support for newborns, children, and families",
      action: "Learn More",
      href: "/services",
    },
  ];

  const serviceOptions = [
    "Pediatric OPD",
    "Neonatal Care",
    "Vaccination Support",
    "Growth Monitoring",
    "Nutrition Guidance",
    "General Consultation",
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-sky-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Book a trusted consultation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We’re here to help families with pediatric and neonatal care, vaccination support, and child wellness guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Reach out to Anshchildcare for expert child healthcare support and peace of mind.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                    {method.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">{method.title}</h3>
                    <p className="text-sky-500 font-medium">{method.value}</p>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                  <a href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined} rel={method.href.startsWith("http") ? "noreferrer" : undefined}>
                    <Button variant="outline" className="w-full border-sky-500 text-sky-500 hover:bg-sky-50">{method.action}</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="p-8">
              <CardHeader className="px-0">
                <CardTitle className="text-2xl">Request an appointment</CardTitle>
                <CardDescription className="text-base">Tell us about your child’s needs and we’ll be in touch to help.</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" value={formData.firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" value={formData.lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input id="preferredDate" type="date" value={formData.preferredDate} onChange={(e) => handleInputChange("preferredDate", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning</SelectItem>
                          <SelectItem value="afternoon">Afternoon</SelectItem>
                          <SelectItem value="evening">Evening</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea id="message" rows={4} value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} placeholder="Share your child’s health concerns or questions..." />
                  </div>

                  <div className="flex items-center space-x-3">
                    <input type="checkbox" id="newPatient" checked={formData.isNewPatient} onChange={(e) => handleInputChange("isNewPatient", e.target.checked)} className="rounded border-gray-300" />
                    <Label htmlFor="newPatient" className="text-sm">I am a new patient</Label>
                  </div>

                  <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-lg py-3">Request Appointment</Button>
                  <p className="text-sm text-gray-600 text-center">We’ll reach out to confirm the details and schedule your consultation.</p>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="p-6">
                <CardHeader className="px-0">
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-sky-500" />
                    <span>Call us</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <p className="text-gray-900 font-semibold">Anshchildcare</p>
                  <p className="text-gray-600">Phone: +91 8200635101</p>
                  <div className="flex items-start gap-2 text-gray-600">
                    <MapPin className="h-5 w-5 text-sky-500 mt-1 shrink-0" />
                    <p>{address}</p>
                  </div>
                  <a href={mapsUrl} target="_blank" rel="noreferrer">
                    <Button variant="outline" className="w-full border-sky-500 text-sky-500 hover:bg-sky-50">Get Directions</Button>
                  </a>
                  <a href="tel:+918200635101">
                    <Button className="w-full bg-sky-500 hover:bg-sky-600">Call For Consultation</Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="px-0">
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-sky-500" />
                    <span>Appointment info</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">Monday - Saturday</span>
                      <span className="text-gray-600">By appointment</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">Sunday</span>
                      <span className="text-gray-400">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="px-0">
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-sky-500" />
                    <span>Care focus</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Pediatric OPD</p>
                        <p className="text-sm text-gray-600">Routine care, fever management, and child wellness support.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Neonatal care</p>
                        <p className="text-sm text-gray-600">Support for newborns and special monitoring needs.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Vaccination support</p>
                        <p className="text-sm text-gray-600">Guidance for your child’s immunization schedule and preventive care.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
