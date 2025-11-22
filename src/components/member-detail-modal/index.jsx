import {
    faGithub,
    faInstagram,
    faLinkedinIn,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faEnvelope, faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function MemberDetailModal({ member, isOpen, onClose }) {
    // Close modal on ESC key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden"; // Prevent background scroll
        }
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!member) return null;

    const socialIcons = {
        instagram: faInstagram,
        github: faGithub,
        linkedin: faLinkedinIn,
        twitter: faXTwitter,
        website: faGlobe,
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                        <motion.div
                            className="relative bg-base-100 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 btn btn-circle btn-sm btn-ghost hover:btn-error z-10"
                                aria-label="Close modal"
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-xl" />
                            </button>

                            {/* Content */}
                            <div className="p-8">
                                {/* Avatar Section */}
                                <div className="flex flex-col items-center mb-6">
                                    <div className="avatar mb-4">
                                        <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={member.avatar} alt={member.name} />
                                        </div>
                                    </div>
                                    <h2 className="text-3xl font-bold text-center mb-2">{member.name}</h2>
                                    <p className="text-lg text-accent font-semibold">
                                        Batch: {member.year - 4}-{member.year.toString().slice(2)}
                                    </p>
                                    {member.domain && (
                                        <p className="text-md text-base-content opacity-70 mt-1">{member.domain}</p>
                                    )}
                                </div>

                                <div className="divider"></div>

                                {/* About Section */}
                                {member.details && (
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                            <span className="text-primary">📝</span> About
                                        </h3>
                                        <p className="text-base-content leading-relaxed whitespace-pre-line">
                                            {member.details}
                                        </p>
                                    </div>
                                )}

                                {/* Contact Section */}
                                {(member.email || member.phone) && (
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                            <span className="text-primary">📞</span> Contact
                                        </h3>
                                        <div className="space-y-3">
                                            {member.email && (
                                                <a
                                                    href={`mailto:${member.email}`}
                                                    className="flex items-center gap-3 text-base-content hover:text-primary transition-colors group"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faEnvelope}
                                                        className="text-xl text-primary group-hover:scale-110 transition-transform"
                                                    />
                                                    <span className="break-all">{member.email}</span>
                                                </a>
                                            )}
                                            {member.phone && (
                                                <a
                                                    href={`tel:${member.phone}`}
                                                    className="flex items-center gap-3 text-base-content hover:text-primary transition-colors group"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faPhone}
                                                        className="text-xl text-primary group-hover:scale-110 transition-transform"
                                                    />
                                                    <span>{member.phone}</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Social Links Section */}
                                {member.links && member.links.length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                            <span className="text-primary">🔗</span> Connect
                                        </h3>
                                        <div className="flex flex-wrap gap-4">
                                            {member.links.map((link) => (
                                                <a
                                                    key={link.name}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-outline btn-primary gap-2 hover:scale-105 transition-transform"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={socialIcons[link.name] || faGlobe}
                                                        className="text-xl"
                                                    />
                                                    <span className="capitalize">{link.name}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
