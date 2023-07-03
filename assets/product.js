document.addEventListener('DOMContentLoaded', function () {
  const _slides = $( `#endorsements-slider .splide__list li` ).length
  const _median = Math.round( ( _slides - 1 ) / 2 )

  const endorsementsSlider = new Splide( '#endorsements-slider', {
    rewind: true,
    start: _median || 0,
    perMove: 1,
    perPage: 3,
    gap: 20,
    breakpoints: {
      1200: {
        perPage: 2,
      },
      600: {
        perPage: 1,
      },
    },
    lazyLoad: 'nearby'
  }).mount(window.splide.Extensions);

    var splide = new Splide( '#product-gallery-slider' );
    var images = document.querySelectorAll( '.js-thumbnails li' );

    var activeImage;
    var activeClass = 'is-active';

    for ( let i = 0, len = images.length; i < len; i++ ) {
      var image = images[ i ];

      splide.on( 'click', function () {
        // commented due to last item prevents from switching active slide
        /* if (activeImage !== image) {
          splide.go(i);
        } */
        splide.go(i);
      }, image );
    }

    splide.on( 'mounted move', function ( newIndex ) {
      // newIndex will be undefined through the "mounted" event.
      var image = images[ newIndex !== undefined ? newIndex : splide.index ];

      if ( image && activeImage !== image ) {
        if ( activeImage ) {
          activeImage.classList.remove( activeClass );
        }

        image.classList.add( activeClass );
        activeImage = image;
      }
    } );

    splide.mount();

  // Image zoom
  // Initialize Slider
  endorsementsSlider.mount();
  function floatingAddToCart() {
    let primaryATC = document.querySelector(".primary-add-to-cart")
    let floatingATC = document.querySelector(".floating-add-to-cart-container")
    
    if ( floatingATC ) {
      if (primaryATC.getBoundingClientRect().top > 0){
        floatingATC.classList.add('hidden')
      } else {
        floatingATC.classList.remove('hidden')
      }
    }
  }
  if (window.innerWidth < 768) {
    window.addEventListener('scroll', floatingAddToCart, false);
  }

  $( '#add-item-form' ).submit( function( e ) {
    let id_1 = `select.data-quantity[data-quantity="1"]`
    let id_2 = `select.data-quantity[data-quantity="2"]`
    let qty_1 = $( `${id_1}` ).val()

    $( `${id_2}` ).val( qty_1 ).trigger( 'change' )
  } )

  $( document ).on( 'mouseenter mouseleave', '.d-flex .product-cross-sell__item', function( e ) {
    const image = $( this ).data( 'image' )
    const orig_image = _product_main_image
    const src = ( e.type == 'mouseenter' ) ? image : orig_image

    $( '#_product_main_image' ).attr( 'src', src )
    splide.go( 0 )
  } )

  referralCheckout()

  $( document ).on( 'click', '.sub--save', function() {
    const target = $( this ).data( 'target' )
    $( target ).modal( 'show' )
  } )

  $( document ).on( 'click', '.sub--save-close', function() {
    const dismiss = $( this ).data( 'dismiss' )
    $( dismiss ).modal( 'hide' )
  } )
});

const pathName = window.location.pathname
const collectionsFormula = '/collections/formula'
const toRedirect = [ '/collections/subscriptions/products/sport-formula-vitamin-capsules-1-ambassador-special', '/products/free-sample-subscription-offer' ]
toRedirect.forEach( ( url, index ) => {
  if ( url == pathName ) window.location.href = collectionsFormula
} )

/**
 * @description Clear the cart and add the current product to cart
 *              and redirect to checkout
 * @returns {void}
 */
function referralCheckout() {
  const rfrlLnk = new URLSearchParams( window.location.search ).get( 'rfrlLnk' )
  const productHandle = document.getElementById( 'Product--Handle-Hidden' ).textContent
  const mainProducts = document.getElementById( 'Main--Products-Json-Hidden' ).textContent
  const shopDomain = document.getElementById( 'Shop--Permanent-Domain' ).textContent
  const rechargeProperties = { shipping_interval_frequency: '30', shipping_interval_unit_type: 'day' }

  if ( ! rfrlLnk ) return false
  
  fetch( mainProducts ).then( r => r.json() ).then( res => {
    const isSub = ( rfrlLnk == 'checkout-sub' ) ? true : false
    const product = res.find( x => x.handle == productHandle )
    if ( product ) {
      fetch( `/cart/clear.js` ).then( r => r.json() ).then( () => {
        const item = {
          "id": ( isSub ) ? product.subId : product.otpId,
          "quantity": 1
        }
        if ( isSub ) item['properties'] = rechargeProperties
        const data = {'items': [ item ]}

        fetch( '/cart/add.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( data )
        } )
        .then( r => r.json() )
        .then( () => {
          const token = (document.cookie.match('(^|; )cart=([^;]*)') || 0)[2]
          const rechargeCheckout = `https://checkout.rechargeapps.com/r/checkout?domain=${shopDomain}&cart_token=${token}`
          const redirectTo = isSub ? rechargeCheckout : '/checkout'
          window.location.href = redirectTo
        } )
      } )
    }
  } )

}
