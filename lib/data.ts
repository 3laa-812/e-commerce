const data = {
  headerMenus: [
    {
      name: "Today's Deal",
      href: "/search?tag=todays-deal",
    },
    {
      name: "New Arrivals",
      href: "/search?tag=new-arrival",
    },
    {
      name: "Featured Products",
      href: "/search?tag=featured",
    },
    {
      name: "Best Sellers",
      href: "/search?tag=best-seller",
    },
    {
      name: "Browsing History",
      href: "/#browsing-history",
    },
    {
      name: "Customer Service",
      href: "/page/customer-service",
    },
    {
      name: "About Us",
      href: "/page/about-us",
    },
    {
      name: "Help",
      href: "/page/help",
    },
  ],
  carousels: [
    {
      title: "Most Popular Shoes For Sale",
      buttonCaption: "Shop Now",
      image: "/images/banner3.jpg",
      url: "/search?category=Shoes",
      isPublished: true,
    },
    {
      title: "Best Sellers in T-Shirts",
      buttonCaption: "Shop Now",
      image: "/images/banner1.jpg",
      url: "/search?category=T-Shirts",
      isPublished: true,
    },
    {
      title: "Best Deals on Wrist Watches",
      buttonCaption: "See More",
      image: "/images/banner2.jpg",
      url: "/search?category=Wrist Watches",
      isPublished: true,
    },
  ],
  settings: [
    {
      common: {
        freeShippingMinPrice: 35,
        isMaintenanceMode: false,
        defaultTheme: "Light",
        defaultColor: "Gold",
        pageSize: 9,
      },
      site: {
        name: "NxtAmzn",
        description:
          "NxtAmzn is a sample Ecommerce website built with Next.js, Tailwind CSS, and MongoDB.",
        keywords: "Next Ecommerce, Next.js, Tailwind CSS, MongoDB",
        url: "https://next-mongo-ecommerce-final.vercel.app",
        logo: "/icons/logo.svg",
        slogan: "Spend less, enjoy more.",
        author: "Next Ecommerce",
        copyright: "2000-2024, Next-Ecommerce.com, Inc. or its affiliates",
        email: "admin@example.com",
        address: "123, Main Street, Anytown, CA, Zip 12345",
        phone: "+1 (123) 456-7890",
      },
      carousels: [
        {
          title: "Most Popular Shoes For Sale",
          buttonCaption: "Shop Now",
          image: "/images/banner3.jpg",
          url: "/search?category=Shoes",
        },
        {
          title: "Best Sellers in T-Shirts",
          buttonCaption: "Shop Now",
          image: "/images/banner1.jpg",
          url: "/search?category=T-Shirts",
        },
        {
          title: "Best Deals on Wrist Watches",
          buttonCaption: "See More",
          image: "/images/banner2.jpg",
          url: "/search?category=Wrist Watches",
        },
      ],
    },
  ],
};

export default data;
