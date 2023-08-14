// PaymentComponent.js
import React from 'react';
import './PaymentComponent.css';
import Layout from '@theme/Layout';
import './DonationFormComponent.css';
import Link from '@docusaurus/Link';

const PaymentComponent = () => {
    const paymentOptions = [
        { amount: 5, link: 'https://paytm.business/link/1692008456082/LL_644845305' },
        { amount: 10, link: 'https://paytm.business/link/1692008498913/LL_644845335' },
        { amount: 25, link: 'https://paytm.business/link/1691718042886/LL_644057655' },
        { amount: 50, link: 'https://paytm.business/link/1691890883744/LL_644585140' },
        { amount: 100, link: 'https://paytm.business/link/1691717913115/LL_644057646' },
        { amount: 200, link: 'https://paytm.business/link/1691891049654/LL_644585150' },
        { amount: 500, link: 'https://paytm.business/link/1691890942459/LL_644585144' },
        { amount: 1000, link: 'https://paytm.business/link/1691891737811/LL_644585183' },
        { amount: 5000, link: 'https://paytm.business/link/1691930112498/LL_644665515' },
        { amount: 10000, link: 'https://paytm.business/link/1692008590258/LL_644845375' },
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
