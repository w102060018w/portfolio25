// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//     output: 'export',

//     // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
//     // trailingSlash: true,

//     // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//     // skipTrailingSlashRedirect: true,

//     // Optional: Change the output directory `out` -> `dist`
//     // distDir: 'dist',
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'portfolio25'   // ← replace with your actual repo name
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,    // ← turn off the default loader
    },
    
    // so that all /_next/* URLs get prefixed with /your-repo
    assetPrefix: isProd ? `/${repoName}/` : '',
    // so that Next’s router knows that "/" really lives at "/your-repo/"
    basePath: isProd ? `/${repoName}` : '',
    trailingSlash: true,                // makes each page output as folder/index.html
}

module.exports = nextConfig