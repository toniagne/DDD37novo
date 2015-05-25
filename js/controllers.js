angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('Pesquisas', function($scope) {})

.controller('PesquisasCidade', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) {
	 $scope.cidadeSelecionada = $stateParams.cidadeSel;
	 $http.get('http://www.ddd37.com.br/app/listagens/banners/', {params: {cidade: $stateParams.cidadeSel}})
               .then(        
                function(res){
                  $scope.BannersCidade  = res.data;              
                }); 

     $scope.pesquisar = function(text){
     	 $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
     	
         $http.get('http://www.ddd37.com.br/app/listagens/geral', {params: {cidade: $stateParams.cidadeSel, termo: text}})
            .success(function(data){
                $ionicLoading.hide();
                $scope.registros = data;
            });
     }

})

.controller('Inicial', function($scope) {})

.controller('Fastfood', function($scope) {})

.controller('Curtaeganhe', function($scope) {})

.controller('Eventos', function($scope) {})

.controller('Classificados', function($scope) {})

.controller('VerDetalhes', function($scope, $stateParams, $ionicPopup, Chats) { 
     $scope.favoritar = function (data){
      var itens   =   data.split("*"); 
      var arrObjetos = [{strNome:itens[1], strEndereco:itens[2], strTelefone1:itens[3], strTelefone2:itens[4], strTelefone3:itens[5], pic:itens[6]}];
       Chats.incluiFavoritos(arrObjetos);    
          
    return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Você incluiu <b>'+itens[1]+'</b> na sua lista de favoritos.<br><br> Para você visualizar sua lista de favoritos, acesso o menu suspenso e toque em FAVORITOS.'
                     });
    }
  $scope.chat = Chats.get($stateParams.contato);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }

 


});
