import React, { useState } from 'react';
import './App.css';
import SideBarIcons from './components/main/SideBarIcons';
import SideBarList from './components/main/SideBarList';
import MainSection from './components/main/MainSection';

function App() {

	const [classSidebarList, setClassSidebarList] = useState('close');
	const [selectedItemSidebarIcons, setSelectedItemSidebarIcons] = useState('');
	const [selectedComponent, setSelectedComponent] = useState('');

	const openOrCloseSidebarList = (selectedText, newClass) => {
		setClassSidebarList(newClass);
		setSelectedItemSidebarIcons(selectedText);
	}

	const handleSelectedComponent = (selectedText) => {
		setSelectedComponent(selectedText);
	}

	const handleCat = () => {
		setSelectedComponent('CatProfile')
	}

	return (
		<div className='div-main'>
				<SideBarIcons openOrCloseSidebarList={openOrCloseSidebarList} handleCat={handleCat}/>
				<SideBarList 
					classSidebarList={classSidebarList} 
					selectedItem={selectedItemSidebarIcons} 
					handleSelectedComponent={handleSelectedComponent} />
				<MainSection 
					classMainSection={classSidebarList} 
					selectedComponent={selectedComponent} />
		</div>
	);
}

export default App