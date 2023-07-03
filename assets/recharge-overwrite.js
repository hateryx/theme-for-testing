$( document ).ready( function() {
  function dynamicRechargeLinks() {
    $( '#recharge-te div.nav--wrapper .nav__list--desktop' ).hide()
    const customerId = window.sessionStorage.getItem( 'customerId' )

    checkCustomerSubscription( customerId ).then( data => {
      const customer = data.customers[0]
      window.sessionStorage.setItem( 'customerHash', customer.hash )

      // if ( customer.number_subscriptions === 0 ) return

      displaySubscriptionLinks( window.sessionStorage.getItem( 'customerHash' ) )
      return data
    } )
  }

  function displaySubscriptionLinks(customerHash) {
    if ( ! $( 'body#recharge-novum' ) ) return
    if ( ! $( '#recharge-te div.nav--wrapper .list__item' ) ) return

    var token = new URLSearchParams(window.location.search).get( 'token' )

    let el = `
      <div id="account-tools" class="container-fluid">
        <a class="btn btn-primary text-uppercase my-1" href="/tools/recurring/portal/${customerHash}/schedule?token=${token}">Change Next Delivery Date</a>
        <a class="btn btn-primary text-uppercase my-1" href="/tools/recurring/portal/${customerHash}/subscriptions">Add
          or Remove a Product</a>
        <a class="btn btn-primary text-uppercase my-1" href="/tools/recurring/portal/${customerHash}/addresses?token=${token}">Change Delivery Address</a>
        <a class="btn btn-primary text-uppercase my-1" href="/tools/recurring/portal/${customerHash}/payment_methods?token=${token}">Update Payment Info</a>
        <a class="btn btn-primary text-uppercase my-1" href="/tools/recurring/portal/${customerHash}/subscriptions?token=${token}">Skip/Cancel Shipment</a>
        <a class="btn btn-primary text-uppercase my-1" href="/account/logout">Logout</a>
      </div>
    `
    $( el ).insertAfter( '#recharge-te div.nav--wrapper .list__item' )

    if ( ! $( '#recharge-te div.nav--wrapper div.list__item.list_item_chosen' ) ) return

    let m_el = `
      <li class="js-subscriptions-page text-uppercase">
        <a href="/tools/recurring/portal/${customerHash}/schedule?token=${token}">Change Next Delivery Date</a>
      </li>
      <li class="js-subscriptions-page text-uppercase">
        <a href="/tools/recurring/portal/${customerHash}/subscriptions?token=${token}">Add or Remove a Product</a>
      </li>
      <li class="js-subscriptions-page text-uppercase">
        <a href="/tools/recurring/portal/${customerHash}/addresses?token=${token}">Change Delivery Address</a>
      </li>
      <li class="js-subscriptions-page text-uppercase">
        <a href="/tools/recurring/portal/${customerHash}/payment_methods?token=${token}">Update Payment Info</a>
      </li>
      <li class="js-subscriptions-page text-uppercase">
        <a href="/tools/recurring/portal/${customerHash}/subscriptions?token=${token}">Skip/Cancel Shipment</a>
      </li>
      <li class="js-subscriptions-page text-uppercase">
        <a href="/account/logout">Logout</a>
      </li>
    `

    $( '#recharge-novum #recharge-te .nav__list--mobile li' ).remove()
    $( '#recharge-novum #recharge-te .nav__list--mobile' ).append( m_el )
  }

  async function checkCustomerSubscription( customerId ) {
    const url = `https://sf-recharge-get-customer.refactorthis.workers.dev/${customerId}`
    const response = await fetch( url )
    return response.json()
  }

  dynamicRechargeLinks()

  if ( $( '#recharge-novum' ) || $( '#recharge-te ') ) {
    let els = [ '.rc_btn', '.rc_btn--secondary' ]
    els.forEach( function( el ) {
      $( el ).each( function() {
        $( this ).addClass( 'sf-btn' )
        $(this).removeClass( 'title-bold' )
      } )
    } )
  }

  $( document ).on( 'click', '.rc_add_product button.rc_btn.sf-btn', function() {
    let loading = setInterval( checkModal, 1000 )

    function checkModal() {
      let el_check = $( '#te-modal #te-modal-content ul.rc_product_list_container' )
      
      if ( el_check ) {
        setTimeout( function() {
          let els = [ '.rc_btn', '.rc_btn--secondary' ]
          els.forEach( function( el ) {
            $( el ).each( function() {
              $( this ).addClass( 'sf-btn' )
              $( this ).removeClass( 'title-bold' )
            } )
          } )
          clearInterval( loading )
        }, 2000 )
      }
    }
  } )

  /**
   * @description Increase the with of the recurring login button
   */
  function recurringLoginButtons() {
    const page = window.location.pathname
    const width = $( window ).width()

    if ( ( page == "/tools/recurring/login" || page == "/tools/recurring/login/" ) && width <= 425 ) {
      $( '#not_verified p a' ).addClass( 'w-100' )

    } else {
      $( '#not_verified p a' ).removeClass( 'w-100' )
    }
  }
  recurringLoginButtons()

  window.addEventListener('resize', function(event) {
    recurringLoginButtons()
  }, true)
} )