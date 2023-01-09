// Home Men and Women Categories Banners

const menCatBanner = document.getElementById('home-men')
const womenCatBanner = document.getElementById('home-women')

var myHeaders = new Headers();
myHeaders.append("X-Authorization", "pk_48991c2989da0b3a35290d565db969ba1a22875321ca6");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

// Fetch Men category

fetch("https://api.chec.io/v1/categories/men?type=slug&depth=2", requestOptions)
    .then(response => response.json())
    .then(result => {
        const menCatData = result.assets[0]
        menCatBanner.innerHTML = `
            <div class="collection-grid-3-item-img image-container" style="padding-bottom: 93.68%">
				<img src=${menCatData.url} data-src=${menCatData.url} class="lazyload fade-up" alt="Banner">
				<div class="foxic-loader"></div>
			</div>
			<div class="collection-grid-3-caption-bg">
				<h3 class="collection-grid-3-title">Men</h3>
				<h4 class="collection-grid-3-subtitle">Fashionable men's wears </h4>
	        </div>
    `
    })
    .catch(error => console.log('error', error));

// ///////////////////////

// Fetch Women Category

fetch("https://api.chec.io/v1/categories/women?type=slug&depth=2", requestOptions)
    .then(response => response.json())
    .then(result => {
        const womenCatData = result.assets[0]
        // console.log(womenCatData)
        womenCatBanner.innerHTML = `
        <div class="collection-grid-3-item-img image-container" style="padding-bottom: 93.68%">
            <img src=${womenCatData.url}
                data-src=${womenCatData.url} class="lazyload fade-up"
                alt="Banner">
            <div class="foxic-loader"></div>
        </div>
        <div class="collection-grid-3-caption-bg">
            <h3 class="collection-grid-3-title">Women</h3>
            <h4 class="collection-grid-3-subtitle">Live&nbsp;According&nbsp;to&nbsp;Fashion</h4>
        </div>
    `
    })
    .catch(error => console.log('error', error));


    // Fetch Categories' products for home-cat-show

    let catHomePrdcts = '';

    async function homeCatShow(slug) {
        const response = await fetch(`https://api.chec.io/v1/products?limit=4&category_slug=${slug}`, requestOptions)
        const result = await response.json();
        const catProducts = result.data
        // console.log(catProducts)
            catProducts.forEach(collectCatProduct)
            document.getElementById(`home-${slug}-products`).innerHTML = catHomePrdcts
        
    }

    function collectCatProduct (prdct) {
        catHomePrdcts +=     `
        <div class="prd prd--style2 prd-labels--max prd-labels-shadow prd-w-lg">
        <div class="prd-inside">
            <div class="prd-img-area"><a href="product.html"
                    class="prd-img image-hover-scale image-container"
                    style="padding-bottom: 128.48%"><img
                        data-src=${prdct.image.url}
                        alt="Suede Leather Mini Skirt"
                        class="js-prd-img fade-up ls-is-cached lazyloaded"
                        src=${prdct.image.url}>
                    <div class="foxic-loader"></div>
                    <div class="prd-big-squared-labels"></div>
                </a>
                <div class="prd-circle-labels"><a href="#"
                        class="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0"
                        title="Add To Wishlist"><i class="icon-heart-stroke"></i></a><a href="#"
                        class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
                        title="Remove From Wishlist"><i class="icon-heart-hover"></i></a> <a
                        href="#" class="circle-label-qview js-prd-quickview prd-hide-mobile"
                        data-src="ajax/ajax-quickview.html"><i class="icon-eye"></i><span>QUICK
                            VIEW</span></a></div>
                <ul class="list-options color-swatch">
                    <li data-image=${prdct.image.url}
                        class="active"><a href="#" class="js-color-toggle" data-toggle="tooltip"
                            data-placement="right" title=""
                            data-original-title="Color Name"><img
                                data-src=${prdct.image.url}
                                class="fade-up ls-is-cached lazyloaded" alt="Color Name"
                                src=${prdct.image.url}></a></li>
                    <li data-image="images/skins/fashion/products/product-04-2.jpg"><a href="#"
                            class="js-color-toggle" data-toggle="tooltip" data-placement="right"
                            title="" data-original-title="Color Name"><img
                                data-src="images/skins/fashion/products/product-04-2.jpg"
                                class="fade-up ls-is-cached lazyloaded" alt="Color Name"
                                src="images/skins/fashion/products/product-04-2.jpg"></a></li>
                    <li data-image="images/skins/fashion/products/product-04-3.jpg"><a href="#"
                            class="js-color-toggle" data-toggle="tooltip" data-placement="right"
                            title="" data-original-title="Color Name"><img
                                data-src="images/skins/fashion/products/product-04-3.jpg"
                                class="fade-up ls-is-cached lazyloaded" alt="Color Name"
                                src="images/skins/fashion/products/product-04-3.jpg"></a></li>
                </ul>
            </div>
            <div class="prd-info">
                <div class="prd-info-wrap">
                    <div class="prd-info-top">
                        <div class="prd-rating"><i class="icon-star-fill fill"></i><i
                                class="icon-star-fill fill"></i><i
                                class="icon-star-fill fill"></i><i
                                class="icon-star-fill fill"></i><i
                                class="icon-star-fill fill"></i></div>
                        <div class="prd-tag"><a href="#">${prdct.categories[0].name}</a></div>
                    </div>
                    <div class="prd-rating justify-content-center"><i
                            class="icon-star-fill fill"></i><i
                            class="icon-star-fill fill"></i><i
                            class="icon-star-fill fill"></i><i
                            class="icon-star-fill fill"></i><i class="icon-star-fill fill"></i>
                    </div>
                    <div class="prd-tag"><a href="#">${prdct.categories[0].name}</a></div>
                    <h2 class="prd-title"><a href="product.html">${prdct.name}</a>
                    </h2>
                    <div class="prd-description">Quisque volutpat condimentum velit. Class
                        aptent taciti sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt
                        mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
                        Nulla facilisi.</div>
                </div>
                <div class="prd-hovers">
                    <div class="prd-circle-labels">
                        <div><a href="#"
                                class="circle-label-compare circle-label-wishlist--add js-add-wishlist mt-0"
                                title="Add To Wishlist"><i class="icon-heart-stroke"></i></a><a
                                href="#"
                                class="circle-label-compare circle-label-wishlist--off js-remove-wishlist mt-0"
                                title="Remove From Wishlist"><i
                                    class="icon-heart-hover"></i></a> </div>
                        <div><a href="#"
                                class="circle-label-qview prd-hide-mobile js-prd-quickview"
                                data-src="ajax/ajax-quickview.html"><i
                                    class="icon-eye"></i><span>QUICK VIEW</span></a></div>
                    </div>
                    <div class="prd-price">
                        <div class="price-new">${prdct.price.formatted_with_symbol}</div>
                    </div>
                    <div class="prd-action">
                        <div class="prd-action-left">
                            <form action="#"><button class="btn js-prd-addtocart"
                                    data-product="{&quot;name&quot;:&quot;Suede Leather Mini Skirt&quot;,&quot;path&quot;:&quot;images/skins/fashion/products/product-04-1.jpg&quot;,&quot;url&quot;:&quot;product.html&quot;,&quot;aspect_ratio&quot;:0.778}">Add
                                    To Cart</button></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     `
    }

    homeCatShow('men')
    homeCatShow('women')


   
    fetch("https://api.chec.io/v1/products?limit=4&sortBy=created&sortDirection=desc", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
