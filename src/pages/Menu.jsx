import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Utensils,
    GlassWater,
    Soup,
    ChefHat,
    Cookie,
    Wine,
    Coffee,
    Sun,
    ScrollText
} from 'lucide-react';
import banner from "../images/menu/menu-banner.jpg"
// --- 1. Tailwind Configuration and Utility Constants ---

// NEW: Hero Image URL Constant (A high-quality image of a luxurious dining setting)
const HERO_IMAGE_URL = banner;


// --- 2. Data Structure ---

const menuSections = [
    {
        id: 'kadhai-se',
        title: 'Indian Kadhai Se',
        icon: ChefHat,
        items: [
            'Shahi Paneer', 'Paneer Butter Masala', 'Paneer Makhanwala', 'Paneer Do Pyaza',
            'Paneer Lababdar', 'Paneer Methi Malai', 'Teen Mirchi Ka Paneer', 'Paneer Tikka Masala',
            'Paneer Bhurji', 'Matar Paneer', 'Veg Jalfrezi', 'Dum Aloo Kashmiri/Banarasi',
            'Dal Makhani', 'Special Dal Devrana', 'Punjabi Dal Tadka', 'Dal Bukhara',
            'Dal Dhaba', 'Chana Masala', 'Mix Veg.', 'Gobhi Aloo Masala', 'Matar Methi Malai',
            'Vegetable Kofta Curry', 'Hyderabadi Soya Chaap Masala', 'Makhmali Malai Kofta',
            'Mushroom Masala', 'Jeera Aloo', 'Palak Paneer', 'Matar Mushroom', 'Veg Kolhapuri'
        ]
    },
    {
        id: 'starters',
        title: 'Starters',
        icon: Utensils,
        items: [
            'Punjabi Paneer Tikka', 'Paneer Tikka Shashlik', 'Achari Paneer Tikka',
            'Paneer Malai Mirch Tikka', 'Paneer 65', 'Tandoori Soya Chaap', 'Malai Soya Chaap',
            'Harayali Subzi Kebab', 'Dahi Ke Mushroom', 'Dahi Ke Sholey', 'Dahi Kebab',
            'Tandoori Mushroom', 'Chilly Paneer', 'Chilly Mushroom', 'Veg. Salt & Pepper',
            'Crispy Corn Pepper', 'Honey Chilly Potato', 'Veg. Spring Roll', 'Vegetable Manchurian',
            'Cheese Corn Roll', 'Indian Veg. Sizzler (Paneer Tikka/Malai Soya Chaap/Delhi Ke Kabab/Haryali Kabab)',
            'Chinese Veg. Platter (Chilly Paneer/Chilly Mushroom/Chilly Potato/Veg. Spring Roll)',
            'Stuff Mushroom', 'Chilly Soya Dry', 'Paneer Papdi'
        ]
    },
    {
        id: 'all-time',
        title: 'All Time & Global Favorites',
        icon: Utensils,
        items: [
            'Special Parantha with curd (2 piece) (Aloo/Pyaz/Paneer/Mooli/Gobhi/Mix with Home Made Butter and Chhach)',
            'Assorted Vegetable Pakoda', 'Paneer Pakoda', 'Burger & Fries (2 Pieces)',
            'Vegetable & Cheese Sandwich', 'Vegetable Club Sandwich', 'Corn & Cheese Grilled Sandwich',
            'Garlic Bread with Cheese',
            'Farm Picked Vegetable Pizza', 'Pizza Margherita', 'Paneer Tikka Pizza', 'Grilled Vegetable Pizza', 'Corn & Capsicum Pizza',
            'Paneer Tikka Roomal Wrap', 'French Fries', 'Bombay Masala Cheese Sandwich', 'Mushroom Cheese Sandwich', 'Paneer Tikka Cheese Sandwich',
            'Oriental Specialities (Manchurian Dry/Gravy, Vegetable Fried Rice, Hakka Noodles, Chilly Garlic Noodles, Chilly Paneer Dry/Gravy)',
            'Pastas (Makhni, Red Sauce, White Sauce, Mix Sauce)'
        ]
    },
    {
        id: 'tandoor-rice',
        title: 'Tandoor Se & Basmati Ki Khushboo',
        icon: Utensils,
        items: [
            'Tandoori Roti/Butter', 'Lachcha Parantha', 'Pudina Parantha', 'Mirchi Parantha (Green/Red)',
            'Plain Naan', 'Butter Naan', 'Lehsuni Naan', 'Stuffed Naan', 'Amritsari Kulcha',
            'Special Stuffed Kulcha', 'Missi Roti',
            '—', // Separator
            'Lucknowi Subzi Biryani', 'Vegetable Pulao', 'Hare Matar Ka Pulao', 'Kashmiri Pulao',
            'Jeera Rice', 'Steamed Rice'
        ]
    },
    {
        id: 'dahi-dessert',
        title: 'Matke Ki Dahi & Mithas Jindagi Ki',
        icon: Cookie,
        items: [
            'PLAIN CURD', 'MIX RAITA', 'PINEAPPLE RAITA', 'MINT RAITA',
            'BOONDI RAITA', 'BURANI RAITA', 'ALOO RAITA', 'PLAIN RAITA',
            '—', // Separator
            'Matka Kulfi', 'Kesariya Phirni', 'Gulab Jamun', 'Choice of Ice Cream',
            'Nutty Chocolate Brownie with Vanilla Ice Cream', 'Rasmalai (2pcs)'
        ]
    },
];

