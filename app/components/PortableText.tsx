import { PortableText as PortableTextReact } from "@portabletext/react";

interface PortableTextProps {
    value: any[];
}

const components = {
    block: {
        normal: ({ children }: any) => <p className="mb-4 leading-relaxed">{children}</p>,
        h1: ({ children }: any) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
    },
    marks: {
        strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
        em: ({ children }: any) => <em className="italic">{children}</em>,
        link: ({ children, value }: any) => (
            <a href={value.href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ),
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    },
};

export default function PortableText({ value }: PortableTextProps) {
    return <PortableTextReact value={value} components={components}/>;
}