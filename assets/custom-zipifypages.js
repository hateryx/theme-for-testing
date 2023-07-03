( function($) {
  const publicData = {
    hasBundle: false,
    bundleButton: null
  }

  const custom = {
    init: function() {
      const pathName = window.location.pathname

      if ( pathName == '/pages/st-qm' ) {
        custom.setBundleButton()
        custom.checkWidth()
        custom.events()
      }
    },

    setBundleButton: function() {
      publicData.bundleButton = $( `section.get--the-bundle:first` )
      console.log( publicData.bundleButton )
    },

    cloneGetBundle: function() {
      if ( ! publicData.hasBundle ) {
        const selector = `section[data-id="10898759"] .zpa-flex--column:last-child section.get--the-bundle:first`
        const selectorId = `cloned--bundle-button`
        $( `section[data-id="10898759"] .zpa-flex--column:last-child` ).prepend( publicData.bundleButton.clone() )
        // $( `section[data-id="10889547"] .zpa-flex--column:last-child` ).prepend( publicData.bundleButton.clone() )
        publicData.hasBundle = true

        $( selector ).attr( 'id', selectorId )
        $( `#${selectorId} div.zpa-flex--column.xs-12` ).css({ 'width': '100% !important' })
      }
    },

    removeGetBundle: function() {
      $( `section[data-id="10898759"] .zpa-flex--column:last-child section.get--the-bundle` ).remove()
      // $( `section[data-id="10889547"] .zpa-flex--column:last-child section.get--the-bundle` ).remove()
      publicData.hasBundle = false
    },

    checkWidth: function() {
      const width = $( window ).width()
      if ( width <= 426 ) {
        custom.cloneGetBundle()
      } else {
        custom.removeGetBundle()
      }
    },

    events: function() {
      window.onresize = function() {
        custom.checkWidth()
      }
    }
  }

  $(document).ready(function() {
    custom.init()
  })
} )(jQuery)