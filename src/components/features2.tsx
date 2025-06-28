import { cn } from "@/lib/cn";
import { MdOutlineDescription } from "react-icons/md";
import { FaServer, FaCode, FaSyncAlt, FaCogs, FaLayerGroup, FaBuilding } from "react-icons/fa";

export const Features2: React.FC = () => {
    const features = [
        {
            description: "RESTful APIs, JSON responses, and normalized objects",
            icon: <FaServer className="w-full h-full" />,
        },
        {
            description: "Dashboard seamlessly integrates WorkOS into your application",
            icon: <MdOutlineDescription className="w-full h-full" />,
        },
        {
            description: "Realtime updates from directory services with webhook events",
            icon: <FaSyncAlt className="w-full h-full" />,
        },
        {
            description: "Modern SDKs for Node.js, Ruby, Python, .NET, Go and more",
            icon: <FaCode className="w-full h-full" />,
        },
        {
            description: "Multiple environments to map to your application development process",
            icon: <FaLayerGroup className="w-full h-full" />,
        },
        {
            description: "Supports 20+ enterprise services with a single integration point",
            icon: <FaBuilding className="w-full h-full" />,
        },
    ];

    return (
        <div className="grid mt-15 grid-cols-2 px-auto gap-10">
            {features.map((feature, idx) => (
                <NewCard2 key={idx} description={feature.description}>
                    {feature.icon} 
                </NewCard2>
            ))}
        </div>
    );
};

interface NewCard2Props {
    description: string;
    className?: string;
    imageClassName?: string;
    children?: React.ReactNode;
}

export const NewCard2: React.FC<NewCard2Props> = ({
    description,
    className = "",
    imageClassName = "",
    children,
    ...props
}) => {
    return (
        <div className={cn('flex flex-col gap-2' , className)} {...props}>
            <div className={cn("h-8 w-8 rounded-md bg-foregorund3 text-svgColor flex items-center justify-center", imageClassName)}>
                <div className="h-5 w-6">
                    {children}
                </div>
            </div>
            <div>
                <p className="text-secondary2 text-balance font-thin  tracking-tighter">{description}</p>
            </div>
        </div>
    );
};