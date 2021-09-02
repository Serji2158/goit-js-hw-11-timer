// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);


class CountdownTimer {
  constructor ({ selector, targetDate }) {
 this.targetDate = targetDate;
 this.selector = document.querySelector(selector);

  this.daysSpan = this.selector.querySelector(`[data-value="days"]`);
  this.hourSpan = this.selector.querySelector(`[data-value="hours"]`);
  this.minsSpan = this.selector.querySelector(`[data-value="mins"]`);
  this.secsSpan = this.selector.querySelector(`[data-value="secs"]`);

  this.DELAY = 1000;
  this.intervalId = null;
  }

  pad(value) {
  return String(value).padStart(2, '0') 
 }
 
  getTimeComponents(time) {
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}

  renderTimer(deltaTime) {
  const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
  this.daysSpan.textContent = days;
  this.hourSpan.textContent = hours;
  this.minsSpan.textContent = mins;
  this.secsSpan.textContent = secs;
}
  

  start () {
    let intervalId = setInterval (() => {
      const startTime = Date.now();
      const deltaTime = this.targetDate - startTime;
      this.renderTimer(deltaTime);

      if (deltaTime < 0) {
       stopInterval(intervalId)
      }
    }, this.DELAY);

         }

}

const backCounter = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sept 17, 2021'),
})
backCounter.start();








