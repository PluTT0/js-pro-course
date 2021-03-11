

export function showNotification(data) {
  const isNotificationsDisabled = localStorage.getItem('displayNotification') || false;
  const currentNotification = localStorage.getItem('activeNotification') || 0;

  if(isNotificationsDisabled) {
    return
  }
  
  const currentNotificationID = data.map(notification => notification.id == currentNotification)
  const notificationContent = document.createElement('div');

  notificationContent.innerHTML = `
    <section class="content">
      <div class="headerText">
        <button class="closeBtn">x</button>
        <div class="text">
          <h3 class="notificationTitle">${data[currentNotification].title}</h3>
          <p class="notificationText">${data[currentNotification].phrase}</p>
        </div>
      </div>
  
      <div class="windowText">
        <label for="disableNotifications"><input type="checkbox" name="disableNotifications" class="disableNotifications">Disable Tips</label>
        <div class="pagination">
        <button class="btnPrev"><</button>
        ${data.map(notification => 
          `<input 
            type="radio"
            name="point"
            class ="notificationPoint"
            id='${notification.id}'
            checked="${notification.id  === currentNotification}"/>`).join('')
        }
        <button class="btnNext">></button>
      </div>
         
    </section>
  `;
  document.body.append(notificationContent);
  document.querySelector('.disableNotifications').addEventListener('click', setInLocalStorage)

  setLisener(currentNotification,data,currentNotificationID)
}

function setInLocalStorage(notification) {
  const disableBtn = document.querySelector('.disableNotifications');
  if(disableBtn.checked === true) {
    localStorage.setItem('displayNotification', 'none')
  } else {
    localStorage.setItem('activeNotification', `${notification}`)
  }
}


function setLisener(notification,data,notificationID) {
  const pagination = document.querySelector('.pagination');
  const pointBtn = document.querySelector('.notificationPoint');
  const notificationTitle = document.querySelector('.notificationTitle');
  const notificationText = document.querySelector('.notificationText');
  const prevBtn = document.querySelector('.btnPrev');
  const nextBtn = document.querySelector('.btnNext');
  const closeBtn = document.querySelector('.closeBtn');
  const section = document.querySelector('.content');
  
  

  
  function displayText(notification) {
    notificationTitle.innerHTML = data[notification].title;
    notificationText.innerHTML = data[notification].phrase;
    setInLocalStorage(notification)
  }

  console.log(data[notification])
  pagination.addEventListener('click', (eve)=>{
    if(eve.target === pointBtn)
    notification = eve.target.id-1;
    displayText(notification)
    console.log(eve.target.id)
  });

  prevBtn.addEventListener('click', () => {
    if(notification <= 0) {
      notifiation = data.length
    }else {
      notification = notification -1
    }
    displayText(notification)
  })

  nextBtn.addEventListener('click', () => {
    if(notification === data.length) {
      notifiation = 0
    }else {
      notification = +notification+1
    }
    displayText(notification)
  })

  closeBtn.addEventListener('click', () => {
    setInLocalStorage(notification);
    section.remove();
  })
}




