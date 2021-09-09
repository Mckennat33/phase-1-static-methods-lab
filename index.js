class Formatter {
  static capitalize(string) {
     return string.charAt().toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^0-9\-]/g,'')
   }
  static titleize(string) {
}
}