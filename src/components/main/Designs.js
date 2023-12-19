export function getListComponents(typeOfDesig) {
  switch (typeOfDesig) {
    case 'Animations':
      return ['Loading', 'Text Fill', 'X-rayed cat'];
    case 'Forms':
      return ['Login-Register Transition', 'Login Translucent'];
    case 'Inputs':
      return ['Floating Input', 'Password Visibility'];
    case 'Menus':
      return ['Dropdown Menu', 'Navigation Menu Indicator'];
    case 'Sidebars':
      return ['Hoverable Sidebar', 'Sidebar Hover Effect'];
    case 'Sliders':
      return ['Accordion Slider'];
    case 'Tables':
      return ['Table Highlight'];
  }
}