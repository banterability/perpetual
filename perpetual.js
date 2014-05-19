Date.prototype.DAY_NAMES = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday'
};

Date.prototype.getDayName = function(){
  return Date.prototype.DAY_NAMES[this.getDay()];
};
