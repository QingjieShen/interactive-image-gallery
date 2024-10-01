const body = document.querySelector('body')
const homePage = document.getElementById('home-page')
const jeepCarGalleryPage = document.getElementById('used-car-page')
const chevCarGalleryPage = document.getElementById('chev-car-page')
const audiCarGalleryPage = document.getElementById('audi-car-page')
const eventPage = document.getElementById('event-page')
const britanniaBeachPage = document.getElementById('britannia-beach-page')
const carReturn = document.getElementById('car-return')
const chevReturn = document.getElementById('chev-return')
const audiReturn = document.getElementById('audi-return')
const eventReturn = document.getElementById('event-return')
const britanniaReturn = document.getElementById('britannia-return')

const jeepCarGallery = document.getElementById('jeep-car-gallery');
const chevCarGallery = document.getElementById('chev-car-gallery');
const audiCarGallery = document.getElementById('audi-car-gallery');
const canadaDayGallery = document.getElementById('canada-day-gallery');
const britanniaGallery = document.getElementById('britannia-gallery');

const jeepCarSet = document.getElementById('jeep-car-set')
const chevCarSet = document.getElementById('chevrolet-corvette-set')
const audiCarSet = document.getElementById('audi-a4-set')
const canadaDaySet = document.getElementById('canada-day-set')
const britanniaBeachSet = document.getElementById('britannia-beach-set')

// const modalImg = document.querySelectorAll('.modal-img')

