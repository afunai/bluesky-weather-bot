const setParams = (params) => {
  document.querySelector('#locationName').setAttribute('value', params.locationName);
  document.querySelector('#latitude').setAttribute('value', params.latitude);
  document.querySelector('#longitude').setAttribute('value', params.longitude);
};

const getLocation = async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      fetch(
        'https://nominatim.openstreetmap.org/reverse' +
        '?format=json&accept-language=ja' +
        `&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
      ).then(
        response => response.json()
      ).then(
        obj => setParams({
          locationName: obj.name || obj.address?.city || obj.address?.town,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      );
    });
  } else {
    setParams({
      locationName: '東京',
      latitude: 35.6895,
      longitude: 139.6917,
    });
  }
}
