import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true; // Simulating user login state
  const name = "David";
  return (
    <main>
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-2">
          <div>CodeFastSaas</div>
          <div className="space-x-4">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-80 mb-10">
          Create a feedback form to collect customer feedback and improve your
          products.
        </div>

        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