const jeepCarPhotos = [] // will insert data later
const canadaDayPhotos = [
    {
        thumbnailSrc: `images/thumbnails/event/canada_day_1-600_x_399.jpg`,
        hdSrc: `images/hds/event/canada_day_1-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Lovely family"
    },
    {
        thumbnailSrc: `images/thumbnails/event/canada_day_2-600_x_400.jpg`,
        hdSrc: `images/hds/event/canada_day_2-1800_x_1199.jpg`,
        isVertical: false,
        caption: "Man walking his bike"
    },
    {
        thumbnailSrc: `images/thumbnails/event/canada_day_3-600_x_400.jpg`,
        hdSrc: `images/hds/event/canada_day_3-1800_x_1199.jpg`,
        isVertical: false,
        caption: "Men wearing Canada T-shirt"
    },
    {
        thumbnailSrc: `images/thumbnails/event/canada_day_7-600_x_399.jpg`,
        hdSrc: `images/hds/event/canada_day_7-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Senior couple in white"
    },
    {
        thumbnailSrc: `images/thumbnails/event/canada_day_8-600_x_399.jpg`,
        hdSrc: `images/hds/event/canada_day_8-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Senior couple in orange"
    },
    {
        thumbnailSrc: `images/thumbnails/event/canada_day_4-400_x_600.jpg`,
        hdSrc: `images/hds/event/canada_day_4-1200_x_1800.jpg`,
        isVertical: true,
        caption: "Senior couple holding hands"
    },
    {
        thumbnailSrc: `images/thumbnails/event/canada_day_5-400_x_600.jpg`,
        hdSrc: `images/hds/event/canada_day_5-1199_x_1800.jpg`,
        isVertical: true,
        caption: "Dad and daughtors"
    },
    {
        thumbnailSrc: `images/thumbnails/event/canada_day_6-400_x_600.jpg`,
        hdSrc: `images/hds/event/canada_day_6-1200_x_1800.jpg`,
        isVertical: true,
        caption: "Girls wearing Canada flag"
    },
    {
        thumbnailSrc: `images/thumbnails/event/canada_day_9-399_x_600.jpg`,
        hdSrc: `images/hds/event/canada_day_9-1199_x_1800.jpg`,
        isVertical: true,
        caption: "Stylish girl and her mom"
    }
]
const sceneryPhotos = [
    {
        thumbnailSrc: `images/thumbnails/scenery/britannia_bay_3-600_x_400.jpg`,
        hdSrc: `images/hds/scenery/britannia_bay_3-1800_x_1199.jpg`,
        isVertical: false,
        caption: "Swollen river bend"
    },
    {
        thumbnailSrc: `images/thumbnails/scenery/britannia_bay_5-600_x_399.jpg`,
        hdSrc: `images/hds/scenery/britannia_bay_5-1800_x_1200.jpg`,
        isVertical: false,
        caption: "People playing on the frozen river"
    },
    {
        thumbnailSrc: `images/thumbnails/scenery/britannia_bay_6-600_x_399.jpg`,
        hdSrc: `images/hds/scenery/britannia_bay_6-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Old man walking his dog on the frozen river"
    },
    {
        thumbnailSrc: `images/thumbnails/scenery/britannia_bay_7-600_x_399.jpg`,
        hdSrc: `images/hds/scenery/britannia_bay_7-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Sunset on frozen river"
    },
    {
        thumbnailSrc: `images/thumbnails/scenery/britannia_bay_8-600_x_399.jpg`,
        hdSrc: `images/hds/scenery/britannia_bay_8-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Girl under sunset"
    },
    {
        thumbnailSrc: `images/thumbnails/scenery/britannia_bay_9-600_x_399.jpg`,
        hdSrc: `images/hds/scenery/britannia_bay_9-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Flooded bench"
    },
    {
        thumbnailSrc: `images/thumbnails/scenery/britannia_bay_10-600_x_399.jpg`,
        hdSrc: `images/hds/scenery/britannia_bay_10-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Ducks on the water"
    },
    {
        thumbnailSrc: `images/thumbnails/scenery/britannia_bay_1-400_x_600.jpg`,
        hdSrc: `images/hds/scenery/britannia_bay_1-1199_x_1800.jpg`,
        isVertical: true,
        caption: "Cyclist stops to watch the sunset"
    },
    {
        thumbnailSrc: `images/thumbnails/scenery/britannia_bay_2-400_x_600.jpg`,
        hdSrc: `images/hds/scenery/britannia_bay_2-1199_x_1800.jpg`,
        isVertical: true,
        caption: "Young men palying on a narrow path over water"
    },
    {
        thumbnailSrc: `images/thumbnails/scenery/britannia_bay_4-400_x_600.jpg`,
        hdSrc: `images/hds/scenery/britannia_bay_4-1199_x_1800.jpg`,
        isVertical: true,
        caption: "Young couple leaning on each oter watching the sunset"
    },
    {
        thumbnailSrc: `images/thumbnails/scenery/britannia_bay_11-400_x_600.jpg`,
        hdSrc: `images/hds/scenery/britannia_bay_11-1199_x_1800.jpg`,
        isVertical: true,
        caption: "Reflection of tree on water"
    }    
]

const chevPhotos = [
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_1-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_1.jpg',
        isVertical: false,
        caption: "Swollen river bend"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_2-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_2.jpg',
        isVertical: false,
        caption: "People playing on the frozen river"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_3-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_3.jpg',
        isVertical: false,
        caption: "Old man walking his dog on the frozen river"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_4-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_4.jpg',
        isVertical: false,
        caption: "Sunset on frozen river"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_5-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_5.jpg',
        isVertical: false,
        caption: "Girl under sunset"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_6-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_6.jpg',
        isVertical: false,
        caption: "Flooded bench"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_7-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_7.jpg',
        isVertical: false,
        caption: "Ducks on the water"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_8-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_8.jpg',
        isVertical: true,
        caption: "Cyclist stops to watch the sunset"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_9-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_9.jpg',
        isVertical: true,
        caption: "Young men palying on a narrow path over water"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_10-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_10.jpg',
        isVertical: true,
        caption: "Young couple leaning on each oter watching the sunset"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_11-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_11.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_12-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_12.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_13-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_13.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_14-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_14.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_15-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_15.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_16-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_16.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    },
    {
        thumbnailSrc: './images/thumbnails/chevrolet/Clark_Shen_Photography_2024_17-600_x_400.jpeg',
        hdSrc: './images/hds/chevrolet/Clark_Shen_Photography_2024_17.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    }
]

