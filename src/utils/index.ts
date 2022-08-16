export function formatTime(seconds = 0) {
  //handle invalid times
  if (isNaN(seconds) || seconds === Infinity) return '-';

  let s = Math.floor(seconds % 60);
  let m = Math.floor((seconds / 60) % 60);
  let h = Math.floor(seconds / (60 * 60));
  let sFormated = s.toString();
  let mFormated = m.toString();
  let hFormated = h.toString();
  //Check if we need to show hours
  hFormated = h > 0 ? h + ':' : '';
  mFormated = m < 10 ? '0' + m + ':' : m + ':';
  //display one digit minute if minute is less than zero
  mFormated = m <= 0 ? '0:' : mFormated;
  sFormated = s < 10 ? '0' + s : s.toString();
  return hFormated + mFormated + sFormated;
}
// export function formatTime(seconds = 0, guide = seconds) {
//   let s = Math.floor(seconds % 60);
//   let m = Math.floor((seconds / 60) % 60);
//   let h = Math.floor(seconds / 3600);
//   const gm = Math.floor((guide / 60) % 60);
//   const gh = Math.floor(guide / 3600);

//   // handle invalid times
//   if (isNaN(seconds) || seconds === Infinity) {
//     // '-' is false for all relational operators (e.g. <, >=) so this setting
//     // will add the minimum number of fields specified by the guide
//     h = '-';
//     m = '-';
//     s = '-';
//   }

//   // Check if we need to show hours
//   h = h > 0 || gh > 0 ? `${h}:` : '';

//   // If hours are showing, we may need to add a leading zero.
//   // Always show at least one digit of minutes.
//   m = `${(h || gm >= 10) && m < 10 ? `0${m}` : m}:`;

//   // Check if leading zero is need for seconds
//   s = s < 10 ? `0${s}` : s;

//   return h + m + s;
// }

// export function throttle(callback: () => void, limit: number) {
//   let wait = false;
//   return () => {
//     if (!wait) {
//       callback(...arguments);
//       wait = true;
//       setTimeout(() => {
//         wait = false;
//       }, limit);
//     }
//   };
// }
