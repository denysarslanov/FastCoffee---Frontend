const config = {
    nav : {
        index: '/' as const,
        items: 'coffee/' as const,
        group: 'coffee/'as const ,
        privacyPolicy: 'privacyPolicy' as const,
        terms: 'terms' as const,
        item: '/products' as const
    },
    
    apiUrl: {
        baseApiUrl: 'http://localhost:3001/coffee',
        getCustomization: 'customization/',
        groups: 'groups',
        coffeeByGroupName: '',
        randomCoffee: 'random/',
        coffeeByUrl: 'coffeeList/'
    }
} 

const navLinks = Object.values(config.nav)
export type NavigationLinks = typeof navLinks[number]

export default config