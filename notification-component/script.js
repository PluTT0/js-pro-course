

export function showNotification(data) {
  const isNotificationsDisabled = localStorage.getItem('displayNotification') || false;
  const currentNotificationId = Number(localStorage.getItem('activeNotification')) || 1;

  if(isNotificationsDisabled) {
    return;
  }
  
  const notificationContent = document.createElement('div');

  notificationContent.innerHTML = `
    <section class="content">
      <div class="headerText">
        <button class="closeBtn">x</button>
        <div class="text">
          <h3 class="notificationTitle"></h3>
          <p class="notificationText"></p>
        </div>
      </div>
  
      <div class="windowFooter">
        <label for="disableNotifications"><input type="checkbox" name="disableNotifications" class="disableNotifications">Disable Tips</label>
        <div class="pagination">
        <button class="btnPrev"></button>
        ${data.map(notification => 
          `<input 
            type="radio"
            name="point"
            class ="notificationPoint"
            id='${notification.id}'
            ${notification.id === currentNotificationId ? 'checked': " "} "/>`).join('')
        }
        <button class="btnNext"></button>
      </div>
         
    </section>
  `;
  document.body.append(notificationContent);

  setLisener(data,currentNotificationId);
  showText(data,currentNotificationId);
}

const showText = (data,notificationId)=> {
  const notificationTitle = document.querySelector('.notificationTitle');
  const notificationText = document.querySelector('.notificationText');

  notificationTitle.innerHTML = data[notificationId-1].title;
  notificationText.innerHTML = data[notificationId-1].phrase;

  localStorage.setItem('activeNotification', notificationId);
}



function setLisener(data,notificationId) {
  const pagination = document.querySelector('.pagination');
  const prevBtn = document.querySelector('.btnPrev');
  const nextBtn = document.querySelector('.btnNext');
  const closeBtn = document.querySelector('.closeBtn');
  const section = document.querySelector('.content');
  const disableBtn = document.querySelector('.disableNotifications');

  disableBtn.addEventListener('click', ()=>{
    if(disableBtn.checked === true) {
      localStorage.setItem('displayNotification', 'none')
    } else if(disableBtn.checked === false) {
      localStorage.clear('displayNotification')
    }
  });

  pagination.addEventListener('click', (event) =>{
    if(event.target.name === 'point'){
      notificationId = event.target.id
      showText(data,notificationId);
    }
  });

  nextBtn.addEventListener('click', ()=>{
    if(notificationId === data.length) {
      notificationId = 1;
      showText(data,notificationId);
      document.getElementById(notificationId).checked = true;
    }else{
      notificationId = notificationId +1;
      showText(data,notificationId);
      document.getElementById(notificationId).checked = true;
    }
  });

  prevBtn.addEventListener('click', ()=>{
    if(notificationId === 1) {
      notificationId = data.length;
      showText(data,notificationId);
      document.getElementById(notificationId).checked = true;
    }else{
      notificationId = notificationId -1;
      showText(data,notificationId);
      document.getElementById(notificationId).checked = true;
    }
  });

  closeBtn.addEventListener('click', ()=>{
    section.remove();
  });
}
  
  