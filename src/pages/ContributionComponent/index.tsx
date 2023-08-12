import React from 'react';
import ProfileCard from './ProfileCard';
import Layout from '@theme/Layout';
import { IonReactRouter } from '@ionic/react-router';

const ContributionComponent = () => {
    const profileDataList = [
        {
            image: 'https://avatars.githubusercontent.com/u/99037494?v=4',
            message: `Hello, I'm a web developer!`,
            name: 'Ajay Dhangar',
            socialLinks: {
                twitter: 'https://twitter.com/AJAYDHA27250016',
                linkedin: 'https://www.linkedin.com/in/ajay-dhangar/',
            },
        },
        {
            image: 'https://avatars.githubusercontent.com/u/101887417?v=4',
            message: `Hello, I'm another developer!`,
            name: 'Shivaya',
            socialLinks: {
                twitter: '/',
                linkedin: '/',
            },
        },
        // Add more profiles...
    ];

    return (
        <Layout wrapperClassName='main-code-container'>
            <IonReactRouter>
                <div className="Main-Profile-Page">
                    {profileDataList.map((profileData, index) => (
                        <ProfileCard key={index} profileData={profileData} />
                    ))}
                </div>
            </IonReactRouter>
        </Layout>
    );
};

export default ContributionComponent;
