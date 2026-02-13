const platforms = [
  { name: "Amazon", logo: "/platforms/amazon.png" },
  { name: "eBay", logo: "/platforms/ebay.png" },
  { name: "Walmart", logo: "/platforms/walmart.png" },
  { name: "Etsy", logo: "/platforms/etsy.png" },
  { name: "Shopify", logo: "/platforms/shopify.png" },
  { name: "Alibaba", logo: "/platforms/alibaba.png" },
  { name: "AliExpress", logo: "/platforms/aliexpress.png" },
  { name: "Flipkart", logo: "/platforms/flipkart.png" },
];

export function PlatformsMarquee() {
  return (
    <section className="py-8 md:py-16 bg-[#3b2a1f] overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <p className="text-center text-[#E6D8C7] text-sm uppercase tracking-widest">
          E-Commerce Platforms We Support
        </p>
      </div>

      <div className="overflow-hidden">
        {/* IMPORTANT: marquee-track */}
        <div className="marquee-track gap-6 md:gap-14">
          {[...platforms, ...platforms].map((platform, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-[#F5F1E8] rounded-2xl 
                         px-6 py-4 md:px-12 md:py-8 
                         shadow-md"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-8 md:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
