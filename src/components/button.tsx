import { ReactNode, ButtonHTMLAttributes, FC } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}


export const Button: FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`rounded-full text-white  border-zinc-950 bg-[rgb(111,110,242)] font-medium py-2 px-4 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
