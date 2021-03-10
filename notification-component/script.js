

export function showNotification(data) {
  const isNotificationsDisabled = localStorage.getItem('displayNotification') || false;
  const currentNotification = localStorage.getItem('activeNotification') || 0;

  if(isNotificationsDisabled) {
    return
  }
  
  const currentNotificationID = data.map(notification => notification.id== currentNotification)
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
        
          
      <div class="windowText">
        <label for="disableNotifications"><input type="checkbox" name="disableNotifications" class="disableNotifications">Disable Tips</label>
        <button class="btnNext">></button>
        <div class="pagination">
          ${data.map(notification => 
            `<input 
              type="radio"
              name="point"
              class ="notificationPoint"
              id='${notification.id}'
              checked="${notification.id === currentNotification}"/>`).join('')
          }
        </div>
        <button class="btnPrev"><</button> 
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
  
  
  const input = pagination.children[notification];
  console.log(input)
  
  function displayText(notification) {
    notificationTitle.innerHTML = data[notification].title;
    notificationText.innerHTML = data[notification].phrase;
    setInLocalStorage(notification)
  }

  pagination.addEventListener('click', (eve)=>{
    notification = eve.target.id -1;
    displayText(notification)
  });

  prevBtn.addEventListener('click', () => {
    if(notification === -1) {
      notifiation = data.length - 1
    }else {
      notification = notification -1
    }
    input.checked = true
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




