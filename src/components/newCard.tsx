import { cn } from "@/lib/cn";
import Image from "next/image";

interface NewCardProps {
    imageSrc: string;
    alt: string;
    title: string;
    description: string;
    className?: string;
    imageClassName?: string;
    children?: React.ReactNode;
}

export const NewCard: React.FC<NewCardProps> = ({
    imageSrc,
    alt,
    title,
    description,
    className = "",
    imageClassName = "",
    children,
    ...props
}) => {
    return (
        <div className={cn("flex flex-col w-4/10  lg:flex-row " ,{className})} {...props}>
            <Image
                alt={alt}
                src={imageSrc}
                className={imageClassName}
                width={180}
                height={180}
            />
            <div className="flex flex-col ">
                <h4 className="text-primary text-lg mb-1">{title}</h4>
                <p className="text-secondary text-base">{description}</p>
                {children}
            </div>
        </div>
    );
};