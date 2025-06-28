import { NewCard } from "./newCard";

 interface CardData {
     alt: string;
     title: string;
     description: string;
     src: string;
 }
 export const Features: React.FC = () => {
     const cardData: CardData[] = [
         {
             alt: "SAML Lock",
             title: "Auth for all SSO providers",
             description: "Support any SAML or identity provider with a integration",
             src: "/images/1.png",
         },
         {
             alt: "SAML Lock",
             title: "Complete User Management",
             description: "Manage users organizations, set policies, support all auth types",
             src: "/images/2.png",
         },
         {
             alt: "SAML Lock",
             title: "Social authentication",
             description: "Sign in to your app Microsoft, Google, and more",
             src: "/images/3.png",
         },
         {
             alt: "SAML Lock",
             title: "AuthKit",
             description: "Flexible UI powered by WorkOS and Radix",
             src: "/images/4.png",
         },
         {
             alt: "SAML Lock",
             title: "Magic Auth",
             description: "Passwordless auth with six-digit code sent via email",
             src: "/images/5.png",
         },
         {
             alt: "SAML Lock",
             title: "Multi-Factor Auth",
             description: "Manage users organizations, set policies, support all auth types",
             src: "/images/6.png",
         },
     ];
     return (
         <>
             {cardData.map((card: CardData, idx) => (
                 <NewCard
                     key={idx}
                     alt={card.alt}
                     title={card.title}
                     description={card.description}
                     imageSrc={card.src}
                     imageClassName={"h-20 w-20 mr-0 mb-3 lg:mb-0 lg:mr-3 "}
                 />
             ))}
         </>
     );
 }