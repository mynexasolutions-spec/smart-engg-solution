import Image from "next/image";

type WhatsAppIconProps = {
  className?: string;
};

export function WhatsAppIcon({ className }: WhatsAppIconProps) {
  return (
    <Image
      src="/whatsapp.png"
      alt=""
      width={512}
      height={512}
      className={className ?? "h-5 w-5"}
      aria-hidden="true"
    />
  );
}
