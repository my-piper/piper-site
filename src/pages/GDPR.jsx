import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield } from 'lucide-react';

const GDPR = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen pt-20">
            <section className="py-24 relative w-full max-w-[900px] mx-auto px-4 z-10">
                <div className="mb-16">
                    <div className="flex items-center gap-2 text-primary mb-4">
                        <Shield className="w-5 h-5" />
                        <span className="text-sm font-semibold tracking-wider uppercase">Legal</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                        {t('gdpr.title', 'GDPR Compliance')}
                    </h1>
                    <p className="text-lg text-text-muted">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                <div className="prose prose-invert max-w-none">
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                            <p className="text-text-muted leading-relaxed mb-4">
                                Piper is committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR). This document outlines how we handle your personal data in accordance with GDPR requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Your Rights Under GDPR</h2>
                            <p className="text-text-muted leading-relaxed mb-4">
                                As a data subject, you have the following rights:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                                <li>Right to access your personal data</li>
                                <li>Right to rectification of inaccurate data</li>
                                <li>Right to erasure ("right to be forgotten")</li>
                                <li>Right to restrict processing</li>
                                <li>Right to data portability</li>
                                <li>Right to object to processing</li>
                                <li>Rights related to automated decision-making</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Data We Collect</h2>
                            <p className="text-text-muted leading-relaxed mb-4">
                                We collect and process the following types of personal data:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                                <li>Account information (email, username)</li>
                                <li>Usage data and analytics</li>
                                <li>API keys (encrypted and stored securely)</li>
                                <li>Content you create within the platform</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Legal Basis for Processing</h2>
                            <p className="text-text-muted leading-relaxed mb-4">
                                We process your personal data based on:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                                <li>Consent: You have given clear consent for us to process your personal data</li>
                                <li>Contract: Processing is necessary for a contract with you</li>
                                <li>Legitimate interests: Processing is necessary for our legitimate interests</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
                            <p className="text-text-muted leading-relaxed mb-4">
                                We retain your personal data only for as long as necessary to fulfill the purposes outlined in our Privacy Policy, unless a longer retention period is required by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
                            <p className="text-text-muted leading-relaxed mb-4">
                                When we transfer your data outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                            <p className="text-text-muted leading-relaxed mb-4">
                                To exercise your GDPR rights or for any questions regarding data protection, please contact us at:
                            </p>
                            <p className="text-text-muted leading-relaxed">
                                Email: <a href="mailto:privacy@piper.my" className="text-primary hover:underline">privacy@piper.my</a>
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GDPR;