const audiPhotos = [
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_2-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_2.jpg',
        isVertical: false,
        caption: "Swollen river bend"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_3-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_3.jpg',
        isVertical: false,
        caption: "People playing on the frozen river"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_5-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_5.jpg',
        isVertical: false,
        caption: "Old man walking his dog on the frozen river"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_6-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_6.jpg',
        isVertical: false,
        caption: "Sunset on frozen river"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_7-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_7.jpg',
        isVertical: false,
        caption: "Girl under sunset"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_8-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_8.jpg',
        isVertical: false,
        caption: "Flooded bench"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_9-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_9.jpg',
        isVertical: false,
        caption: "Ducks on the water"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_10-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_10.jpg',
        isVertical: true,
        caption: "Cyclist stops to watch the sunset"
    },
    {
       thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_11-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_11.jpg',
        isVertical: true,
        caption: "Young men palying on a narrow path over water"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_12-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_12.jpg',
        isVertical: true,
        caption: "Young couple leaning on each oter watching the sunset"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_14-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_14.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_15-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_15.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_17-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_17.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_19-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_19.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_21-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_21.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_22-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_22.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_23-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_23.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_24-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_24.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_25-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_25.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    },
    {
        thumbnailSrc: './images/thumbnails/audi/Clark_Shen_Photography_2024_26-600_x_400.jpeg',
        hdSrc: './images/hds/audi/Clark_Shen_Photography_2024_26.jpg',
        isVertical: true,
        caption: "Reflection of tree on water"
    }
]


// initialize jeepCarPhotos array
for (let i = 1; i <= 23; i++) {
    jeepCarPhotos.push(
        {
            thumbnailSrc: `images/thumbnails/used_cars/used_car_${i}-600_x_400.jpg`,
            hdSrc: `images/hds/used_cars/used_car_${i}-1800_x_1199.jpg`,
        },
    )
}

// inserts images and associated modals into galleries
jeepCarPhotos.forEach(photos => {
    jeepCarGallery.innerHTML += `
    <div class="img-container">
        <img src=${photos.thumbnailSrc} alt="Photo of a used Jeep Wrangler">
        <div class="modal">
            <img src=${photos.hdSrc} alt="Photo of a used Jeep Wrangler" class="modal-img horizontal">
            <p>Photo of a used Jeep Wrangler</p>
        </div>
    </div>
    `
})

chevPhotos.forEach(photos => {
    chevCarGallery.innerHTML += `
    <div class="img-container">
        <img src=${photos.thumbnailSrc} alt="Photo of a used Chevrolet Corvette">
        <div class="modal">
            <img src=${photos.hdSrc} alt="Photo of a used Chevrolet Corvette" class="modal-img horizontal">
            <p>Photo of a used Chevrolet Corvette</p>
        </div>
    </div>
    `
})

audiPhotos.forEach(photos => {
    audiCarGallery.innerHTML += `
    <div class="img-container">
        <img src=${photos.thumbnailSrc} alt="Photo of a used Audi A4">
        <div class="modal">
            <img src=${photos.hdSrc} alt="Photo of a used Audi A4" class="modal-img horizontal">
            <p>Photo of a used Audi A4</p>
        </div>
    </div>
    `
})

canadaDayPhotos.forEach(photos => {
    let alignClass = ""
    if (photos.isVertical) {
        alignClass = "vertical"
    } else {
        alignClass = "horizontal"
    }
    canadaDayGallery.innerHTML += `
    <div class="img-container">
        <img src=${photos.thumbnailSrc} alt="photo of people walking in front of the Parliament Hill">
        <div class="modal">
            <img src=${photos.hdSrc} alt="Photo of people walking in front of the Parliament Hill" class="modal-img ${alignClass}">
            <p>${photos.caption}</p>
        </div>
    </div>
    `
})

