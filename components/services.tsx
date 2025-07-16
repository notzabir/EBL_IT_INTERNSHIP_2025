import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, PiggyBank, FileText, Download, User, Building } from "lucide-react"

const services = [
  {
    icon: Building,
    title: "Account Management",
    description: "View and manage all your bank accounts in one place",
  },
  {
    icon: PiggyBank,
    title: "Deposits",
    description: "Fixed deposits, savings accounts, and investment options",
  },
  {
    icon: CreditCard,
    title: "Loans",
    description: "Personal loans, home loans, and business financing",
  },
  {
    icon: FileText,
    title: "Account Information",
    description: "Real-time account balance and transaction history",
  },
  {
    icon: Download,
    title: "Statement Download",
    description: "Download monthly statements and transaction reports",
  },
  {
    icon: User,
    title: "Contact Info Update",
    description: "Update your personal and contact information",
  },
  {
    icon: CreditCard,
    title: "EBL Daraz Co-Brand Visa",
    description: "Prepaid card with exclusive Daraz benefits",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive banking solutions designed to meet all your financial needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
