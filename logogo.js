/* Area to customize VTEX Sales App JS (dont change unless you have VTEX permission) */
// You can see more customizations examples on https://github.com/vtex/checkout-instore-custom

/* Locale configurations */

window.LOCALE_MESSAGES = {
    locale: 'pt',
    messages: {
      pt: {},
    },
  };
  
  function setNewLocaleMessages() {
    var eventLocale = new Event('changeLocaleMessages');
    eventLocale.data = window.LOCALE_MESSAGES;
    document.dispatchEvent(eventLocale);
  }
  
  if (window.inStoreIsLoaded) {
    setNewLocaleMessages();
  } else {
    document.addEventListener(
      'load.instore',
      function() {
        setNewLocaleMessages();
      },
      false
    );
  }
  
  /* Global configurations */
  
  window.INSTORE_CONFIG = {
    topbarTitle: 'VTEX Sales App',
    socialShare: {
      vendorType: 'code',
      hostName: '',
    },
    search: {
      vtexSearch: true, /* ativar busca */
      filtersEnabled: true, /* Ativar filtro */
      // regionalizationEnabled: true, /* Ativar regionalização */
    },
    noteAsVendorCode: { 
      type: 'select', //codigo do vendedor com opção de select.
      skipValidation: true, //cód do vendedor obrigatório.
      autofill: false, // autopreenchimento.
    },
    challengeDrivenPaymentWorkflow: true,
    payments: {
      filters: [
      '2',
      '12',
      '201',
      '16'
      ],
    },
    //initialPage : 'advertisements',
    enableNewCheckout: true,
    enableExplore: true,
  };