var auftragdetailsController = function ($scope) {
    $scope.message = "KDI";
};

auftragdetailsController.$inject = ['$scope'];

auftragerstellenController.$inject = ['$scope'];

it('input disabled', function() {
  expect(element(by.css('inputart')).getAttribute('disabled')).toBeFalsy();
  expect(element(by.css('inputstd')).getAttribute('disabled')).toBeFalsy();
  expect(element(by.css('inputstatus')).getAttribute('disabled')).toBeFalsy();
  expect(element(by.css('inputzumit')).getAttribute('disabled')).toBeFalsy();
  element(by.model('checked')).click();
  expect(element(by.css('inputart')).getAttribute('disabled')).toBeTruthy();
  expect(element(by.css('inputstd')).getAttribute('disabled')).toBeTruthy();
  expect(element(by.css('inputstatus')).getAttribute('disabled')).toBeTruthy();
  expect(element(by.css('inputzumit')).getAttribute('disabled')).toBeTruthy();
});