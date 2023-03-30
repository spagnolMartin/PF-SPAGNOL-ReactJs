const products = [
    {
        brand: "The North Face",
        categories: ["Clothes", "Men", "All"],
        img: "https://i.ibb.co/SJZPXQm/tnt-Snow-Jacket.jpg",
        name: "Black Snow Jacket",
        description: "The Men’s Clement Triclimate® Jacket has the features and flexibility to be a go-to in all conditions. This versatile jacket pairs a breathable, waterproof shell with an insulated zip-in liner jacket.",
        price: 250,
        stock: 100
    },
    {
        brand: "Salomon",
        categories: ['Sports', 'Men', 'All'],
        img:"https://i.ibb.co/MGKWWTP/salomon-Skis.png",
        name: "Men's Skis",
        description: "This go-to all mountain carver pairs Metal Twin Frame construction with a progressive sidecut to make skiing the groomers, trees, and moguls a breeze. The two titanal plates enhance edge grip, for poppy yet powerful turns.",
        price: 500,
        stock: 10  
    },
    {
        brand: "The North Face",
        categories: ['Clothes', 'Men', 'All'],
        img: "https://i.ibb.co/Ttfy339/tnt-Snow-Pants.jpg",
        name: "Orange Snow Pants",
        description: "This leveled-up version of our Men’s Freedom Pants also have the Heatseeker™ Eco insulation to go with waterproof, breathable performance, durability, and all-conditions style.",
        price: 200,
        stock: 100
    },
    {
        brand: "Patagonia",
        categories: ['Clothes', 'Women', 'All'],
        img: "https://i.ibb.co/jvtTC3Y/patagonia-Snow-Pants.jpg",
        name: "Wmn's Snowpants",
        description: "Focused on versatility and mobility, the Patagonia Insulated Powder Town women's snow pants keep you warm and protected with a 2-layer weatherproof shell, cozy insulation and an articulated fit.",
        price: 180,
        stock: 100
    },
    {
        brand: "Burton",
        categories: ['Sports', 'Men', 'All'],
        img: "https://i.ibb.co/wg6HpWn/burton-Bindings.jpg",
        name: "Men's SnowBoarding Bindings",
        description: "No need to compromise comfort and performance for strength and reliability when you're riding the men's Burton Mission Snowboard Bindings. As the workhorse of Burton's lineup, these do-it-all bindings offer pro-grade features like ergonomic hi-backs with freestyle-minded zero forward lean, and the gapless fit and comfort of ergonomic straps with unstoppable Smooth Glide buckles. Re:Flex baseplates are universally compatible, so you can choose any board in the shop.", 
        price: 320,
        stock: 100
    },
    {
        brand: "Salomon",
        categories: ['Sports', 'All'],
        img: "https://i.ibb.co/svnWs6d/salomon-Ski-Poles.jpg",
        name: "Ski Poles",
        description: "For skiers wanting a reliable pole without compromising on performance. The SC1 ERGO S3 combines quick and adjustable click-in, click-out technology with a robust shaft while maintaining the lightness every skier seeks.",
        price: 100,
        stock: 10
    },
    {
        brand:"Patagonia",
        categories: ['Clothes', 'Men', 'All'],
        img: "https://i.ibb.co/0Q7KL71/pat-Snow-Jacket-M.jpg",
        name: "Men's Blue Snow Jacket",
        description: "The Men's Blue Snow Jacket has an articulated fit, mesh liner and is waterproof, breathable, and windproof. Fully featured for versatility and focused on mobility, the Snowshot Jacket has an H2No® Performance Standard 2-layer shell for waterproof/breathable and windproof protection, an articulated fit for freedom of movement and a smooth mesh liner for comfort and easy layering. Fair Trade Certified™ sewn.",
        price: 220,
        stock: 10
    },
    {
        brand: "Patagonia",
        categories: ['Clothes', 'Men', 'Women', 'All'],
        img: "https://i.ibb.co/jb5HR7d/patagonia-Snow-Beanie.jpg",
        name: "Winter Beanie hat",
        description: "A year-round, low-volume knit hat for any outdoor pursuit. Made of 100% recycled polyester and has a secure fit. Fair Trade Certified™ sewn.",
        price: 25,
        stock: 50
    },
    {
        brand: "Dometic",
        categories: ['Camping', 'All'],
        img: "https://i.ibb.co/D1YXCZ5/dometic-Tent.jpg",
        name: "Awesome Tent",
        description: "Experience family camping vacations like never before with the Dometic Rarotonga FTT REDUX. Constructed with all-new Weathershield™ REDUX polyester, woven with recycled plastic bottle yarn, this inflatable tent is lightweight and extremely reliable too. Mesh windows with zipped blinds and the recycled oxford polyester groundsheet add comfort and provide reliable performance as you explore the outdoors.",
        price: 2000,
        stock: 5
    },
    {
        brand: "Stanley",
        categories: ['Camping', 'All'],
        img: "https://i.ibb.co/vBdPS99/stanley-Classic.jpg",
        name: "Classic Bottle",
        description: "Made for workdays, vacation days and every day — the Adventure To-Go Bottle is modern in its design and enduring in its performance. The streamlined style allows for convenient packing and carrying, perfect for any adventure indoors or out.​ Keep your favorite drinks hot or cold for hours with Stanley’s double-wall vacuum insulation. This sleek bottle includes a pour-through stopper for greater control to prevent splashes – whether you’re toting hot brew or cold. The insulated lid doubles as a cup for easy sipping wherever you go.​",
        price: 45,
        stock: 20
    },
    {
        brand: "Burton",
        categories: ['Sports', 'Men', 'All'],
        img: "https://i.ibb.co/dpFY5Bk/burton-Snowboard.jpg",
        name: "Men's Snowboard",
        description: "Slash and grab some good times on the Burton Slush Puppy Snowboard. The 3D boat-hull-inspired nose plows through spring chunder with a playful, buttery feel. Whether you're riding switch or regular, its fully symmetrical twin flex gives you the stability to ride through fresh spring slush rain or shine.",
        price: 380,
        stock: 20
    },
    {
        brand: "Salomon",
        categories: ['Sports', 'Men', 'All'],
        img: "https://i.ibb.co/vmKFGkR/salomon-Ski-Boots.jpg",
        name: "Men's Ski Boots",
        description: "Finding the perfect balance between performance and comfort is no easy task. With its easy step-in, customizable MY CUSTOMFIT 4D liner and full customization capabilities of the shell, this is the high-performing, perfectly fitting boot you have been waiting for. It's Gripwalk premounted for more safety grip & walking comfort.",
        price: 220,
        stock: 10
    },
    {
        brand:"Coleman",
        categories: ["Camping", "All"],
        img: "https://i.ibb.co/DbvmLyZ/coleman-Tent.jpg",
        name: "Coleman Tent",
        description: " The Coleman® Skylodge™ Instant Camping Tent takes just about a minute to set up. Telescoping pre-attached poles offer easy, intuitive setup so you spend less time pitching the tent and more time relaxing around the campfire. The convertible screen room features floor-to-ceiling windows and a room divider that creates a separate space for lounging, sleeping, or storing gear. Rain in the forecast? This tent features the WeatherTec™ system, with welded corners and inverted seams that help keep you and your gear dry.",
        price: 800,
        stock: 10
    },
    {
        brand: "Burton",
        categories:['Sports', "Men", "All"],
        img: "https://i.ibb.co/Y287PwN/burton-Boots.jpg",
        name: "Men's Snowboarding Boots",
        description: "Raise the bar on control and convenience. The men's Ruler Step On® Snowboard Boots combine the micro-adjustable fit of the BOA® Fit System with the simplicity of Step On binding compatibility to create a boot that makes it easy to go bigger, faster, and explore further. Warm feet are the norm thanks to the insulated, heat-reflective liner tech. A fuzzy lining doesn't hurt either.",
        price: 250,
        stock: 15
    }
]

export default products;