const soupSaladBreakfast = [
    {
        id: 'soup-salad',
        title: 'Shorba & Salad',
        icon: Soup,
        sections: [
            {
                subtitle: 'Shorba & Soup',
                items: ['Cream of Tomato', 'Tamatar Dhania Ka Shorba', 'Lemon Coriander Soup', 'Hot & Sour Soup', 'Talumen Soup', 'Manchow Soup', 'Vegetable Sweet Corn', 'Cream of Mushroom & Broccoli', 'Cream of Vegetable', 'Veg. Lung Fung']
            },
            {
                subtitle: 'Salad & Papad',
                items: ['Garden Fresh Green Salad', 'Tossed Salad', 'Onion Salad Platter', 'Potato Chana Chaat', 'Peanut Masala', 'Papad', 'Masala Papad', 'Aloo Chana Chaat', 'Chana Chaat']
            }
        ]
    },
    {
        id: 'breakfast',
        title: 'Breakfast & Combos',
        icon: Sun,
        sections: [
            {
                subtitle: 'Breakfast Menu',
                items: ['Special Parantha with curd (2 piece) (Aloo/Pyaz/Paneer/Mooli/Gobhi/Mix with Home Made Butter and Chhach)', 'Fresh Fruit Platter', 'Vegetable Cutlets', 'Bread Toast with Butter (4 Pieces)', 'Poori Bhaji (4 Pieces)', 'Choley Bhature (2 Pieces)', 'Vegetable & Cheese Sandwich', 'Bombay Masala Cheese Sandwich', 'Mushroom Cheese Sandwich', 'Paneer Tikka Cheese Sandwich']
            },
            {
                subtitle: 'Combos',
                items: ['Dal Chawal', 'Rajma Chawal', 'Chole Chawal', 'Chole Amritsari Kulcha']
            }
        ]
    }
];

const beverages = [
    { title: 'Masala Tea', type: 'Hot Beverages' },
    { title: 'Hot Coffee', type: 'Hot Beverages' },
    { title: 'Mint Mojito', type: 'Cold Beverages' },
    { title: 'Masala Butter Milk', type: 'Cold Beverages' },
    { title: 'Fresh Lime Soda', type: 'Cold Beverages' },
    { title: 'Cold Coffee/with Ice cream', type: 'Cold Beverages' },
    { title: 'Lassi (Sweet/Salt)', type: 'Cold Beverages' },
    { title: 'Pineapple Shake', type: 'Cold Beverages' },
    { title: 'Strawberry Shake', type: 'Cold Beverages' },
    { title: 'Chocolate Shake', type: 'Cold Beverages' },
    { title: 'Bottled Water', type: 'Bottled' },
];

const wineBar = [
    { name: 'Vodka', brands: ['Smirnoff', 'Magic Moments orange', 'Belvedere', 'Romanov'] },
    { name: 'Tequila', brands: ['Sauza', 'Don Julio', 'Casamigos'] },
    { name: 'Beers', brands: ['Carlsberg', 'Kingfisher', 'Heineken', 'Budweiser', 'Tuborg', 'Haywards 5000'] },
    { name: 'Mocktails', brands: ['Herb Soda', 'Veggnog (Vegan Eggnog)', 'Coconut Brazilian Lemonade'] },
];

// --- 3. Components ---

