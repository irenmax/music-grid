var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'ubicomp_ue',
        repo: 'https://github.com/irenmax/music-grid', // Update to point to your repository  
        user: {
            name: 'irenmax', // update to use your name
            email: 'max.irendorfer@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)