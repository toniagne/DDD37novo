// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.directive('noScroll', function($document) {
  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

 .state('tab.dash-ddd', {
      url: '/dash/menuddd',
      views: {
        'tab-dash': {
          templateUrl: 'templates/menuddd.html',
          controller: 'Inicial'
        }
      }
    })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.pesquisas-cidade', {
      url: '/pesquisas/cidade',
      views: {
        'tab-pesquisas': {
          templateUrl: 'templates/pesquisa-cidade.html',
          controller: 'Pesquisas'
        }
      }
    })

  .state('tab.pesquisas-cidadesel', {
      url: '/pesquisas/:cidadeSel',
      views: {
        'tab-pesquisas': {
          templateUrl: 'templates/pesquisa-cidade-selecionada.html',
          controller: 'PesquisasCidade'
        }
      }
    })

   .state('tab.pesquisas-detalhes', {
      url: '/pesquisas/resultado/:contato',
      views: {
        'tab-pesquisas': {
          templateUrl: 'templates/pesquisa-detalhes.html',
          controller: 'VerDetalhes'
        }
      }
    })

 

    .state('tab.fastfood', {
      url: '/fastfood',
      views: {
        'tab-fastfood': {
          templateUrl: 'templates/fastfood.html',
          controller: 'Fastfood'
        }
      }
    })
   .state('tab.fastfood-detalhes', {
      url: '/fastfood/:contato',
      views: {
        'tab-fastfood': {
          templateUrl: 'templates/pesquisa-detalhes.html',
          controller: 'VerDetalhes'
        }
      }
    })


    .state('tab.curtaeganhe', {
      url: '/curtaeganhe',
      views: {
        'tab-curtaeganhe': {
          templateUrl: 'templates/curtaeganhe.html',
          controller: 'Curtaeganhe'
        }
      }
    })
   .state('tab.curtaeganhe-detalhes', {
      url: '/curtaeganhe/:contato',
      views: {
        'tab-curtaeganhe': {
          templateUrl: 'templates/pesquisa-detalhes.html',
          controller: 'VerDetalhes'
        }
      }
    })

    .state('tab.eventos', {
      url: '/eventos',
      views: {
        'tab-eventos': {
          templateUrl: 'templates/eventos.html',
          controller: 'Eventos'
        }
      }
    })
   .state('tab.eventos-detalhes', {
      url: '/eventos/:contato',
      views: {
        'tab-eventos': {
          templateUrl: 'templates/pesquisa-detalhes.html',
          controller: 'VerDetalhes'
        }
      }
    })

    .state('tab.classificados', {
      url: '/classificados',
      views: {
        'tab-classificados': {
          templateUrl: 'templates/classificados.html',
          controller: 'Classificados'
        }
      }
    })

    .state('tab.configuracoes', {
      url: '/configuracoes',
      views: {
        'tab-configuracoes': {
          templateUrl: 'templates/configuracoes.html',
          controller: 'Inicial'
        }
      }
    })

    .state('tab.anuncie', {
      url: '/anuncie',
      views: {
        'tab-anuncie': {
          templateUrl: 'templates/anuncie.html',
          controller: 'Inicial'
        }
      }
    })

    .state('tab.artemaiz', {
      url: '/artemaiz',
      views: {
        'tab-artemaiz': {
          templateUrl: 'templates/artemaiz.html',
          controller: 'Inicial'
        }
      }
    })

    .state('tab.facebook', {
      url: '/facebook',
      views: {
        'tab-facebook': {
          templateUrl: 'templates/facebook.html',
          controller: 'Inicial'
        }
      }
    })

    .state('tab.whatsapp', {
      url: '/whatsapp',
      views: {
        'tab-whatsapp': {
          templateUrl: 'templates/whatsapp.html',
          controller: 'Inicial'
        }
      }
    })
    .state('tab.aciasam', {
      url: '/aciasam',
      views: {
        'tab-aciasam': {
          templateUrl: 'templates/aciasam.html',
          controller: 'Inicial'
        }
      }
    })
        .state('tab.orgaospublicos', {
      url: '/orgaospublicos',
      views: {
        'tab-orgaospublicos': {
          templateUrl: 'templates/orgaospublicos.html',
          controller: 'Inicial'
        }
      }
    })


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
