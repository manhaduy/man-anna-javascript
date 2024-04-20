const submitBtn = document.getElementById('submit');


console.log("submitBtn", submitBtn)

// add event listener
submitBtn.addEventListener('click', addUser);

function addUser(){
  console.log('user');
  const tbodyUser = document.getElementById('tbodyUser');

  const tr = document.createElement('tr');
  tr.setAttribute('class', 'bg-white border-b');

  const th = document.createElement('th');
  th.setAttribute('scope', 'row');
  th.setAttribute('class', 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap');
  th.innerHTML = 'tony';

  const tdEmail = document.createElement('td');
  tdEmail.setAttribute('class', 'px-6 py-4');
  tdEmail.innerHTML = 'tony@gmail.com';

  const tdCountry = document.createElement('td');
  tdCountry.setAttribute('class', 'px-6 py-4');
  tdCountry.innerHTML = 'VN';

  // append ... in tr element
  tr.appendChild(th);
  tr.appendChild(tdEmail);
  tr.appendChild(tdCountry);
  
  tbodyUser.appendChild(tr)
}