sceneryPhotos.forEach(photos => {
    let alignClass = ""
    if (photos.isVertical) {
        alignClass = "vertical"
    } else {
        alignClass = "horizontal"
    }
    britanniaGallery.innerHTML += `
    <div class="img-container">
        <img src=${photos.thumbnailSrc} alt="photo of Britannia Bay, Ottawa">
        <div class="modal">
            <img src=${photos.hdSrc} alt="photo of Britannia Bay, Ottawa" class="modal-img ${alignClass}">
            <p>${photos.caption}</p>
        </div>
    </div>
    `
})

const modalImg = document.querySelectorAll('.modal-img')

// pages show and hide set up
jeepCarSet.addEventListener('click', () => {
    homePage.classList.add('invisible')
    jeepCarGalleryPage.classList.remove('invisible')
    britanniaBeachPage.classList.add('invisible')
    eventPage.classList.add('invisible')
    chevCarGalleryPage.classList.add('invisible')
    audiCarGalleryPage.classList.add('invisible')
})

carReturn.addEventListener('click', () => {
    homePage.classList.remove('invisible')
    jeepCarGalleryPage.classList.add('invisible')
})

chevCarSet.addEventListener('click', () => {
    homePage.classList.add('invisible')
    chevCarGalleryPage.classList.remove('invisible')
    jeepCarGalleryPage.classList.add('invisible')
    britanniaBeachPage.classList.add('invisible')
    eventPage.classList.add('invisible')
    audiCarGalleryPage.classList.add('invisible')
})

chevReturn.addEventListener('click', () => {
    homePage.classList.remove('invisible')
    chevCarGalleryPage.classList.add('invisible')
})

audiCarSet.addEventListener('click', () => {
    homePage.classList.add('invisible')
    audiCarGalleryPage.classList.remove('invisible')
    jeepCarGalleryPage.classList.add('invisible')
    britanniaBeachPage.classList.add('invisible')
    eventPage.classList.add('invisible')
    chevCarGalleryPage.classList.add('invisible')
})

audiReturn.addEventListener('click', () => {
    homePage.classList.remove('invisible')
    audiCarGalleryPage.classList.add('invisible')
})

canadaDaySet.addEventListener('click', () => {
    homePage.classList.add('invisible')
    jeepCarGalleryPage.classList.add('invisible')
    britanniaBeachPage.classList.add('invisible')
    eventPage.classList.remove('invisible')
    chevCarGalleryPage.classList.add('invisible')
    audiCarGalleryPage.classList.add('invisible')
})

eventReturn.addEventListener('click', () => {
    homePage.classList.remove('invisible')
    eventPage.classList.add('invisible')
})

britanniaBeachSet.addEventListener('click', () => {
    homePage.classList.add('invisible')
    jeepCarGalleryPage.classList.add('invisible')
    britanniaBeachPage.classList.remove('invisible')
    eventPage.classList.add('invisible')
    chevCarGalleryPage.classList.add('invisible')
    audiCarGalleryPage.classList.add('invisible')
})

britanniaReturn.addEventListener('click', () => {
    homePage.classList.remove('invisible')
    britanniaBeachPage.classList.add('invisible')
})

// modal show and hide set up
jeepCarGallery.addEventListener('click', (e) => {
    // console.log(e.target.nextElementSibling)
    e.target.nextElementSibling.style.display = 'block'
    // body.style.overflow='hidden'
})

chevCarGallery.addEventListener('click', (e) => {
    // console.log(e.target.nextElementSibling)
    e.target.nextElementSibling.style.display = 'block'
    // body.style.overflow='hidden'
})

audiCarGallery.addEventListener('click', (e) => {
    // console.log(e.target.nextElementSibling)
    e.target.nextElementSibling.style.display = 'block'
    // body.style.overflow='hidden'
})

canadaDayGallery.addEventListener('click', (e) => {
    e.target.nextElementSibling.style.display = 'block'
    // body.style.overflow='hidden'
})

britanniaGallery.addEventListener('click', (e) => {
    e.target.nextElementSibling.style.display = 'block'
    // body.style.overflow='hidden'
})

modalImg.forEach(img => {
    img.addEventListener('click', (e) => {
        e.target.parentElement.style.display = 'none'
        // body.style.overflow='scroll'
        // console.log(e.target, body)
    })
})