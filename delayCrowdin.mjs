/**
 * @param {number} ms
 */
async function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  if (
    process.env.NETLIFY === 'true' &&
    process.env.SITE_NAME === 'docusaurus-i18n-staging'
  ) {
    console.log(
      '[Crowdin] Delaying the docusaurus-i18n-staging deployment to avoid 409 errors',
    );
    await delay(30000);
  }