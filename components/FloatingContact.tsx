// components/FloatingContact.tsx
"use client";

import { useState } from "react";
import { LuGithub, LuMail, LuLinkedin, LuMessageCircle, LuInstagram } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
}

export function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);

    const socialLinks: SocialLink[] = [
        {
            name: "Email",
            url: "mailto:farnazbina.dev@gmail.com",
            icon: <LuMail className="w-5 h-5" />,
        },
        {
            name: "GitHub",
            url: "https://github.com/farnazbina",
            icon: <LuGithub className="w-5 h-5" />,
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/farnazbina/",
            icon: <LuInstagram className="w-5 h-5" />,
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/farnazbina",
            icon: <LuLinkedin className="w-5 h-5" />,
        },
        {
            name: "X.com",
            url: "https://x.com/farnaz_bina",
            icon: <FaXTwitter className="w-5 h-5" />,
        },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {isOpen && (
                <div className="mb-4 w-64 rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-5 animate-in slide-in-from-bottom-5 duration-300">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Let&apos;s Connect</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            aria-label="Close contact panel"
                        >
                            <IoClose className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="space-y-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                            >
                                <span className="text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors">
                                    {link.icon}
                                </span>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-accent transition-colors">
                                    {link.name}
                                </span>
                            </a>
                        ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
                        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                            📧 farnazbina.dev@gmail.com
                        </p>
                    </div>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Open contact options"
            >
                <LuMessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white dark:border-gray-900 animate-pulse" />
            </button>
        </div>
    );
}