const warehouse = [,
    { id: 'ware1', company: "Apple", model: "Macbook Pro 13", image: "images/apple.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper."},
    { id: 'ware2', company: "Asus", model: "Zenbook 13", image: "images/asus.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper." },
    { id: 'ware3', company: "Asus", model: "Zenbook 13", image: "images/asus.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper." },
    { id: 'ware4', company: "Apple", model: "Macbook Pro 13", image: "images/apple.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper."},
    { id: 'ware5', company: "Asus", model: "Zenbook 13", image: "images/asus.png",description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper." },
    { id: 'ware6', company: "Apple", model: "Macbook Pro 13", image: "images/apple.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper."},
    { id: 'ware7', company: "Asus", model: "Zenbook 13", image: "images/asus.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper." },
    { id: 'ware8', company: "Apple", model: "Macbook Pro 13", image: "images/apple.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ligula sed augue pretium, ac lacinia velit finibus. Suspendisse tristique sem velit, vitae dictum velit accumsan eu. In ultrices nibh ut sagittis congue. In a tempor velit. Curabitur eu ante vel velit tincidunt pharetra consequat a dolor. Cras ac justo sed libero viverra faucibus nec at eros. Donec nec ante ipsum. Aliquam sodales neque ac lectus ornare pretium. Suspendisse feugiat luctus eros non ullamcorper."}
];

function loadWares(filter) {
    let wares = '';

    warehouse.forEach(ware => {
        if (filter === "All" || ware.company === filter) {
            wares += `<div class="ware-wrapper" id="${ware.id}">
                    <img src="${ware.image}">
                    <div>
                        <p class="ware-header">
                            ${ware.company} ${ware.model}
                        </p>

                        <p class="ware-description">
                            ${ware.description}
                        </p>
                    </div>
                </div>`
            let styles = `#${ware.id}:hover * {
                text-overflow:unset;
                overflow:visible;
                white-space: normal;
                }`;
            let styleSheet = document.getElementsByTagName('style')[0].sheet;
            document.getElementById("wares").innerHTML = wares;
            styleSheet.insertRule(styles);
        }
        
    });
}

loadWares("All");