const MenuItem = ({ name }) => (
    <motion.li
        className="p-3 border-b border-color-primary/10 hover:bg-color-primary/5 transition duration-300 rounded-lg cursor-pointer flex justify-between items-center"
        whileHover={{ scale: 1.02, x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        <span className="text-stone-800 tracking-wide">{name}</span>
        {/* Placeholder for Price */}
        <span className="text-color-secondary font-bold text-lg"></span>
    </motion.li>
);

// UPDATED: Now accepts 'children' and renders them if 'items' is empty,
// allowing complex components like BeverageSection to use the same title styling.
const MenuSection = ({ id, title, icon: Icon, items, delay, children }) => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: delay * 0.1,
                duration: 0.6,
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    const isSimpleList = items && items.length > 0;
    useEffect(() => {


        window.scrollTo(0, 0);
    })
    return (
        <motion.section
            id={id}
            className="mb-12 pt-16 -mt-16 sm:pt-20 sm:-mt-20 scroll-mt-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <motion.h2
                className="text-4xl sm:text-5xl font-serif font-bold text-color-primary mb-6 border-b-4 border-color-secondary/50 pb-2 flex items-center gap-4 tracking-tight"
                variants={itemVariants}
            >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-color-secondary" />
                {title}
            </motion.h2>

            {isSimpleList ? (
                <motion.ul
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-6"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.05
                            }
                        }
                    }}
                >
                    {items.map((item, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            {item === '—' ? (
                                <li className="col-span-1 md:col-span-2 text-center text-color-secondary/70 italic my-3 text-lg">
                                    ***
                                </li>
                            ) : (
                                <MenuItem name={item} />
                            )}
                        </motion.div>
                    ))}
                </motion.ul>
            ) : (
                // Renders specialized content components like BeverageSection or WineBarSection
                children
            )}
        </motion.section>
    );
};

