function floatToString(t, e) {
  const o = t.toFixed(e).toString();
  return o.match(/^\.\d+/) ? `0${o}` : o;
}

function attributeToString(t) {
  return (
    'string' != typeof t && 'undefined' === (t = String(t)) && (t = ''),
    jQuery.trim(t)
  );
}

'undefined' == typeof Shopify && (Shopify = {}),
  (Shopify.money_format = '${{amount}}'),
  (Shopify.onError = function (XMLttpRequest, textStatus) {
    const data = eval(`(${XMLHttpRequest.responseText})`);
    data.message
      ? alert(`${data.message}(${data.status}): ${data.description}`)
      : alert(`Error : ${Shopify.fullMessagesFromErrors(data).join('; ')}.`);
  }),
  (Shopify.fullMessagesFromErrors = function (t) {
    const e = [];
    return (
      jQuery.each(t, function (t, o) {
        jQuery.each(o, function (o, r) {
          e.push(`${t} ${r}`);
        });
      }),
      e
    );
  }),
  (Shopify.onCartUpdate = function (t) {
    alert(`There are now ${t.item_count} items in the cart.`);
  }),
  (Shopify.onCartShippingRatesUpdate = function (t, e) {
    let o = '';
    e.zip && (o += `${e.zip}, `),
      e.province && (o += `${e.province}, `),
      (o += e.country),
      alert(
        `There are ${
          t.length
        } shipping rates available for ${o}, starting at ${Shopify.formatMoney(
          t[0].price
        )}.`
      );
  }),
  (Shopify.onItemAdded = function (t) {
    alert(`${t.title} was added to your shopping cart.`);
  }),
  (Shopify.onProduct = function (t) {
    alert(`Received everything we ever wanted to know about ${t.title}`);
  }),
  (Shopify.formatMoney = function (t, e) {
    'string' == typeof t && (t = t.replace('.', ''));
    let o = '';
    const r = /\{\{\s*(\w+)\s*\}\}/,
      n = e || this.money_format;

    function a(t, e) {
      return void 0 === t ? e : t;
    }

    function i(t, e, o, r) {
      if (
        ((e = a(e, 2)), (o = a(o, ',')), (r = a(r, '.')), isNaN(t) || null == t)
      )
        return 0;
      const n = (t = (t / 100).toFixed(e)).split('.');
      return (
        n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${o}`) +
        (n[1] ? r + n[1] : '')
      );
    }

    switch (n.match(r)[1]) {
      case 'amount':
        o = i(t, 2);
        break;
      case 'amount_no_decimals':
        o = i(t, 0);
        break;
      case 'amount_with_comma_separator':
        o = i(t, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        o = i(t, 0, '.', ',');
    }
    return n.replace(r, o);
  }),
  (Shopify.resizeImage = function (t, e) {
    try {
      if ('original' == e) return t;
      {
        const o = t.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);
        return `${o[1]}_${e}.${o[2]}`;
      }
    } catch (e) {
      return t;
    }
  }),
  (Shopify.addItem = function (t, e, o) {
    const r = {
      type: 'POST',
      url: '/cart/add.js',
      data: `quantity=${(e = e || 1)}&id=${t}`,
      dataType: 'json',
      success(t) {
        'function' == typeof o ? o(t) : Shopify.onItemAdded(t);
      },
      error(t, e) {
        Shopify.onError(t, e);
      },
    };
    jQuery.ajax(r);
  }),
  (Shopify.addItemFromForm = function (t, e) {
    const o = {
      type: 'POST',
      url: '/cart/add.js',
      data: jQuery(`#${t}`).serialize(),
      dataType: 'json',
      success(t) {
        'function' == typeof e ? e(t) : Shopify.onItemAdded(t);
      },
      error(t, e) {
        Shopify.onError(t, e);
      },
    };
    jQuery.ajax(o);
  }),
  (Shopify.getCart = function (t) {
    jQuery.getJSON('/cart.js', function (e, o) {
      'function' == typeof t ? t(e) : Shopify.onCartUpdate(e);
    });
  }),
  (Shopify.pollForCartShippingRatesForDestination = function (t, e, o) {
    o = o || Shopify.onError;
    var r = function () {
      jQuery.ajax('/cart/async_shipping_rates', {
        dataType: 'json',
        success(o, n, a) {
          200 === a.status
            ? 'function' == typeof e
              ? e(o.shipping_rates, t)
              : Shopify.onCartShippingRatesUpdate(o.shipping_rates, t)
            : setTimeout(r, 500);
        },
        error: o,
      });
    };
    return r;
  }),
  (Shopify.getCartShippingRatesForDestination = function (t, e, o) {
    o = o || Shopify.onError;
    const r = {
      type: 'POST',
      url: '/cart/prepare_shipping_rates',
      data: Shopify.param({ shipping_address: t }),
      success: Shopify.pollForCartShippingRatesForDestination(t, e, o),
      error: o,
    };
    jQuery.ajax(r);
  }),
  (Shopify.getProduct = function (t, e) {
    jQuery.getJSON(`/products/${t}.js`, function (t, o) {
      'function' == typeof e ? e(t) : Shopify.onProduct(t);
    });
  }),
  (Shopify.changeItem = function (t, e, o) {
    const r = {
      type: 'POST',
      url: '/cart/change.js',
      data: `quantity=${e}&id=${t}`,
      dataType: 'json',
      success(t) {
        'function' == typeof o ? o(t) : Shopify.onCartUpdate(t);
      },
      error(t, e) {
        Shopify.onError(t, e);
      },
    };
    jQuery.ajax(r);
  }),
  (Shopify.removeItem = function (t, e) {
    const o = {
      type: 'POST',
      url: '/cart/change.js',
      data: `quantity=0&id=${t}`,
      dataType: 'json',
      success(t) {
        'function' == typeof e ? e(t) : Shopify.onCartUpdate(t);
      },
      error(t, e) {
        Shopify.onError(t, e);
      },
    };
    jQuery.ajax(o);
  }),
  (Shopify.clear = function (t) {
    const e = {
      type: 'POST',
      url: '/cart/clear.js',
      data: '',
      dataType: 'json',
      success(e) {
        'function' == typeof t ? t(e) : Shopify.onCartUpdate(e);
      },
      error(t, e) {
        Shopify.onError(t, e);
      },
    };
    jQuery.ajax(e);
  }),
  (Shopify.updateCartFromForm = function (t, e) {
    const o = {
      type: 'POST',
      url: '/cart/update.js',
      data: jQuery(`#${t}`).serialize(),
      dataType: 'json',
      success(t) {
        'function' == typeof e ? e(t) : Shopify.onCartUpdate(t);
      },
      error(t, e) {
        Shopify.onError(t, e);
      },
    };
    jQuery.ajax(o);
  }),
  (Shopify.updateCartAttributes = function (t, e) {
    let o = '';
    jQuery.isArray(t)
      ? jQuery.each(t, function (t, e) {
          const r = attributeToString(e.key);
          '' !== r && (o += `attributes[${r}]=${attributeToString(e.value)}&`);
        })
      : 'object' == typeof t &&
        null !== t &&
        jQuery.each(t, function (t, e) {
          o += `attributes[${attributeToString(t)}]=${attributeToString(e)}&`;
        });
    const r = {
      type: 'POST',
      url: '/cart/update.js',
      data: o,
      dataType: 'json',
      success(t) {
        'function' == typeof e ? e(t) : Shopify.onCartUpdate(t);
      },
      error(t, e) {
        Shopify.onError(t, e);
      },
    };
    jQuery.ajax(r);
  }),
  (Shopify.updateCartNote = function (t, e) {
    const o = {
      type: 'POST',
      url: '/cart/update.js',
      data: `note=${attributeToString(t)}`,
      dataType: 'json',
      success(t) {
        'function' == typeof e ? e(t) : Shopify.onCartUpdate(t);
      },
      error(t, e) {
        Shopify.onError(t, e);
      },
    };
    jQuery.ajax(o);
  }),
  jQuery.fn.jquery >= '1.4'
    ? (Shopify.param = jQuery.param)
    : ((Shopify.param = function (t) {
        const e = [],
          o = function (t, o) {
            (o = jQuery.isFunction(o) ? o() : o),
              (e[e.length] = `${encodeURIComponent(t)}=${encodeURIComponent(
                o
              )}`);
          };
        if (jQuery.isArray(t) || t.jquery)
          jQuery.each(t, function () {
            o(this.name, this.value);
          });
        else for (const e in t) Shopify.buildParams(e, t[e], o);
        return e.join('&').replace(/%20/g, '+');
      }),
      (Shopify.buildParams = function (t, e, o) {
        jQuery.isArray(e) && e.length
          ? jQuery.each(e, function (e, r) {
              rbracket.test(t)
                ? o(t, r)
                : Shopify.buildParams(
                    `${t}[${
                      'object' == typeof r || jQuery.isArray(r) ? e : ''
                    }]`,
                    r,
                    o
                  );
            })
          : null != e && 'object' == typeof e
          ? Shopify.isEmptyObject(e)
            ? o(t, '')
            : jQuery.each(e, function (e, r) {
                Shopify.buildParams(`${t}[${e}]`, r, o);
              })
          : o(t, e);
      }),
      (Shopify.isEmptyObject = function (t) {
        for (const e in t) return !1;
        return !0;
      }));
