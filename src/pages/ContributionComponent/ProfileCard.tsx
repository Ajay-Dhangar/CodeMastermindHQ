import React from 'react';
import './ProfileCard.css';
import { IonIcon } from '@ionic/react';
import { logoTwitter, logoLinkedin } from 'ionicons/icons';

const ProfileCard = ({ profileData }) => {
    if (!profileData) {
        return null;
    }

    // const { image, message, name, socialLinks } = profileData;

    return (
        <div className="profile-card">
            <div className="profile-image">
                <img src={profileData.image} alt="Profile" />
            </div>
            <div className="profile-details">
                <h2>{profileData.name}</h2>
                <p>{profileData.message}</p>
                <div className="social-links">
                    <a href={profileData.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <IonIcon icon={logoTwitter} />
                    </a>
                    <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <IonIcon icon={logoLinkedin} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
