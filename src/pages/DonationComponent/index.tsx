// PaymentComponent.js
import React from 'react';
import './PaymentComponent.css';
import Layout from '@theme/Layout';
import './DonationFormComponent.css';
import Link from '@docusaurus/Link';

const PaymentComponent = () => {
    const paymentOptions = [
        { amount: 5, link: '/' },
        { amount: 10, link: 'https://paytm.business/link/1660380018610/LL_538994547' },
        { amount: 25, link: 'https://paytm.business/link/1691718042886/LL_644057655' },
        { amount: 50, link: '/' },
        { amount: 100, link: 'https://paytm.business/link/1691717913115/LL_644057646' },
        { amount: 200, link: '/' },
        { amount: 500, link: '/' },
        { amount: 1000, link: '/' },
        { amount: 5000, link: '/' },
        { amount: 10000, link: '/' },
        // Add more payment options here
    ];

    return (
        <Layout>
            <div className="payment-container">
                <h2 style={{ color: '#45a049' }}>Select an Amount to Donate:</h2>
                <div className="payment-options">
                    {paymentOptions.map((option) => (
                        <Link to={option.link}>
                            <button key={option.amount} className="payment-button">
                                ₹{option.amount}
                            </button>
                        </Link>
                    ))}
                </div>

                <JoinCommunityButton />
            </div>
        </Layout>
    );
};

const JoinCommunityButton = () => {
    return (
        <button className="join-button">
            <Link to="../DonationComponent/DonationFormComponent" style={{ color: '#fff' }}>Add Me to Donation Group</Link>
        </button>
    );
};



export default PaymentComponent;
