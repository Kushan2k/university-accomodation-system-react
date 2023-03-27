export function isLoggedin() {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"))
  } else {
    return null
  }
}
