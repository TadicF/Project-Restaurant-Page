export function contactPage() {
  const content = document.querySelector('#content');
  const contactPage = document.createElement('div');
  contactPage.classList.add("contactPage");
  content.appendChild(contactPage);

  const contactUs = document.createElement('div');
  contactUs.classList.add('contactUs');
  contactPage.appendChild(contactUs);
  const contactUsTitle = document.createElement('h1');
  contactUsTitle.textContent = 'Contact Us';
  contactUs.appendChild(contactUsTitle);

  const contactTabs = document.createElement('div');
  contactTabs.classList.add('contactTabs');
  contactPage.appendChild(contactTabs);

  // Display Location Tab 
  const location = document.createElement('div');
  location.classList.add('location');
  contactTabs.appendChild(location);

  const locationTitle = document.createElement('div');
  locationTitle.classList.add('locationTitle');
  location.appendChild(locationTitle);
  const locationTitleText = document.createElement('p');
  locationTitleText.textContent = 'Location';
  locationTitle.appendChild(locationTitleText);

  const locationInfo = document.createElement('div');
  locationInfo.classList.add('locationInfo');
  location.appendChild(locationInfo);
  const location_one = createContactItem('Nocturne Restaurant');
  locationInfo.appendChild(location_one);
  const location_two = createContactItem('42 Moonlight Avenue');
  locationInfo.appendChild(location_two);
  const location_three = createContactItem('Belgrade, Serbia');
  locationInfo.appendChild(location_three);
  const location_four = createContactItem('Located near the Old Town, just a short walk from the city center.');
  locationInfo.appendChild(location_four);

  // Display Opening Hours Tab
  const opening_hours = document.createElement('div');
  opening_hours.classList.add("opening-hours");
  contactTabs.appendChild(opening_hours);

  const openingTitle = document.createElement('div');
  openingTitle.classList.add('openingTitle');
  opening_hours.appendChild(openingTitle);
  const openingTitleText = document.createElement('p');
  openingTitleText.textContent = 'Opening Hours';
  openingTitle.appendChild(openingTitleText);

  const openingInfo = document.createElement('div');
  openingInfo.classList.add('openingInfo');
  opening_hours.appendChild(openingInfo);
  const opening_one = createContactItem('Monday – Friday: 8:00 AM – 11:00 PM');
  openingInfo.appendChild(opening_one);
  const opening_two = createContactItem('Saturday: 9:00 AM – 12:00 AM');
  openingInfo.appendChild(opening_two);
  const opening_three = createContactItem('Sunday: 9:00 AM – 10:00 PM');
  openingInfo.appendChild(opening_three);

  // Display Contact Info Tab
  const contact = document.createElement('div');
  contact.classList.add('contact');
  contactTabs.appendChild(contact);

  const contactTitle = document.createElement('div');
  contactTitle.classList.add("contactTitle");
  contact.appendChild(contactTitle);
  const contactTitleText = document.createElement('p');
  contactTitleText.textContent = 'Get In Touch';
  contactTitle.appendChild(contactTitleText);

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contactInfo');
  contact.appendChild(contactInfo);
  const contact_one = createContactItem('Phone: +381 123 4567');
  contactInfo.appendChild(contact_one);
  const contact_two = createContactItem('Email: ');
  contactInfo.appendChild(contact_two);
  const contact_three = createContactItem('Instagram: ');
  contactInfo.appendChild(contact_three);
  const contact_four = createContactItem('Facebook: ');
  contactInfo.appendChild(contact_four);

  const contact_email = document.createElement('a');
  contact_email.textContent = 'info@nocturne.rs';
  contact_email.setAttribute('href', '');
  contact_two.appendChild(contact_email);

  const contact_instragram = document.createElement('a');
  contact_instragram.textContent = '@nocturne.dining';
  contact_instragram.setAttribute('href', '');
  contact_three.appendChild(contact_instragram);

  const contact_facebook = document.createElement('a');
  contact_facebook.textContent = 'Nocturne Restaurant';
  contact_facebook.setAttribute('href', '');
  contact_four.appendChild(contact_facebook);
}

function createContactItem(text) {
  const item = document.createElement('p');
  item.textContent = text;
  return item;
}