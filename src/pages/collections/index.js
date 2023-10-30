import React, { Component } from "react";
import Layout from '@theme/Layout';
// import ListRowCard from '@site/src/components/ListRowCard';
import ImageGallery from "./ImageGallery";


const images = [
  "./img/200 (1).webp",
  "./img/200 (2).webp",
  "./img/200 (3).webp",
  "./img/200 (4).webp",
  "./img/200 (5).webp",
  "./img/200 (6).webp",
  "./img/200 (7).webp",
  "./img/200 (8).webp",
  "./img/cat.webp",
  "./img/code.webp",
  // Add more image paths here
];


export default function Collections() {
  return (
    <Layout
      title="Collections"
      description="Image Gallery">
      <main>
        <ImageGallery images={images} />
      </main>
    </Layout>
  );
}