let map;
function create_map(lat, lng, country, region) {
  if (map) {
    map.remove();  // Remove previous map before creating a new one
    map = null;
  }

  map = L.map('map').setView([lat, lng], 14);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`${region}, ${country}`)
    .openPopup();
}

async function search_Ip_Address(ip_address) {
  try {
    const request = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_QxmOFZBh3WNxnEHBTgnLugKkQBNdl&ipAddress=${ip_address}`
    );
    const response = await request.json();

    if (!response.location) {
      alert("Invalid IP Address");
      return;
    }

    const { location, ip, isp } = response;
    update_ui(ip, location.city, location.timezone, isp);

    create_map(location.lat, location.lng, location.country, location.region);
  } catch (error) {
    console.error("Error fetching IP data:", error);
  }
}

function update_ui(ip_address, location, timezone, isp) {
  document.querySelector('.address').textContent = ip_address;
  document.querySelector('.location').textContent = location;
  document.querySelector('.utc').textContent = 'UTC ' + timezone;
  document.querySelector('.isp').textContent = isp;
}

async function getUserIp() {
  const res = await fetch('https://api64.ipify.org?format=json');
  const data = await res.json();
  search_Ip_Address(data.ip);
}

getUserIp();
