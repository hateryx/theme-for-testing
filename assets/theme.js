// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $('#back-to-top').css('display', 'flex');
  } else {
    $('#back-to-top').css('display', 'none');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const navbarToggle = document.querySelector('.navbar-toggler');
const headerContainer = document.querySelector('.header__container');

$('.navbar-toggler').on('click', () => {
  $('.header__container').toggleClass('fullscreen');
});

function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const resetCart = ( e ) => {
  if ( e.ctrlKey && e.key === 'ArrowDown' ) {
    fetch( '/cart/clear.js' ).then( () => window.location.reload() )
  }
}

const addItems = ( e ) => {
  if ( e.ctrlKey && e.key === 'Delete' ) {
    const items = [
      { id: 14944236732468, quantity: 1 },
      { id: 14944190464052, quantity: 1 },
      { id: 14944248922164, quantity: 1 },
      { id: 14944206553140, quantity: 1 },
      { id: 14944270942260, quantity: 1 },
      { id: 31159773855838, quantity: 1 },
      { id: 31159775527006, quantity: 1 },
      { id: 31159776706654, quantity: 1 },
      { id: 31159778541662, quantity: 1 },
    ]
    const data = {
        'items': items
    }
    
    fetch( '/cart/add.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( data )
    } ).then( r => r.json() ).then( res => window.location.reload() )
  }
}

document.addEventListener( 'keyup', resetCart, false )
document.addEventListener( 'keyup', addItems, false )

$( document ).ready( function() {
  $( document ).on( 'click', '.btn-learn-more', function() {
    const href = $( this ).data( 'href' )
    sessionStorage.setItem( 'backToProduct', window.location.pathname )
    window.location.href = href
  } )

  if ( sessionStorage.getItem( 'backToProduct' ) ) {
    const btn = `
      <div class="text-center">
        <button type="button" class="btn btn-primary" id="back-to-product">Back to Product</button>
      </div>
    `

    let id_1 = '#features-and-benefits-section'
    let id_2 = '#multivitamin-supplemental-facts'

    if ( $( id_1 ) ) $( btn ).insertBefore( id_1 )
    if ( $( id_2 ) ) $( btn ).insertBefore( id_2 )
  }

  $( document ).on( 'click', '#back-to-product', function() {
    const href = sessionStorage.getItem( 'backToProduct' )
    window.sessionStorage.removeItem( 'backToProduct' )
    window.location.href = href
  } )
} )
