export const projects = [
    {
        title: 'Sport Betting Website',
        description : 'UI/UX design with animations for a Korean Client',
        tech : 'Figma',
        category: 'Design',
        images: [
            require('../../Images/Web/Design/Sport Betting live event.png'),
            require('../../Images/Web/Design/Sport Betting e sports.png'),
            require('../../Images/Web/Design/Sport Betting calendar.png'),
            require('../../Images/Web/Design/Sport Betting multi view.png'),
            require('../../Images/Web/Design/Sport Betting result center.png'),
            require('../../Images/Web/Design/Sport Betting sport event.png')
        ]
    },
    {
        title: 'Safe Ride',
        description: 'School bus live tracking app',
        tech: 'Figma',
        category: 'Mobile App Design',
        images: [
            require('../../Images/Web/Design/saferide/saferide login.jpg'),
            require('../../Images/Web/Design/saferide/saferide Sign Up.jpg'),
            require('../../Images/Web/Design/saferide/saferide Verify- Email.jpg'),
            require('../../Images/Web/Design/saferide/saferide parent.jpg'),
            require('../../Images/Web/Design/saferide/saferide add card.jpg'),
            require('../../Images/Web/Design/saferide/saferide calendar child.jpg'),
            require('../../Images/Web/Design/saferide/saferide child Profile details - edit.jpg'),
            require('../../Images/Web/Design/saferide/saferide view Profile - bus profile details page - paid.jpg')
        ]
    },
    {
        title: 'SkyNet',
        description : 'Trading simulator with three charts',
        tech : 'React, Firebase Auth, Firebase Realtime Database, Firebase web hosting',
        category: 'Design and Development',
        images: [
            require('../../Images/Web/Dev/SkyNet1.png'),
            require('../../Images/Web/Dev/SkyNet2.png'),
            require('../../Images/Web/Dev/SkyNet3.png'),
            require('../../Images/Web/Dev/SkyNet4.png'),
            require('../../Images/Web/Dev/SkyNet5.png'),
            require('../../Images/Web/Dev/SkyNet6.png'),
            require('../../Images/Web/Dev/SkyNet7.png'),
            require('../../Images/Web/Dev/SkyNet8.png')
        ]
    },
    {
        title: 'Car Swipe',
        description : 'Profile page redesign for car selling app',
        tech : 'Figma',
        category: 'Mobile App Design',
        images: [
            require('../../Images/Web/Design/CarSwipe/Profile V1.jpg'),
            require('../../Images/Web/Design/CarSwipe/Profile V2.jpg'),
            require('../../Images/Web/Design/CarSwipe/Profile V3.jpg'),
            require('../../Images/Web/Design/CarSwipe/Profile V4.jpg')
        ]
    },
    {
        title : 'Vogue Vibes',
        description: 'Beauty Saloon landing page template',
        tech : 'React, Firebase web hosting',
        category: 'Design and Development',
        images: [
            require('../../Images/Web/Dev/vibes1.png'),
            require('../../Images/Web/Dev/vibes2.png'),
            require('../../Images/Web/Dev/vibes3.png'),
            require('../../Images/Web/Dev/vibes4.png'),
            require('../../Images/Web/Dev/vibes5.png'),
            require('../../Images/Web/Dev/vibes6.png')
        ]
    },
    {
        title : 'Client Portal',
        description: 'Landing page template developed for a software company',
        tech : 'React, Firebase web hosting',
        category: 'Design and Development',
        images: [
            require('../../Images/Web/Dev/client go 1.png'),
            require('../../Images/Web/Dev/client go 2.png'),
            require('../../Images/Web/Dev/client go 3.png'),
            require('../../Images/Web/Dev/client go 4.png'),
            require('../../Images/Web/Dev/client go 5.png'),
            require('../../Images/Web/Dev/client go 6.png'),
            require('../../Images/Web/Dev/client go 7.png'),
            require('../../Images/Web/Dev/client go 8.png'),
            require('../../Images/Web/Dev/client go 9.png'),
        ]
    }
]
export const filterProjects = (projects, selectedCategory) => {
    if (selectedCategory === 'All') {
        return projects;
    } else {
        return projects.filter(project => project.category === selectedCategory);
    }
};