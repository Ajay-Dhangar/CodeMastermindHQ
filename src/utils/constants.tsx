import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

interface Category {
  name: string;
  icon: JSX.Element;
}

export const categories: Category[] = [
  { name: 'New', icon: <HomeIcon /> },
  { name: 'CodeMastermindQ', icon: <CodeIcon /> },
  { name: 'Coding', icon: <CodeIcon /> },
  { name: 'ReactJS', icon: <CodeIcon /> },
  { name: 'NextJS', icon: <CodeIcon /> },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon /> },
  { name: 'Podcast', icon: <GraphicEqIcon /> },
  { name: 'Movie', icon: <OndemandVideoIcon /> },
  { name: 'Gaming', icon: <SportsEsportsIcon /> },
  { name: 'Live', icon: <LiveTvIcon /> },
  { name: 'Sport', icon: <FitnessCenterIcon /> },
  { name: 'Fashion', icon: <CheckroomIcon /> },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon /> },
  { name: 'Comedy', icon: <TheaterComedyIcon /> },
  { name: 'Gym', icon: <FitnessCenterIcon /> },
  { name: 'Crypto', icon: <DeveloperModeIcon /> },
];

export const demoThumbnailUrl = 'https://user-images.githubusercontent.com/99037494/219045173-5c07392a-737b-4acb-82bd-85df924e6e9f.png';
export const demoChannelUrl = '/channel/UCYGChuz0YqmljjCEDvNYndg';
export const demoVideoUrl = '/video/fiXdHkLrpfo';
export const demoChannelTitle = 'CodeMastermindHQ';
export const demoVideoTitle = 'Discover a New Way to Watch YouTube - Introducing the Aid-Free YouTube Clone #youtube #socialmedia';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png';
