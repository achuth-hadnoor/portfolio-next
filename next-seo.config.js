const title = 'Achuth Hadnoor – Developer, writer, maker.';
const description =
  'Developer, JavaScript enthusiast, and product maker.';

const SEO = {
  title,
  description,
  canonical: 'https://achuth.now.sh',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://achuth.now.sh',
    title,
    description,
    images: [
      {
        url: 'https://achuth.now.sh/static/images/og.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@achuth_hadnoor',
    site: '@achuth_hadnoor',
    cardType: 'summary_large_image'
  }
};

export default SEO;