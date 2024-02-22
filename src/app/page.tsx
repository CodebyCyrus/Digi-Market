import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Your Marketplace For HQ
          <span className="text-violet-600"> Digital Assets</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome To DigiMarket. Every asset on our platform is verified by our
          Team to ensure our highest quality standards.
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
