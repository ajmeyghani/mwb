describe 'App Controller Tests:', ->
  $controller = undefined
  beforeEach window.module('mymodulename')

  beforeEach inject(( _$controller_) -> $controller = _$controller_)

  describe 'The controller', ->
    it 'should have the name field defined', ->

      appCtrl = $controller('AppCtrl', $scope: {})
      expect(appCtrl.name).toBeDefined()
