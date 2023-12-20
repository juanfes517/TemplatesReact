import TableHighlight from '../tables/TableHighlight';
import AnimatedTextFill from '../animations/AnimatedTextFill';
import AnimatedLoading from '../animations/AnimatedLoading';
import SideBarHoverEffect from '../sidebars/SideBarHoverEffect';
import DropdownMenu from '../menus/DropdownMenu';
import LoginRegisterTransition from '../forms/LoginRegisterTransition';
import InputFloating from '../inputs/InputFloating';
import PasswordVisibility from '../inputs/PasswordVisibility';
import NavigationMenuIndicator from '../menus/NavigationMenuIndicator';
import XRayedCat from '../animations/XRayedCat';
import AccordionSlider from '../sliders/AccordionSlider';
import LoginTranslucent from '../forms/LoginTranslucent';
import HoverableSidebar from '../sidebars/HoverableSidebar';

import ProfileImage from '../../images/Gato.png';

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

export function getComponent(component) {
  switch (component) {
    case 'Loading':
      return (<div><AnimatedLoading /></div>);
    case 'Text Fill':
      return (<div><AnimatedTextFill /></div>);
    case 'X-rayed cat':
      return (<div><XRayedCat /></div>)
    case 'Login-Register Transition':
      return (<div><LoginRegisterTransition /></div>)
    case 'Login Translucent':
      return (<div><LoginTranslucent /></div>)
    case 'Floating Input':
      return (<div><InputFloating /></div>)
    case 'Password Visibility':
      return (<div><PasswordVisibility /></div>)
    case 'Dropdown Menu':
      return (<div><DropdownMenu /></div>)
    case 'Navigation Menu Indicator':
      return (<div><NavigationMenuIndicator /></div>)
    case 'Hoverable Sidebar':
      return (<div><HoverableSidebar /></div>)
    case 'Sidebar Hover Effect':
      return (<div><SideBarHoverEffect /></div>)
    case 'Accordion Slider':
      return (<div><AccordionSlider /></div>)
    case 'Table Highlight':
      return (<div><TableHighlight /></div>)
    case 'CatProfile':
      return (<div className='cat-profile'></div>)
    default:
      return (<div><h1>Hello Firulais!</h1></div>)
  }
}