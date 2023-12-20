import React, { useState } from 'react';
import './App.css';

import TableHighlight from './components/tables/TableHighlight';
import AnimatedTextFill from './components/animations/AnimatedTextFill';
import AnimatedLoading from './components/animations/AnimatedLoading';
import SideBarHoverEffect from './components/sidebars/SideBarHoverEffect';
import DropdownMenu from './components/menus/DropdownMenu';
import LoginRegisterTransition from './components/forms/LoginRegisterTransition';
import InputFloating from './components/inputs/InputFloating';
import PasswordVisibility from './components/inputs/PasswordVisibility';
import NavigationMenuIndicator from './components/menus/NavigationMenuIndicator';
import XRayedCat from './components/animations/XRayedCat';
import AccordionSlider from './components/sliders/AccordionSlider';
import LoginTranslucent from './components/forms/LoginTranslucent';
import HoverableSidebar from './components/sidebars/HoverableSidebar';
import SideBarIcons from './components/main/SideBarIcons';
import SideBarList from './components/main/SideBarList';
import MainSection from './components/main/MainSection';

function App() {

	const [classSidebarList, setClassSidebarList] = useState('close');
	const [selectedItemSidebarIcons, setSelectedItemSidebarIcons] = useState('');

	const openOrCloseSidebarList = (selectedText, newClass) => {
		setClassSidebarList(newClass);
		setSelectedItemSidebarIcons(selectedText);
	}

	return (
		<div className='div-main'>
				<SideBarIcons openOrCloseSidebarList={openOrCloseSidebarList} />
				<SideBarList 
					classSidebarList={classSidebarList} 
					selectedItem={selectedItemSidebarIcons} />
				<MainSection />
		</div>
	);
}

export default App