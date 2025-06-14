import ButtonLogin from "@/components/ButtonLogin";
import ListItem from "@/components/ListItem";

export default function Home() {
  const isLoggedIn = true; // Simulating user login state
  const name = "David";

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
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-2">
          <div>CodeFastSaas</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 lg:text-5xl">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-80 mb-10">
          Create a feedback form to collect customer feedback and improve your
          products.
        </div>

        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
      {/* Pricing Section */}
      <section className="bg-base-200">
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

          <ButtonLogin isLoggedIn={isLoggedIn} name={name} extraStyle="w-full"/>
        </div>
      </section>
    </main>
  );
}
