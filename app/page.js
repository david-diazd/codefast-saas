import ButtonLogin from "@/components/ButtonLogin";
import ListItem from "@/components/ListItem";
import FAQListItem from "@/components/FAQListItem";
import Image from "next/image";
import productDemo from "@/app/productDemo.jpeg";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  const pricingFeaturesList = [
    "Collect customer feedback",
    "Unlimited boards",
    "Admin dashboard",
    "24/7 support"
  ];

  return (
    <main>
      {/* Header Section */}
      <section className="bg-base-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-8 py-2">
          <div>CodeFastSaas</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#pricing">Pricing</a>
            <a className="link link-hover" href="#faq">FAQ</a>
          </div>
          <div>
            <ButtonLogin session={session} />
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="px-8 text-center lg:text-left py-32 max-w-5xl mx-auto flex flex-col md:flex-row items-center lg: items-start gap-14">

        <Image src={productDemo}  alt="Product Demo" className="w-full md:w-1/2 rounded-3xl" />

        <div>
          <h1 className="text-4xl font-extrabold mb-6 lg:text-5xl">
          Collect customer feedback to build better products
          </h1>
          <div className="opacity-80 mb-10">
            Create a feedback form to collect customer feedback and improve your
            products.
          </div>
          <ButtonLogin session={session} />
        </div>
        
      </section>
      {/* Pricing Section */}
      <section className="bg-base-200" id="pricing">
        <div className="py-3 max-w-3xl mx-auto px-8">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Pricing that adapts to your needs
          </h2>
        </div>

        <div className="w-96 rounded-3xl bg-base-100 p-8 mx-auto">
          <div className="flex gap-2 items-baseline">
            <div className="text-4xl font-black">$19</div>
            <div className="uppercase text-sm font-medium opacity-60">
              /month
            </div>
          </div>
          <ul>
            {
              pricingFeaturesList.map((feature,index) => (
                <ListItem key={index}>{feature}</ListItem>
              ))
            }
          </ul>

          <ButtonLogin session={session} extraStyle="w-full"/>
        </div>
      </section>

      {/* FAQ Section */}

      <section className="bg-base-200" id="faq">
        <div className="py-32 max-w-3xl mx-auto px-8">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>

            <ul className="max-w-lg mx-auto">
              {
                [
                  { //this is an object
                    question: "What I do get exactly?", 
                    answer: "Loreum Ipseum",
                  },
                  { //this is an object
                    question: "How does it work?", 
                    answer: "Loreum Ipseum",
                  },
                ].map((qa) => (
                  <FAQListItem key={qa.question} qa={qa} />
                ))
              }
            </ul>

        </div>
      </section>
    </main>
  );
}
