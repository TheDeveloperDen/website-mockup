module.exports = {
    content: [
        "./node_modules/flowbite/**/*.js",
        "./src/index.html",
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        fontFamily: {
            'montserrat': ['Montserrat', 'sans-serif'],
            'cascadia': ['Cascadia Code', 'monospace'],
        },
        extend: {
            colors: {
                'deep-blue': '#171834',
                'deeper-blue': '#111228',
                'teal': '#00afc3',
                'pink': '#ff52f9',
                'indigo': '#8099ff'
            }
        }
    },
    plugins: [
        // require('flowbite/plugin')
    ]
}
