/*
 * Add waypoints for animated images with Waypoint.js
 */

 $(document).ready(() => {

   const animations = {
     '#animated-1': 'slideInLeft',
     '#animated-2': 'slideInDown',
     '#animated-3': 'slideInRight',
     '#animated-4': 'slideInLeft',
     '#animated-5': 'slideInUp',
     '#animated-6': 'slideInRight'
   }

   for (let id in animations) {
     $(id).css('opacity', 0)
     new Waypoint({
       element: $(id)[0],
       handler: (direction) => {
         $(id).css('opacity', 100)
         $(id).addClass(animations[id])
       },
       offset: 'bottom-in-view'
     })
   }

})

/*
 * Add correct download href for each platform
 * Or hide button if user visits with an unsupported platform
 */
const os = platform.os.family;

if (os.indexOf('OS X') === -1) {
  $('#pulse-download').hide()
}
