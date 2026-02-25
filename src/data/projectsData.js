// Mobile Presentation Images
import CravecoPres from "../assets/mobilePresentation/CraveCo.jpg";
import LuminaraPres from "../assets/mobilePresentation/Luminara.jpg";
import POSPres from "../assets/mobilePresentation/POS.jpeg";
import PawsRelaxPres from "../assets/mobilePresentation/Paws & Relax.jpg";
import TaraNaPres from "../assets/mobilePresentation/TaraNa.jpg";

// Mobile Gallery Images (CraveCoEach)
import CravecoEach1 from "../assets/mobilePresentation/CraveCoEach/Simulator Screenshot - iPhone 16 Pro - 2026-02-22 at 17.22.55.png";
import CravecoEach2 from "../assets/mobilePresentation/CraveCoEach/Simulator Screenshot - iPhone 16 Pro - 2026-02-22 at 20.39.33.png";
import CravecoEach3 from "../assets/mobilePresentation/CraveCoEach/Simulator Screenshot - iPhone 16 Pro - 2026-02-22 at 20.39.42.png";
import CravecoEach4 from "../assets/mobilePresentation/CraveCoEach/Simulator Screenshot - iPhone 16 Pro - 2026-02-22 at 20.40.06.png";

// Mobile Gallery Images (LuminaraEach)
import LuminaraEach1 from "../assets/mobilePresentation/LuminaraEach/photo1.png";
import LuminaraEach2 from "../assets/mobilePresentation/LuminaraEach/photo5.png";
import LuminaraEach3 from "../assets/mobilePresentation/LuminaraEach/photo6.png";

// Mobile Gallery Images (POSEach)
import POSEach1 from "../assets/mobilePresentation/POSEach/412768ff-0f03-4e86-b0d0-848b29a0c1e8.jpeg";
import POSEach2 from "../assets/mobilePresentation/POSEach/Simulator Screenshot - iPad Air 11-inch (M2) - 2026-02-24 at 14.52.36.png";
import POSEach3 from "../assets/mobilePresentation/POSEach/Simulator Screenshot - iPad Air 11-inch (M2) - 2026-02-24 at 14.53.50.png";

// Mobile Gallery Images (Paws&RelaxEach)
import PawsRelaxEach1 from "../assets/mobilePresentation/Paws&RelaxEach/Simulator Screenshot - iPhone 16 Pro - 2026-02-24 at 02.29.06.png";
import PawsRelaxEach2 from "../assets/mobilePresentation/Paws&RelaxEach/Simulator Screenshot - iPhone 16 Pro - 2026-02-24 at 14.43.25.png";
import PawsRelaxEach3 from "../assets/mobilePresentation/Paws&RelaxEach/Simulator Screenshot - iPhone 16 Pro - 2026-02-24 at 14.46.56.png";

// Mobile Gallery Images (TaraNaEach)
import TaraNaEach1 from "../assets/mobilePresentation/TaraNaEach/Simulator Screenshot - iPhone 16 Pro - 2026-02-24 at 01.57.32.png";
import TaraNaEach2 from "../assets/mobilePresentation/TaraNaEach/Simulator Screenshot - iPhone 16 Pro - 2026-02-24 at 14.37.11.png";
import TaraNaEach3 from "../assets/mobilePresentation/TaraNaEach/Simulator Screenshot - iPhone 16 Pro - 2026-02-24 at 14.37.26.png";

// Website Images
import CarveStack from "../assets/Website/CarveStack.png";
import IslandGuide from "../assets/Website/Island Guide.png";
import MathCode from "../assets/Website/MathCode.png";
import RenderLabs from "../assets/Website/RenderLabs.png";
import Sauceey from "../assets/Website/Sauceey.png";

export const mobileProjects = [
    {
        id: 2,
        title: "CraveCo",
        category: "Food Delivery App",
        image: CravecoPres,
        description: "A food delivery and discovery mobile app offering seamless ordering experiences.",
        gallery: [CravecoEach1, CravecoEach2, CravecoEach3, CravecoEach4]
    },
    {
        id: 4,
        title: "Paws & Relax",
        category: "Mobile Service App",
        image: PawsRelaxPres,
        description: "Pet grooming app for booking pet grooming sessions.",
        gallery: [PawsRelaxEach2, PawsRelaxEach1, PawsRelaxEach3]
    },
    {
        id: 8,
        title: "TaraNa",
        category: "Taxi Booking App",
        image: TaraNaPres,
        description: "A ride-hailing and logistics mobile solution connecting local communities.",
        gallery: [TaraNaEach3, TaraNaEach1, TaraNaEach2]
    },
    {
        id: 10,
        title: "Luminara",
        category: "Health App",
        image: LuminaraPres,
        description: "A health and wellness tracking mobile app with smart monitoring features.",
        gallery: [LuminaraEach1, LuminaraEach2, LuminaraEach3]
    },
    {
        id: 11,
        title: "Leos POS",
        category: "Point of Sale App",
        image: POSPres,
        description: "A sleek point-of-sale mobile app designed for retail and food businesses.",
        gallery: [POSEach2, POSEach1, POSEach3],
        widescreen: true
    },
];

export const webProjects = [
    {
        id: 1,
        title: "CarveStack",
        category: "Custom Web Solution",
        image: CarveStack,
        description: "A comprehensive digital solution for modern businesses to streamline operations and workflows.",
        link: "https://carvestack.netlify.app/"
    },
    {
        id: 3,
        title: "Island Guide",
        category: "Travel Web App",
        image: IslandGuide,
        description: "A tourist booking web platform and local guide to discover hidden island gems.",
        link: "https://islandguide.netlify.app/"
    },
    {
        id: 5,
        title: "MathCode",
        category: "Educational Web App",
        image: MathCode,
        description: "An interactive web-based learning platform for math and coding enthusiasts.",
        link: "https://mathcode.netlify.app/"
    },
    {
        id: 7,
        title: "RenderLabs",
        category: "AI SaaS Web App",
        image: RenderLabs,
        description: "An AI-powered 3D rendering and architectural virtualization SaaS platform.",
        link: "https://renderlabs.netlify.app/"
    },
    {
        id: 9,
        title: "Sauceey",
        category: "Business Web App",
        image: Sauceey,
        description: "A bespoke business e-commerce platform for gourmet sauces and culinary products.",
        link: "https://sauceey.netlify.app/"
    },
];
