import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

export default function SortSelector() {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				order by: Relevance
			</MenuButton>
			<MenuList>
				<MenuItem>Relevance</MenuItem>
				<MenuItem>Date added</MenuItem>
				<MenuItem>Name</MenuItem>
				<MenuItem>Release date</MenuItem>
				<MenuItem>Average Rating</MenuItem>
				<MenuItem>Popularity</MenuItem>
			</MenuList>
		</Menu>
	);
}
