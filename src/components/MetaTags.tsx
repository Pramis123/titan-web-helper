
import React from 'react';
import { Helmet } from 'react-helmet-async';

type MetaTagsProps = {
  title: string;
  description: string;
  canonicalUrl?: string;
  imageUrl?: string;
};

export const MetaTags = ({
  title,
  description,
  canonicalUrl,
  imageUrl = "https://titanklincleaning.com/og-image.jpg",
}: MetaTagsProps) => {
  const siteUrl = "https://titanklincleaning.com";
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default MetaTags;
