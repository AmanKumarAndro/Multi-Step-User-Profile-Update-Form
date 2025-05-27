const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Country = require('../models/Country');

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Country.deleteMany();

  await Country.insertMany([
    {
      name: 'India',
      code: 'IN',
      states: [
        {
          name: 'Andhra Pradesh',
          code: 'AP',
          cities: [
            { name: 'Hyderabad' }, { name: 'Visakhapatnam' }, { name: 'Vijayawada' },
            { name: 'Guntur' }, { name: 'Nellore' }, { name: 'Kurnool' },
            { name: 'Rajahmundry' }, { name: 'Tirupati' }, { name: 'Kadapa' },
            { name: 'Anantapur' }, { name: 'Eluru' }, { name: 'Ongole' }
          ],
        },
        {
          name: 'Arunachal Pradesh',
          code: 'AR',
          cities: [
            { name: 'Itanagar' }, { name: 'Naharlagun' }, { name: 'Pasighat' },
            { name: 'Tezpur' }, { name: 'Bomdila' }, { name: 'Ziro' },
            { name: 'Along' }, { name: 'Tezu' }
          ],
        },
        {
          name: 'Assam',
          code: 'AS',
          cities: [
            { name: 'Guwahati' }, { name: 'Silchar' }, { name: 'Dibrugarh' },
            { name: 'Jorhat' }, { name: 'Nagaon' }, { name: 'Tinsukia' },
            { name: 'Tezpur' }, { name: 'Bongaigaon' }, { name: 'Karimganj' },
            { name: 'Sivasagar' }, { name: 'Goalpara' }, { name: 'Barpeta' }
          ],
        },
        {
          name: 'Bihar',
          code: 'BR',
          cities: [
            { name: 'Patna' }, { name: 'Gaya' }, { name: 'Bhagalpur' },
            { name: 'Muzaffarpur' }, { name: 'Darbhanga' }, { name: 'Bihar Sharif' },
            { name: 'Arrah' }, { name: 'Begusarai' }, { name: 'Katihar' },
            { name: 'Munger' }, { name: 'Chapra' }, { name: 'Purnia' }
          ],
        },
        {
          name: 'Chhattisgarh',
          code: 'CG',
          cities: [
            { name: 'Raipur' }, { name: 'Bhilai' }, { name: 'Bilaspur' },
            { name: 'Korba' }, { name: 'Durg' }, { name: 'Rajnandgaon' },
            { name: 'Jagdalpur' }, { name: 'Raigarh' }, { name: 'Ambikapur' },
            { name: 'Mahasamund' }, { name: 'Dhamtari' }
          ],
        },
        {
          name: 'Goa',
          code: 'GA',
          cities: [
            { name: 'Panaji' }, { name: 'Vasco da Gama' }, { name: 'Margao' },
            { name: 'Mapusa' }, { name: 'Ponda' }, { name: 'Bicholim' },
            { name: 'Curchorem' }, { name: 'Sanquelim' }
          ],
        },
        {
          name: 'Gujarat',
          code: 'GJ',
          cities: [
            { name: 'Ahmedabad' }, { name: 'Surat' }, { name: 'Vadodara' },
            { name: 'Rajkot' }, { name: 'Bhavnagar' }, { name: 'Jamnagar' },
            { name: 'Junagadh' }, { name: 'Gandhinagar' }, { name: 'Anand' },
            { name: 'Navsari' }, { name: 'Morbi' }, { name: 'Mehsana' },
            { name: 'Bhuj' }, { name: 'Surendranagar' }, { name: 'Gandhidham' }
          ],
        },
        {
          name: 'Haryana',
          code: 'HR',
          cities: [
            { name: 'Faridabad' }, { name: 'Gurgaon' }, { name: 'Panipat' },
            { name: 'Ambala' }, { name: 'Yamunanagar' }, { name: 'Rohtak' },
            { name: 'Hisar' }, { name: 'Karnal' }, { name: 'Sonipat' },
            { name: 'Panchkula' }, { name: 'Bhiwani' }, { name: 'Sirsa' },
            { name: 'Bahadurgarh' }, { name: 'Jind' }, { name: 'Thanesar' }
          ],
        },
        {
          name: 'Himachal Pradesh',
          code: 'HP',
          cities: [
            { name: 'Shimla' }, { name: 'Dharamshala' }, { name: 'Solan' },
            { name: 'Mandi' }, { name: 'Palampur' }, { name: 'Baddi' },
            { name: 'Nahan' }, { name: 'Paonta Sahib' }, { name: 'Sundarnagar' },
            { name: 'Chamba' }, { name: 'Una' }, { name: 'Kullu' },
            { name: 'Hamirpur' }, { name: 'Bilaspur' }
          ],
        },
        {
          name: 'Jharkhand',
          code: 'JH',
          cities: [
            { name: 'Ranchi' }, { name: 'Jamshedpur' }, { name: 'Dhanbad' },
            { name: 'Bokaro Steel City' }, { name: 'Deoghar' }, { name: 'Phusro' },
            { name: 'Hazaribagh' }, { name: 'Giridih' }, { name: 'Ramgarh' },
            { name: 'Medininagar' }, { name: 'Chirkunda' }
          ],
        },
        {
          name: 'Karnataka',
          code: 'KA',
          cities: [
            { name: 'Bangalore' }, { name: 'Mysore' }, { name: 'Hubli' },
            { name: 'Mangalore' }, { name: 'Belgaum' }, { name: 'Gulbarga' },
            { name: 'Davanagere' }, { name: 'Bellary' }, { name: 'Bijapur' },
            { name: 'Shimoga' }, { name: 'Tumkur' }, { name: 'Raichur' },
            { name: 'Bidar' }, { name: 'Hospet' }, { name: 'Hassan' },
            { name: 'Udupi' }, { name: 'Dharwad' }
          ],
        },
        {
          name: 'Kerala',
          code: 'KL',
          cities: [
            { name: 'Thiruvananthapuram' }, { name: 'Kochi' }, { name: 'Kozhikode' },
            { name: 'Kollam' }, { name: 'Thrissur' }, { name: 'Alappuzha' },
            { name: 'Palakkad' }, { name: 'Kannur' }, { name: 'Kasaragod' },
            { name: 'Kottayam' }, { name: 'Malappuram' }, { name: 'Pathanamthitta' },
            { name: 'Idukki' }, { name: 'Wayanad' }
          ],
        },
        {
          name: 'Madhya Pradesh',
          code: 'MP',
          cities: [
            { name: 'Indore' }, { name: 'Bhopal' }, { name: 'Jabalpur' },
            { name: 'Gwalior' }, { name: 'Ujjain' }, { name: 'Sagar' },
            { name: 'Dewas' }, { name: 'Satna' }, { name: 'Ratlam' },
            { name: 'Rewa' }, { name: 'Murwara' }, { name: 'Singrauli' },
            { name: 'Burhanpur' }, { name: 'Khandwa' }, { name: 'Bhind' },
            { name: 'Chhindwara' }, { name: 'Guna' }
          ],
        },
        {
          name: 'Maharashtra',
          code: 'MH',
          cities: [
            { name: 'Mumbai' }, { name: 'Pune' }, { name: 'Nagpur' },
            { name: 'Thane' }, { name: 'Nashik' }, { name: 'Aurangabad' },
            { name: 'Solapur' }, { name: 'Amravati' }, { name: 'Kolhapur' },
            { name: 'Sangli' }, { name: 'Malegaon' }, { name: 'Akola' },
            { name: 'Latur' }, { name: 'Dhule' }, { name: 'Ahmednagar' },
            { name: 'Chandrapur' }, { name: 'Parbhani' }, { name: 'Jalgaon' },
            { name: 'Bhiwandi' }, { name: 'Nanded' }
          ],
        },
        {
          name: 'Manipur',
          code: 'MN',
          cities: [
            { name: 'Imphal' }, { name: 'Thoubal' }, { name: 'Lilong' },
            { name: 'Mayang Imphal' }, { name: 'Kakching' },
            { name: 'Bishnupur' }, { name: 'Churachandpur' }
          ],
        },
        {
          name: 'Meghalaya',
          code: 'ML',
          cities: [
            { name: 'Shillong' }, { name: 'Tura' }, { name: 'Nongstoin' },
            { name: 'Jowai' }, { name: 'Baghmara' }, { name: 'Williamnagar' },
            { name: 'Nongpoh' }
          ],
        },
        {
          name: 'Mizoram',
          code: 'MZ',
          cities: [
            { name: 'Aizawl' }, { name: 'Lunglei' }, { name: 'Saiha' },
            { name: 'Champhai' }, { name: 'Kolasib' }, { name: 'Serchhip' },
            { name: 'Mamit' }, { name: 'Lawngtlai' }
          ],
        },
        {
          name: 'Nagaland',
          code: 'NL',
          cities: [
            { name: 'Kohima' }, { name: 'Dimapur' }, { name: 'Mokokchung' },
            { name: 'Tuensang' }, { name: 'Wokha' }, { name: 'Mon' },
            { name: 'Zunheboto' }, { name: 'Phek' }, { name: 'Kiphire' },
            { name: 'Longleng' }, { name: 'Peren' }
          ],
        },
        {
          name: 'Odisha',
          code: 'OR',
          cities: [
            { name: 'Bhubaneswar' }, { name: 'Cuttack' }, { name: 'Rourkela' },
            { name: 'Berhampur' }, { name: 'Sambalpur' }, { name: 'Puri' },
            { name: 'Balasore' }, { name: 'Bhadrak' }, { name: 'Baripada' },
            { name: 'Jharsuguda' }, { name: 'Jeypore' }, { name: 'Barbil' }
          ],
        },
        {
          name: 'Punjab',
          code: 'PB',
          cities: [
            { name: 'Ludhiana' }, { name: 'Amritsar' }, { name: 'Jalandhar' },
            { name: 'Patiala' }, { name: 'Bathinda' }, { name: 'Hoshiarpur' },
            { name: 'Batala' }, { name: 'Pathankot' }, { name: 'Moga' },
            { name: 'Abohar' }, { name: 'Malerkotla' }, { name: 'Khanna' },
            { name: 'Phagwara' }, { name: 'Muktsar' }, { name: 'Barnala' }
          ],
        },
        {
          name: 'Rajasthan',
          code: 'RJ',
          cities: [
            { name: 'Jaipur' }, { name: 'Jodhpur' }, { name: 'Kota' },
            { name: 'Bikaner' }, { name: 'Ajmer' }, { name: 'Udaipur' },
            { name: 'Bhilwara' }, { name: 'Alwar' }, { name: 'Bharatpur' },
            { name: 'Pali' }, { name: 'Barmer' }, { name: 'Sikar' },
            { name: 'Tonk' }, { name: 'Kishangarh' }, { name: 'Beawar' },
            { name: 'Hanumangarh' }, { name: 'Sri Ganganagar' }
          ],
        },
        {
          name: 'Sikkim',
          code: 'SK',
          cities: [
            { name: 'Gangtok' }, { name: 'Namchi' }, { name: 'Geyzing' },
            { name: 'Mangan' }, { name: 'Jorethang' }, { name: 'Naya Bazar' },
            { name: 'Rangpo' }, { name: 'Singtam' }
          ],
        },
        {
          name: 'Tamil Nadu',
          code: 'TN',
          cities: [
            { name: 'Chennai' }, { name: 'Coimbatore' }, { name: 'Madurai' },
            { name: 'Tiruchirappalli' }, { name: 'Salem' }, { name: 'Tirunelveli' },
            { name: 'Tiruppur' }, { name: 'Vellore' }, { name: 'Thoothukudi' },
            { name: 'Nagercoil' }, { name: 'Thanjavur' }, { name: 'Dindigul' },
            { name: 'Cuddalore' }, { name: 'Kanchipuram' }, { name: 'Erode' },
            { name: 'Tiruvannamalai' }, { name: 'Pollachi' }, { name: 'Rajapalayam' }
          ],
        },
        {
          name: 'Telangana',
          code: 'TS',
          cities: [
            { name: 'Hyderabad' }, { name: 'Warangal' }, { name: 'Nizamabad' },
            { name: 'Khammam' }, { name: 'Karimnagar' }, { name: 'Ramagundam' },
            { name: 'Mahabubnagar' }, { name: 'Nalgonda' }, { name: 'Adilabad' },
            { name: 'Suryapet' }, { name: 'Miryalaguda' }, { name: 'Jagtial' }
          ],
        },
        {
          name: 'Tripura',
          code: 'TR',
          cities: [
            { name: 'Agartala' }, { name: 'Dharmanagar' }, { name: 'Udaipur' },
            { name: 'Kailasahar' }, { name: 'Belonia' }, { name: 'Khowai' },
            { name: 'Ambassa' }, { name: 'Ranir Bazar' }
          ],
        },
        {
          name: 'Uttar Pradesh',
          code: 'UP',
          cities: [
            { name: 'Lucknow' }, { name: 'Kanpur' }, { name: 'Ghaziabad' },
            { name: 'Agra' }, { name: 'Varanasi' }, { name: 'Meerut' },
            { name: 'Allahabad' }, { name: 'Bareilly' }, { name: 'Aligarh' },
            { name: 'Moradabad' }, { name: 'Saharanpur' }, { name: 'Gorakhpur' },
            { name: 'Noida' }, { name: 'Firozabad' }, { name: 'Jhansi' },
            { name: 'Muzaffarnagar' }, { name: 'Mathura' }, { name: 'Rampur' },
            { name: 'Shahjahanpur' }, { name: 'Farrukhabad' }, { name: 'Mau' },
            { name: 'Hapur' }, { name: 'Etawah' }
          ],
        },
        {
          name: 'Uttarakhand',
          code: 'UK',
          cities: [
            { name: 'Dehradun' }, { name: 'Haridwar' }, { name: 'Roorkee' },
            { name: 'Haldwani' }, { name: 'Rudrapur' }, { name: 'Kashipur' },
            { name: 'Rishikesh' }, { name: 'Kotdwar' }, { name: 'Ramnagar' },
            { name: 'Pithoragarh' }, { name: 'Jaspur' }, { name: 'Kichha' }
          ],
        },
        {
          name: 'West Bengal',
          code: 'WB',
          cities: [
            { name: 'Kolkata' }, { name: 'Howrah' }, { name: 'Durgapur' },
            { name: 'Asansol' }, { name: 'Siliguri' }, { name: 'Malda' },
            { name: 'Baharampur' }, { name: 'Habra' }, { name: 'Kharagpur' },
            { name: 'Shantipur' }, { name: 'Dankuni' }, { name: 'Dhulian' },
            { name: 'Ranaghat' }, { name: 'Haldia' }, { name: 'Raiganj' },
            { name: 'Krishnanagar' }, { name: 'Nabadwip' }
          ],
        },
      ],
    },
    {
      name: 'United States',
      code: 'US',
      states: [
        {
          name: 'California',
          code: 'CA',
          cities: [
            { name: 'Los Angeles' }, { name: 'San Francisco' }, { name: 'San Diego' },
            { name: 'San Jose' }, { name: 'Fresno' }, { name: 'Sacramento' },
            { name: 'Long Beach' }, { name: 'Oakland' }, { name: 'Bakersfield' },
            { name: 'Anaheim' }, { name: 'Santa Ana' }, { name: 'Riverside' }
          ],
        },
        {
          name: 'Texas',
          code: 'TX',
          cities: [
            { name: 'Houston' }, { name: 'San Antonio' }, { name: 'Dallas' },
            { name: 'Austin' }, { name: 'Fort Worth' }, { name: 'El Paso' },
            { name: 'Arlington' }, { name: 'Corpus Christi' }, { name: 'Plano' },
            { name: 'Lubbock' }, { name: 'Laredo' }, { name: 'Irving' }
          ],
        },
        {
          name: 'Florida',
          code: 'FL',
          cities: [
            { name: 'Jacksonville' }, { name: 'Miami' }, { name: 'Tampa' },
            { name: 'Orlando' }, { name: 'St. Petersburg' }, { name: 'Hialeah' },
            { name: 'Tallahassee' }, { name: 'Fort Lauderdale' }, { name: 'Port St. Lucie' },
            { name: 'Cape Coral' }, { name: 'Pembroke Pines' }
          ],
        },
        {
          name: 'New York',
          code: 'NY',
          cities: [
            { name: 'New York City' }, { name: 'Buffalo' }, { name: 'Rochester' },
            { name: 'Yonkers' }, { name: 'Syracuse' }, { name: 'Albany' },
            { name: 'New Rochelle' }, { name: 'Mount Vernon' }, { name: 'Schenectady' },
            { name: 'Utica' }
          ],
        },
        {
          name: 'Illinois',
          code: 'IL',
          cities: [
            { name: 'Chicago' }, { name: 'Aurora' }, { name: 'Rockford' },
            { name: 'Joliet' }, { name: 'Naperville' }, { name: 'Springfield' },
            { name: 'Peoria' }, { name: 'Elgin' }, { name: 'Waukegan' }
          ],
        },
      ],
    },
    {
      name: 'United Kingdom',
      code: 'GB',
      states: [
        {
          name: 'England',
          code: 'ENG',
          cities: [
            { name: 'London' }, { name: 'Birmingham' }, { name: 'Manchester' },
            { name: 'Liverpool' }, { name: 'Leeds' }, { name: 'Sheffield' },
            { name: 'Bristol' }, { name: 'Newcastle' }, { name: 'Nottingham' },
            { name: 'Leicester' }, { name: 'Coventry' }, { name: 'Bradford' }
          ],
        },
        {
          name: 'Scotland',
          code: 'SCT',
          cities: [
            { name: 'Edinburgh' }, { name: 'Glasgow' }, { name: 'Aberdeen' },
            { name: 'Dundee' }, { name: 'Stirling' }, { name: 'Perth' },
            { name: 'Inverness' }, { name: 'Paisley' }
          ],
        },
        {
          name: 'Wales',
          code: 'WLS',
          cities: [
            { name: 'Cardiff' }, { name: 'Swansea' }, { name: 'Newport' },
            { name: 'Wrexham' }, { name: 'Barry' }, { name: 'Caerphilly' },
            { name: 'Rhondda' }, { name: 'Bridgend' }
          ],
        },
        {
          name: 'Northern Ireland',
          code: 'NIR',
          cities: [
            { name: 'Belfast' }, { name: 'Derry' }, { name: 'Lisburn' },
            { name: 'Newtownabbey' }, { name: 'Bangor' }, { name: 'Craigavon' }
          ],
        },
      ],
    },
    {
      name: 'Canada',
      code: 'CA',
      states: [
        {
          name: 'Ontario',
          code: 'ON',
          cities: [
            { name: 'Toronto' }, { name: 'Ottawa' }, { name: 'Hamilton' },
            { name: 'London' }, { name: 'Kitchener' }, { name: 'Windsor' },
            { name: 'Oshawa' }, { name: 'Barrie' }, { name: 'Kingston' }
          ],
        },
        {
          name: 'Quebec',
          code: 'QC',
          cities: [
            { name: 'Montreal' }, { name: 'Quebec City' }, { name: 'Laval' },
            { name: 'Gatineau' }, { name: 'Longueuil' }, { name: 'Sherbrooke' },
            { name: 'Saguenay' }, { name: 'Trois-Rivières' }
          ],
        },
        {
          name: 'British Columbia',
          code: 'BC',
          cities: [
            { name: 'Vancouver' }, { name: 'Victoria' }, { name: 'Surrey' },
            { name: 'Burnaby' }, { name: 'Richmond' }, { name: 'Abbotsford' },
            { name: 'Coquitlam' }, { name: 'Kelowna' }
          ],
        },
        {
          name: 'Alberta',
          code: 'AB',
          cities: [
            { name: 'Calgary' }, { name: 'Edmonton' }, { name: 'Red Deer' },
            { name: 'Lethbridge' }, { name: 'Medicine Hat' }, { name: 'Grande Prairie' },
            { name: 'Airdrie' }, { name: 'Spruce Grove' }
          ],
        },
      ],
    },
    {
      name: 'Australia',
      code: 'AU',
      states: [
        {
          name: 'New South Wales',
          code: 'NSW',
          cities: [
            { name: 'Sydney' }, { name: 'Newcastle' }, { name: 'Wollongong' },
            { name: 'Maitland' }, { name: 'Albury' }, { name: 'Wagga Wagga' },
            { name: 'Port Macquarie' }, { name: 'Tamworth' }
          ],
        },
        {
          name: 'Victoria',
          code: 'VIC',
          cities: [
            { name: 'Melbourne' }, { name: 'Geelong' }, { name: 'Ballarat' },
            { name: 'Bendigo' }, { name: 'Shepparton' }, { name: 'Wodonga' },
            { name: 'Warrnambool' }, { name: 'Traralgon' }
          ],
        },
        {
          name: 'Queensland',
          code: 'QLD',
          cities: [
            { name: 'Brisbane' }, { name: 'Gold Coast' }, { name: 'Townsville' },
            { name: 'Cairns' }, { name: 'Toowoomba' }, { name: 'Mackay' },
            { name: 'Rockhampton' }, { name: 'Bundaberg' }
          ],
        },
        {
          name: 'Western Australia',
          code: 'WA',
          cities: [
            { name: 'Perth' }, { name: 'Fremantle' }, { name: 'Rockingham' },
            { name: 'Mandurah' }, { name: 'Bunbury' }, { name: 'Geraldton' },
            { name: 'Albany' }, { name: 'Kalgoorlie' }
          ],
        },
      ],
    },
    {
      name: 'Germany',
      code: 'DE',
      states: [
        {
          name: 'Bavaria',
          code: 'BY',
          cities: [
            { name: 'Munich' }, { name: 'Nuremberg' }, { name: 'Augsburg' },
            { name: 'Würzburg' }, { name: 'Regensburg' }, { name: 'Ingolstadt' },
            { name: 'Fürth' }, { name: 'Erlangen' }
          ],
        },
        {
          name: 'North Rhine-Westphalia',
          code: 'NW',
          cities: [
            { name: 'Cologne' }, { name: 'Düsseldorf' }, { name: 'Dortmund' },
            { name: 'Essen' }, { name: 'Duisburg' }, { name: 'Bochum' },
            { name: 'Wuppertal' }, { name: 'Bielefeld' }
          ],
        },
        {
          name: 'Baden-Württemberg',
          code: 'BW',
          cities: [
            { name: 'Stuttgart' }, { name: 'Mannheim' }, { name: 'Karlsruhe' },
            { name: 'Freiburg' }, { name: 'Heidelberg' }, { name: 'Ulm' },
            { name: 'Heilbronn' }, { name: 'Pforzheim' }
          ],
        },
      ],
    },
    {
      name: 'France',
      code: 'FR',
      states: [
        {
          name: 'Île-de-France',
          code: 'IDF',
          cities: [
            { name: 'Paris' }, { name: 'Boulogne-Billancourt' }, { name: 'Saint-Denis' },
            { name: 'Argenteuil' }, { name: 'Montreuil' }, { name: 'Créteil' },
            { name: 'Nanterre' }, { name: 'Colombes' }
          ],
        },
        {
          name: 'Provence-Alpes-Côte d\'Azur',
          code: 'PAC',
          cities: [
            { name: 'Marseille' }, { name: 'Nice' }, { name: 'Toulon' },
            { name: 'Aix-en-Provence' }, { name: 'Avignon' }, { name: 'Antibes' },
            { name: 'Cannes' }, { name: 'La Seyne-sur-Mer' }
          ],
        },
        {
          name: 'Auvergne-Rhône-Alpes',
          code: 'ARA',
          cities: [
            { name: 'Lyon' }, { name: 'Saint-Étienne' }, { name: 'Grenoble' },
            { name: 'Villeurbanne' }, { name: 'Clermont-Ferrand' }, { name: 'Valence' },
            { name: 'Chambéry' }, { name: 'Annecy' }
          ],
        },
      ],
    },
    {
      name: 'Japan',
      code: 'JP',
      states: [
        {
          name: 'Tokyo',
          code: 'TK',
          cities: [
            { name: 'Tokyo' }, { name: 'Hachioji' }, { name: 'Tachikawa' },
            { name: 'Musashino' }, { name: 'Mitaka' }, { name: 'Ome' },
            { name: 'Fuchu' }, { name: 'Akishima' }
          ],
        },
        {
          name: 'Osaka',
          code: 'OS',
          cities: [
            { name: 'Osaka' }, { name: 'Sakai' }, { name: 'Higashiosaka' },
            { name: 'Hirakata' }, { name: 'Toyonaka' }, { name: 'Suita' },
            { name: 'Takatsuki' }, { name: 'Yao' }
          ],
        },
        {
          name: 'Kanagawa',
          code: 'KN',
          cities: [
            { name: 'Yokohama' }, { name: 'Kawasaki' }, { name: 'Sagamihara' },
            { name: 'Fujisawa' }, { name: 'Chigasaki' }, { name: 'Hiratsuka' },
            { name: 'Machida' }, { name: 'Odawara' }
          ],
        },
      ],
    },
    {
      name: 'Brazil',
      code: 'BR',
      states: [
        {
          name: 'São Paulo',
          code: 'SP',
          cities: [
            { name: 'São Paulo' }, { name: 'Guarulhos' }, { name: 'Campinas' },
            { name: 'São Bernardo do Campo' }, { name: 'Santo André' }, { name: 'Osasco' },
            { name: 'Ribeirão Preto' }, { name: 'Sorocaba' }
          ],
        },
        {
          name: 'Rio de Janeiro',
          code: 'RJ',
          cities: [
            { name: 'Rio de Janeiro' }, { name: 'São Gonçalo' }, { name: 'Duque de Caxias' },
            { name: 'Nova Iguaçu' }, { name: 'Niterói' }, { name: 'Belford Roxo' },
            { name: 'São João de Meriti' }, { name: 'Campos dos Goytacazes' }
          ],
        },
        {
          name: 'Minas Gerais',
          code: 'MG',
          cities: [
            { name: 'Belo Horizonte' }, { name: 'Uberlândia' }, { name: 'Contagem' },
            { name: 'Juiz de Fora' }, { name: 'Betim' }, { name: 'Montes Claros' },
            { name: 'Ribeirão das Neves' }, { name: 'Uberaba' }
          ],
        },
      ],
    },
    {
      name: 'China',
      code: 'CN',
      states: [
        {
          name: 'Beijing',
          code: 'BJ',
          cities: [
            { name: 'Beijing' }, { name: 'Tongzhou' }, { name: 'Changping' },
            { name: 'Daxing' }, { name: 'Shunyi' }, { name: 'Fangshan' },
            { name: 'Mentougou' }, { name: 'Pinggu' }
          ],
        },
        {
          name: 'Shanghai',
          code: 'SH',
          cities: [
            { name: 'Shanghai' }, { name: 'Pudong' }, { name: 'Huangpu' },
            { name: 'Xuhui' }, { name: 'Changning' }, { name: 'Jing\'an' },
            { name: 'Putuo' }, { name: 'Hongkou' }
          ],
        },
        {
          name: 'Guangdong',
          code: 'GD',
          cities: [
            { name: 'Guangzhou' }, { name: 'Shenzhen' }, { name: 'Dongguan' },
            { name: 'Foshan' }, { name: 'Zhongshan' }, { name: 'Zhuhai' },
            { name: 'Jiangmen' }, { name: 'Huizhou' }
          ],
        },
      ],
    },
    {
      name: 'Russia',
      code: 'RU',
      states: [
        {
          name: 'Moscow Oblast',
          code: 'MO',
          cities: [
            { name: 'Moscow' }, { name: 'Balashikha' }, { name: 'Khimki' },
            { name: 'Podolsk' }, { name: 'Mytishchi' }, { name: 'Korolev' },
            { name: 'Lyubertsy' }, { name: 'Elektrostal' }
          ],
        },
        {
          name: 'Saint Petersburg',
          code: 'SP',
          cities: [
            { name: 'Saint Petersburg' }, { name: 'Kolpino' }, { name: 'Pushkin' },
            { name: 'Kronstadt' }, { name: 'Peterhof' }, { name: 'Lomonosov' },
            { name: 'Sestroretsk' }, { name: 'Zelenogorsk' }
          ],
        },
        {
          name: 'Tatarstan',
          code: 'TA',
          cities: [
            { name: 'Kazan' }, { name: 'Naberezhnye Chelny' }, { name: 'Nizhnekamsk' },
            { name: 'Almetyevsk' }, { name: 'Zelenodolsk' }, { name: 'Bugulma' },
            { name: 'Yelabuga' }, { name: 'Chistopol' }
          ],
        },
      ],
    },
    {
      name: 'South Africa',
      code: 'ZA',
      states: [
        {
          name: 'Gauteng',
          code: 'GP',
          cities: [
            { name: 'Johannesburg' }, { name: 'Pretoria' }, { name: 'Soweto' },
            { name: 'Benoni' }, { name: 'Tembisa' }, { name: 'Germiston' },
            { name: 'Boksburg' }, { name: 'Krugersdorp' }
          ],
        },
        {
          name: 'Western Cape',
          code: 'WC',
          cities: [
            { name: 'Cape Town' }, { name: 'Bellville' }, { name: 'Mitchells Plain' },
            { name: 'Khayelitsha' }, { name: 'Somerset West' }, { name: 'Paarl' },
            { name: 'George' }, { name: 'Wynberg' }
          ],
        },
        {
          name: 'KwaZulu-Natal',
          code: 'KZN',
          cities: [
            { name: 'Durban' }, { name: 'Pietermaritzburg' }, { name: 'Pinetown' },
            { name: 'Chatsworth' }, { name: 'Umlazi' }, { name: 'Port Shepstone' },
            { name: 'Newcastle' }, { name: 'Dundee' }
          ],
        },
      ],
    },
    {
      name: 'Mexico',
      code: 'MX',
      states: [
        {
          name: 'Mexico City',
          code: 'DF',
          cities: [
            { name: 'Mexico City' }, { name: 'Iztapalapa' }, { name: 'Ecatepec' },
            { name: 'Guadalajara' }, { name: 'Puebla' }, { name: 'Tijuana' },
            { name: 'Juárez' }, { name: 'León' }
          ],
        },
        {
          name: 'Jalisco',
          code: 'JAL',
          cities: [
            { name: 'Guadalajara' }, { name: 'Zapopan' }, { name: 'Tlaquepaque' },
            { name: 'Tonalá' }, { name: 'Puerto Vallarta' }, { name: 'Lagos de Moreno' },
            { name: 'Tepatitlán' }, { name: 'Ocotlán' }
          ],
        },
        {
          name: 'Nuevo León',
          code: 'NL',
          cities: [
            { name: 'Monterrey' }, { name: 'Guadalupe' }, { name: 'San Nicolás de los Garza' },
            { name: 'Apodaca' }, { name: 'General Escobedo' }, { name: 'Santa Catarina' },
            { name: 'San Pedro Garza García' }, { name: 'Cadereyta Jiménez' }
          ],
        },
      ],
    },
  ]);

  console.log('Locations seeded successfully!');  
  process.exit();
}).catch(err => {
  console.error('Error seeding locations:', err);
  process.exit(1);
});