const BeverageSection = () => {
    const groupedBeverages = beverages.reduce((acc, beverage) => {
        acc[beverage.type] = acc[beverage.type] || [];
        acc[beverage.type].push(beverage.title);
        return acc;
    }, {});

    return (
        // Adjusted grid layout for better spacing in the wider column
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {Object.entries(groupedBeverages).map(([type, drinks], index) => (
                <motion.div
                    key={type}
                    className="bg-white p-6 rounded-xl shadow-xl border border-color-secondary/30 transition-all hover:shadow-2xl hover:border-color-secondary"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                    <h3 className="text-2xl font-serif font-semibold text-color-primary mb-4 border-b pb-2 flex items-center gap-2">
                        {type === 'Hot Beverages' ? <Coffee className="w-5 h-5" /> : type === 'Cold Beverages' ? <GlassWater className="w-5 h-5" /> : null}
                        {type}
                    </h3>
                    <ul className="space-y-2">
                        {drinks.map((drink, i) => (
                            <MenuItem key={i} name={drink} />
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
    );
};

const WineBarSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4 mt-6">
            {wineBar.map((category, index) => (
                <motion.div
                    key={index}
                    className="rounded-xl shadow-md border border-color-primary/30 overflow-hidden bg-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full text-left p-4 bg-color-primary/10 hover:bg-color-primary/20 transition duration-300 flex justify-between items-center text-xl font-serif font-semibold text-color-primary"
                    >
                        {category.name}
                        <motion.span
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-color-secondary"
                        >
                            &#9660;
                        </motion.span>
                    </button>
                    <motion.div
                        initial={false}
                        animate={{ height: openIndex === index ? 'auto' : 0 }}
                        className="overflow-hidden bg-white"
                    >
                        <div className="p-4 pt-2">
                            <p className="text-sm text-stone-600 mb-2 italic">Available Brands:</p>
                            <ul className="list-disc list-inside space-y-1 pl-4">
                                {category.brands.map((brand, i) => (
                                    <li key={i} className="text-stone-700">{brand}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
            <motion.p
                className="text-center italic text-stone-600 pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5 }}
            >
                Ek Bar offers more than just drinks—it’s a place to connect, relax, and create memories with friends and family in a warm, welcoming environment unique to Devrana.
            </motion.p>
        </div>
    );
};


const NavSidebar = ({ sections }) => {
    const [activeSection, setActiveSection] = useState('kadhai-se');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px', // Adjust sensitivity
                threshold: 0,
            }
        );

        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [sections]);

    const handleScrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    const navItems = sections.map(sec => ({
        id: sec.id,
        title: sec.title.split(' ')[0],
        icon: sec.icon
    }));

    return (
        <div className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 p-4 bg-primary backdrop-blur-sm rounded-r-2xl shadow-2xl z-50 border-r border-y border-color-secondary/50">
            <h3 className="text-lg font-serif font-bold text-white mb-3 px-2 border-b-2 border-color-Secondary/50 pb-1">Menu Guide</h3>
            <nav className="flex flex-col space-y-2">
                {navItems.map(item => (
                    <motion.button
                        key={item.id}
                        onClick={() => handleScrollTo(item.id)}
                        className={`flex items-center gap-3 p-2 rounded-lg text-sm transition duration-300 font-serif ${activeSection === item.id
                                ? 'bg-Secondary text-white shadow-md'
                                : 'text-white hover:bg-Secondary'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <item.icon className="w-5 h-5" />
                        {item.title}
                    </motion.button>
                ))}
            </nav>
        </div>
    );
};


// --- 4. Main App Component ---

const Menu = () => {
    // Define all sections (used for NavSidebar and rendering order)
    const allSections = [
        ...menuSections,
        ...soupSaladBreakfast.map(s => ({
            ...s,
            items: s.sections.flatMap(sub => sub.items)
        })),
        {
            id: 'beverages',
            title: 'Beverage Menu',
            icon: Coffee,
            isSpecial: true,
            component: BeverageSection
        },
        {
            id: 'wine-bar',
            title: 'Wine & Bar Selection',
            icon: Wine,
            isSpecial: true,
            component: WineBarSection
        }
    ];

    // Filter sections that should appear in the navigation sidebar
    const navSections = allSections.filter(s => !s.isSpecial);

    return (
        <>
         
            <div className="font-serif bg-background-light min-h-screen text-stone-800 pt-32">

                {/* HERO BANNER SECTION */}
                <div
                    className="relative h-[60vh] bg-cover bg-center shadow-2xl"
                    style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
                >
                    {/* Overlay for contrast and readability */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <motion.header
                            className="text-center p-8"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h1
                                className="text-7xl sm:text-8xl font-serif font-extrabold text-white tracking-tighter drop-shadow-lg"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                            >
                                The Devrana
                            </motion.h1>
                            <motion.p
                                className="text-3xl sm:text-4xl font-serif italic text-white mt-4 drop-shadow-md"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                A Symphony of Spice and Luxury
                            </motion.p>
                            <p className="text-lg text-white/90 mt-6 font-light">
                                Contact: +91-7060-301-700
                            </p>
                        </motion.header>
                    </div>
                </div>
                {/* END HERO BANNER */}

                <NavSidebar sections={navSections} />

                {/* Main content uses full width, with left padding for fixed nav on large screens */}
                <main className="max-w-6xl mx-auto p-4 sm:p-8 lg:pl-16 relative z-10  bg-background-light rounded-t-xl shadow-2xl">

                    {/* Menu Sections Container - now a single column on all screens */}
                    <div>
                        {/* 1. Standard Menu Sections */}
                        {menuSections.map((section, index) => (
                            <MenuSection
                                key={section.id}
                                {...section}
                                delay={index}
                            />
                        ))}

                        {/* 2. Combined/Special Sections (Soup, Salad, Breakfast) */}
                        {soupSaladBreakfast.map((group, groupIndex) => (
                            <motion.section
                                id={group.id}
                                key={group.id}
                                className="mb-12 pt-16 -mt-16 sm:pt-20 sm:-mt-20 scroll-mt-20"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ delay: (menuSections.length + groupIndex) * 0.1, duration: 0.6 }}
                            >
                                <h2 className="text-4xl sm:text-5xl font-serif font-bold text-color-primary mb-6 border-b-4 border-color-secondary/50 pb-2 flex items-center gap-4 tracking-tight">
                                    <group.icon className="w-8 h-8 sm:w-10 sm:h-10 text-color-secondary" />
                                    {group.title}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {group.sections.map((sub, subIndex) => (
                                        <div key={subIndex} className="bg-white p-6 rounded-xl shadow-lg border border-color-primary/10">
                                            <h3 className="text-2xl font-serif font-semibold text-color-secondary mb-4">{sub.subtitle}</h3>
                                            <ul className="space-y-2">
                                                {sub.items.map((item, i) => (
                                                    <MenuItem key={i} name={item} />
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        ))}

                        {/* 3. WIDER BEVERAGES SECTION (Now integrated into main content flow) */}
                        <MenuSection
                            id="beverages"
                            title="Beverage Menu"
                            icon={Coffee}
                            items={[]}
                            delay={allSections.findIndex(s => s.id === 'beverages')}
                        >
                            <BeverageSection />
                        </MenuSection>

                        {/* 4. WIDER WINE & BAR SECTION (Now integrated into main content flow) */}
                        <MenuSection
                            id="wine-bar"
                            title="Wine & Bar Selection"
                            icon={Wine}
                            items={[]}
                            delay={allSections.findIndex(s => s.id === 'wine-bar')}
                        >
                            <WineBarSection />
                        </MenuSection>

                    </div>
                </main>
            </div>
        </>
    );
};

export default Menu;
