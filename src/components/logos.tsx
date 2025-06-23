const companyLogos = [
    "asus-6630-logo-svgrepo-com.svg",
    "honda-9-logo-svgrepo-com.svg",
    "indeed.svg",
    "ola-cabs-logo-svgrepo-com.svg",
    "openai.svg",
    "paypal-logo-svgrepo-com.svg",
    "samsung-1-logo-svgrepo-com.svg",
    "sony-2-logo-svgrepo-com.svg",
    "tesla-motors-logo-svgrepo-com.svg",
    "wechat-3-logo-svgrepo-com.svg",
];
export const Logos = () => {
    return (
        <>
        <p className="text-xs text-secondary h-7 pl-3">TRUSTED BY-</p>
        <div className="grid grid-cols-3 lg:grid-cols-5 justify-items-center" style={{ gap: 0 }}>
            {companyLogos.map((logo) => (
                <div
                    key={logo}
                    className="flex items-center justify-center bg-white rounded"
                    style={{ width: 80, height: 80, border: "none", boxShadow: "none" }}
                >
                    <img
                        src={`/company_logos/${logo}`}
                        alt={logo.replace(/\.svg$/, "")}
                        className="object-contain"
                        style={{
                            maxWidth: "70%",
                            maxHeight: "70%",
                        }}
                    />
                </div>
            ))}
        </div>
        </>
    );
};
