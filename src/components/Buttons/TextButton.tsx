import { cn } from "@/lib/uitls";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const textButtonVariants = cva("text-[#f1f1f1] rounded-xl", {
  variants: {
    variant: {
      default: "bg-transparent text-black text-xl hover:bg-[#dec0f1] transition-ease-out duration-100 suisse",
      list: 'text-2xl suisse-light'
    },
    size: {
      default: "px-4 py-2",
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
});

type TextButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof textButtonVariants>;

export const TextButton = ({
  className,
  variant,
  size,
  ...props
}: TextButtonProps) => {
  return (
    <button
      className={cn(textButtonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export default TextButton;
